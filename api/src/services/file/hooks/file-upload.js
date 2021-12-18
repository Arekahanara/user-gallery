module.exports = function () {
  return async function (context) {
    if (!context.data.data) return context
    const s3 = context.app.get('aws-s3')
    const s3Bucket = context.app.get('s3-bucket')

    await s3.putObject({
      Bucket: s3Bucket,
      Key: context.data.key,
      Body: context.data.data,
      ContentEncoding: context.data.mimeType
    }).promise()
    return context
  }
}
