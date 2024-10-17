import AWSS3UploadAsh from 'aws-s3-upload-ash/src/aws-s3-upload-ash'


 const config = {
  bucketName: import.meta.env.VITE_BUCKET_NAME,
  // dirName: 'demo', /* optional - when use: e.g BUCKET_ROOT/dirName/fileName.extesion */
  region: import.meta.env.VITE_BUCKET_REGION,
  accessKeyId: import.meta.env.VITE_AWS_ACESS_KEY,
  secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
  s3Url: import.meta.env.VITE_BUCKET_URL,
};



export const S3CustomClient = new AWSS3UploadAsh(config);
