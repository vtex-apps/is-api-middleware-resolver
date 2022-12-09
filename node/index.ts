import { Service, RecorderState, ParamsContext } from '@vtex/api'
import schema from 'vtex.is-api-middleware-graphql/graphql'

import { Clients, clients } from './clients'
import before from './resolvers/before'
import after from './resolvers/after'

export default new Service<Clients, RecorderState, ParamsContext>({
  clients,
  graphql: {
    resolvers: {
      Query: {
        before,
        after,
      },
    },
    schema,
  },
})
