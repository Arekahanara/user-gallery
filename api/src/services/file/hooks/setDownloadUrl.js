module.exports = function () {
  return async function (context) {
    if (context.params.$skipDownloadUrl) return context
    const s3 = context.app.get('aws-s3')
    const s3Bucket = context.app.get('s3-bucket')

    if (Array.isArray(context.result)) context.result.forEach(setDownloadUrl)
    else if (Array.isArray(context.result.data)) context.result.data.forEach(setDownloadUrl)
    else setDownloadUrl(context.result)
    function setDownloadUrl(file) {
      const downloadUrlLifespan = 20 * 30 // 20 Minutes
      const downloadUrl = s3.getSignedUrl('getObject', {
        Bucket: s3Bucket,
        Key: file.key,
        Expires: downloadUrlLifespan,
        ResponseContentType: file.mimeType,
        ResponseContentDisposition: `attachment; filename="${file.name}"`
      })
      file.downloadUrl = downloadUrl
      file.downloadUrlLifespan = downloadUrlLifespan
    }
    return context
  }
}
