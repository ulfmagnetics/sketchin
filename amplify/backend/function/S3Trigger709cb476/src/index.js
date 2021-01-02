const AWS = require('aws-sdk');
const s3 = new AWS.S3();

// eslint-disable-next-line
exports.handler = async (event, context, callback) => {
  console.log('Received S3 event:', JSON.stringify(event, null, 2));
  // Get the object from the event and show its content type
  const bucket = event.Records[0].s3.bucket.name; //eslint-disable-line
  const key = event.Records[0].s3.object.key; //eslint-disable-line
  console.log(`Bucket: ${bucket}`, `Key: ${key}`);

  const params = {
    Bucket: event.Records[0].s3.bucket.name,
    Key: event.Records[0].s3.object.key,
  };
  console.log(params);

  try {
    const image = await s3.getObject(params).promise();
    console.log('image', image);
  } catch (error) {
    console.log(error);
    return;
  }

  //context.done(null, 'Successfully processed S3 event'); // SUCCESS with message
};
