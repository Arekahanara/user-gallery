module.exports = function () {
  return async function (context) {
    if (!context.params.$download) return context

    const s3 = context.app.get('aws-s3')
    const s3Bucket = context.app.get('s3-bucket')

    context.result.data = (await s3.getObject({
      Bucket: s3Bucket,
      Key: context.result.key,
      ResponseContentType: context.mimeType
    }).promise()).Body
    return context
  }
}
