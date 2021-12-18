module.exports = function () {
  return async context => {
    if (!context.params.account.user) return
    context.data.userId = context.params.account.user._id
  }
}
