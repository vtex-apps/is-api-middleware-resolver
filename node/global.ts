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
    customPluginInfo?: string
  }

  type Category = {
    id: number
    name: string
    href: string
    children?: Category[]
  }

  type SearchImage = {
    cacheId: string
    imageId: string
    imageLabel: string | null
    imageTag: string
    imageUrl: string
    imageText: string
  }

  type Variation = {
    name: string
    values: string[]
  }

  type Seller = {
    sellerId: string
    sellerName: string
    addToCartLink: string
    sellerDefault: boolean
    commertialOffer: CommertialOffer
    error?: string
  }

  type SearchInstallment = {
    Value: number
    InterestRate: number
    TotalValuePlusInterestRate: number
    NumberOfInstallments: number
    PaymentSystemName: string
    PaymentSystemGroupName?: string
    Name: string
  }

  type CommertialOffer = {
    DeliverySlaSamplesPerRegion?: Record<
      string,
      { DeliverySlaPerTypes: any[]; Region: any | null }
    >
    Installments: SearchInstallment[]
    discountHighlights?: any[]
    GiftSkuIds?: string[]
    teasers: Teaser[]
    BuyTogether?: any[]
    ItemMetadataAttachment?: any[]
    Price: number
    ListPrice: number
    spotPrice: number
    taxPercentage: number
    PriceWithoutDiscount: number
    RewardValue: number
    PriceValidUntil: string
    AvailableQuantity: number
    Tax: number
    DeliverySlaSamples?: Array<{
      DeliverySlaPerTypes: any[]
      Region: any | null
    }>
    GetInfoErrorMessage?: any | null
    CacheVersionUsedToCallCheckout: string
  }
  type Teaser = {
    id?: string
    name: string
    conditions: TeaserCondition
    effects: TeaserEffects
    featured?: boolean
    teaserType?: string
  }

  type TeaserCondition = {
    minimumQuantity: number
    parameters: TeaserValue[]
  }

  type TeaserEffects = {
    parameters: TeaserValue[]
  }

  type TeaserValue = {
    name: string
    value: string
  }

  type SearchItem = {
    itemId: string
    name: string
    nameComplete: string
    complementName: string
    ean: string
    referenceId: Array<{ Key: string; Value: string }>
    measurementUnit: string
    unitMultiplier: number
    modalType?: any | null
    images: SearchImage[]
    videos?: string[]
    variations: Variation[]
    sellers: Seller[]
    attachments: Array<{
      id: number
      name: string
      required: boolean
      domainValues: string
    }>
    isKit?: boolean
    kitItems?: Array<{
      itemId: string
      amount: number
    }>
  }

  type SearchMetadataItem = {
    Name: string
    NameComplete: string
    MainImage: string
    BrandName: string
    CategoryId: number
    ProductId: number
    id: string
    seller: string
    assemblyOptions: AssemblyOption[]
  }

  type ProductProperty = {
    name: string
    originalName: string
    values: string[]
  }

  type AssemblyOption = {
    id: string
    name: string
    composition: Composition | null
    inputValues: InputValues
  }

  type Composition = {
    minQuantity: number
    maxQuantity: number
    items: CompositionItem[]
  }

  type CompositionItem = {
    id: string
    minQuantity: number
    maxQuantity: number
    initialQuantity: number
    priceTable: string
    seller: string
  }

  type InputValues = {
    [key: string]: RawInputValue
  }

  type RawInputValue = {
    maximumNumberOfCharacters: number
    domain: string[]
  }

  type CompleteSpecification = {
    Values: Array<{
      Id: string
      Position: number
      Value: string
    }>
    Name: string
    Position: number
    IsOnProductDetails: boolean
    FieldId: string
  }

  type SkuSpecification = {
    field: SKUSpecificationField
    values: SKUSpecificationValue[]
  }

  type SKUSpecificationField = {
    name: string
    originalName?: string
    id?: string
  }

  type SKUSpecificationValue = {
    name: string
    id?: string
    fieldId?: string
    originalName?: string
  }

  type SpecificationGroup = {
    originalName: string
    name: string
    specifications: SpecificationGroupProperty[]
  }

  type SpecificationGroupProperty = {
    originalName: string
    name: string
    values: string[]
  }

  type PriceRange = {
    sellingPrice: {
      highPrice: number
      lowPrice: number
    }
    listPrice: {
      highPrice: number
      lowPrice: number
    }
  }

  type Product = {
    cacheId: string
    productId: string
    productName: string
    brand: string
    brandId: number
    linkText: string
    productReference?: string
    categoryId: string
    categoryTree: Category[]
    productTitle?: string
    metaTagDescription: string
    clusterHighlights: Array<Record<string, string>>
    productClusters: Array<Record<string, string>>
    searchableClusters?: Record<string, string>
    categories: string[]
    categoriesIds?: string[]
    link: string
    description: string
    items: SearchItem[]
    itemMetadata?: {
      items: SearchMetadataItem[]
    }
    titleTag: string
    properties: ProductProperty[]
    Specifications?: string[]
    allSpecifications?: string[]
    allSpecificationsGroups?: string[]
    completeSpecifications?: CompleteSpecification[]
    skuSpecifications: SkuSpecification[]
    specificationGroups: SpecificationGroup[]
    priceRange: PriceRange
  }

  type Page = {
    index: number
    proxyUrl: string
  }

  type Pagination = {
    count: number
    current: Page
    before: Page[]
    after: Page[]
    perPage: number
    next: Page
    previous: Page
    first: { index: number }
    last: Page
  }

  type ProductSearchResult = {
    products: Product[]
    recordsFiltered: number
    correction: { misspelled: boolean }
    fuzzy: string
    operator: 'and' | 'or'
    translated: boolean
    pagiantion: Pagination
  }
}
