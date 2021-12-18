const {ObjectID} = require('mongodb')

module.exports = function () {
  return async function (context) {
    const s3Folder = context.app.get('s3-folder')
    let fileId

    if (context.data.keyId) {
      const key = `${s3Folder}/${context.data.keyId}`
      context.data.key = key
    } else {
      if (context.data._id) {
        fileId = context.data._id
      } else {
        fileId = new ObjectID()
        context.data._id = fileId
      }
      const key = `${s3Folder}/${fileId}`
      context.data.key = key
    }
    return context
  }
}
