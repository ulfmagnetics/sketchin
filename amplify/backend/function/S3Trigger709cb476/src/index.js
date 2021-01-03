const AWS = require('aws-sdk');
const S3 = new AWS.S3();
const Sharp = require('sharp');
const _chunk = require('lodash.chunk');

const { bmp_rgb } = require('./jsbmp.js');

// TODO: pull these in via env variables
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

  // Note that we're "flopping" the image around its horizontal X axis since bmp_rgb
  // expects the data to be stored bottom-to-top.
  // TODO: is this working as expected?
  const buffer = await Sharp(image.Body).resize(MATRIX_WIDTH, MATRIX_HEIGHT).flop().raw().toBuffer();

  const rgbs = _chunk(Array.from(buffer), 3);
  const pixels = rgbs.map((rgb) => rgb.map(toHex).join(''));

  const data = bmp_rgb(MATRIX_WIDTH, MATRIX_HEIGHT, pixels);

  const keyPrefix = key.substr(0, key.indexOf('/upload/'));
  await S3.putObject({
    ACL: 'public-read',
    Body: Buffer.from(data, 'binary'),
    Bucket: bucketName,
    Key: `${keyPrefix}/imported/test.bmp`, // TODO: use environment variable with UUID
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
