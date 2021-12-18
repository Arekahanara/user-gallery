module.exports = function () {
  return async function (context) {
    const s3 = context.app.get('aws-s3')
    const s3Bucket = context.app.get('s3-bucket')

    if (Array.isArray(context.result)) context.result.forEach(setUploadUrl)
    else setUploadUrl(context.result)
    function setUploadUrl(file) {
      const uploadUrl = s3.getSignedUrl('putObject', {
        Bucket: s3Bucket,
        Key: file.key,
        Expires: 20 * 60, // 20 Minutes,
      })
      context.result.uploadUrl = uploadUrl
    }
    return context
  }
}
