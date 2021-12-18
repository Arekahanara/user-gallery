import feathers from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'

const app = feathers()
const restClient = rest('/api')
app.configure(restClient.fetch(window.fetch))

/**
import app from './feathers'

onMounted(async () => {
  const fileService = app.service('file')

  await fileService.create({
    name: 'test'
  })
})
 */

export default app
