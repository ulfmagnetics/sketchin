const AWS = require('aws-sdk');
const S3 = new AWS.S3();
const Sharp = require('sharp');
const chunk = require('lodash.chunk');
const path = require('path');

const { bmp_rgb } = require('./jsbmp.js');

// TODO: determine dimensions by parsing the S3 key, e.g. /upload/64x32/image.jpg
const MATRIX_WIDTH = 64;
const MATRIX_HEIGHT = 32;

// based on https://amplify-workshop.go-aws.com/70_generating_thumbnails/10_processing_photos_with_the_S3_trigger_lambda_function.html

const zeroPad = (num, padding = 2) => ("0".repeat(padding) + num).slice(-padding);
const toHex = (i) => zeroPad(i.toString(16));

async function processRecord(record) {
  const bucketName = record.s3.bucket.name;
  const key = decodeURIComponent(record.s3.object.key.replace(/\+/g, " "));
  console.log('processRecord', JSON.stringify(record))

  if (record.eventName !== "ObjectCreated:Put") {
    console.log('Is not a new file');
    return;
  }

  if (!key.includes('upload/')) {
    console.log('Does not look like an upload from user');
    return;
  }

  const image = await S3.getObject({ Bucket: bucketName, Key: key }).promise();

  const buffer = await Sharp(image.Body).resize(MATRIX_WIDTH, MATRIX_HEIGHT).flip().raw().toBuffer();

  const rgbs = chunk(Array.from(buffer), 3);
  const pixels = rgbs.map((rgb) => rgb.map(toHex).join(''));

  const data = bmp_rgb(MATRIX_WIDTH, MATRIX_HEIGHT, pixels);

  const keyPrefix = key.substr(0, key.indexOf('/upload/'));
  const basename = path.basename(key).split('.')[0];
  await S3.putObject({
    ACL: 'public-read',
    Body: Buffer.from(data, 'binary'), // eslint-disable-line
    Bucket: bucketName,
    Key: `${keyPrefix}/imported/${basename}.bmp`,
  }).promise();
}

// eslint-disable-next-line
exports.handler = async (event, context, callback) => {
  console.log('Received S3 event:', JSON.stringify(event, null, 2));

  try {
    event.Records.forEach(processRecord);
    callback(null, { status: 'Image Processed' });
  } catch (error) {
    console.log(error);
    callback(error);
  }
};
