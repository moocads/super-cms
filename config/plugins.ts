export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        credentials: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
        },
        region: env('AWS_REGION', 'ca-central-1'),
        params: {
          ACL: env('AWS_ACL', 'public-read'),
          Bucket: env('AWS_BUCKET'),
        },
      },
    },
  },
  email: {
    config: {
      provider: 'amazon-ses',
      providerOptions: {
        key: env('AWS_SES_KEY'),
        secret: env('AWS_SES_SECRET'),
        amazon: `https://email.${env('AWS_SES_REGION', 'us-east-1')}.amazonaws.com`,
      },
      settings: {
        defaultFrom: env('AWS_SES_FROM_EMAIL'),
        defaultReplyTo: env('AWS_SES_FROM_EMAIL'),
        testAddress: env('AWS_SES_FROM_EMAIL'),
      },
    },
  },
});