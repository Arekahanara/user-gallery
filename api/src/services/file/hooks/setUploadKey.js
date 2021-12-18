const {ObjectID} = require('mongodb')

module.exports = function () {
  return async function (context) {
    const s3Folder = context.app.get('s3-folder')
    const system = context.app.get('system')
    let fileId

    if (context.data.keyId) {
      const key = `${s3Folder}/${system}/${context.data.keyId}`
      context.data.key = key
    } else {
      if (context.data._id) {
        fileId = context.data._id
      } else {
        fileId = new ObjectID()
        context.data._id = fileId
      }
      const key = `${s3Folder}/${system}/${fileId}`
      context.data.key = key
    }
    return context
  }
}
