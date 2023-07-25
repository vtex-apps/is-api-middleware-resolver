import { Service, RecorderState, ParamsContext } from '@vtex/api'
import schema from 'vtex.adserver-graphql/graphql'

import { Clients, clients } from './clients'
import sponsoredProducts from './resolvers/sponsoredProducts'

export default new Service<Clients, RecorderState, ParamsContext>({
  clients,
  graphql: {
    resolvers: {
      Query: {
        sponsoredProducts,
      },
    },
    schema,
  },
})
