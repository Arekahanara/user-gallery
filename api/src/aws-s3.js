const aws = require('aws-sdk')

module.exports = function (app) {
  app.set('aws-s3', new aws.S3({
    signatureVersion: 'v4',
    region: 'eu-central-1',
    ...app.get('aws-s3')
  }))
}
