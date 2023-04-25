type AfterArgs = {
  args: {
    searchResult: ProductSearchResult
    params: SearchParams
    customPluginInfo: string
  }
}

export default async function after(
  _: unknown,
  { args }: AfterArgs,
  __: Context
): Promise<ProductSearchResult> {
  // This is just an example. Change the implementation of this function however you like :)

  // revert products order
  args.searchResult.products.reverse()

  return args.searchResult
}
