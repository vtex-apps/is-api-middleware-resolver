export default async function sponsoredProducts(
  _: unknown,
  __: SearchParams,
  ___: Context
): Promise<SponsoredProduct[]> {
  // This is just an example. Change the implementation of this function however you like :)

  return [
    {productId: '1', rule: {id: 'promotedProduct'}}
  ]
}
