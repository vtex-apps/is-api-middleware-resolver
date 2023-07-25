import { ServiceContext } from '@vtex/api'

import { Clients } from './clients/index'

declare global {
  type Context = ServiceContext<Clients>

  type SelectedFacet = {
    key: string
    value: string
  }

  type Operator = 'AND' | 'OR'

  type Options = {
    allowRedirect: boolean
  }

  type BoostAction = 'add' | 'remove' | 'promote' | 'demote'

  type BoostType =
    | 'term'
    | 'id'
    | 'skuId'
    | 'skuEan'
    | 'skuReference'
    | 'productLink'
    | 'product'
    | 'sku'
    | 'productId'
    | 'attribute'

  type DynamicRule = {
    action: BoostAction
    type: BoostType
    value: string
  }

  type SearchParams = {
    query?: string
    page?: string
    count?: string
    sort?: string
    operator?: string
    fuzzy?: string
    locale?: string
    allowRedirect?: boolean
    regionId?: string
    simulationBehavior?: 'skip' | 'only1P' | 'default' | null
    hideUnavailableItems?: boolean | null
    productOriginVtex?: string
    selectedFacets?: SelectedFacet[]
    dynamicRules?: DynamicRule[]
    searchState?: string
  }

  type Rule = {
    id: string
  }

  type SponsoredProduct = {
    productId: string
    rule: Rule
  }
}
