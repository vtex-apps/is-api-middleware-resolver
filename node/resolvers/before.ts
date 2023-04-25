export default async function before(
  _: unknown,
  args: SearchParams,
  __: Context
): Promise<SearchParams> {
  // This is just an example. Change the implementation of this function however you like :)

  if (args.query === 'shoes') {
    const myDynamicRules: DynamicRule[] = [
      {
        action: 'promote',
        type: 'id',
        value: '123',
      },
    ]

    return {
      ...args,
      dynamicRules: myDynamicRules,
      customPluginInfo: JSON.stringify({
        info: 'this will be shared to the after middleware',
      }),
    }
  }

  return args
}
