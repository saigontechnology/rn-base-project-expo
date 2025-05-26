interface IDataRefs {
  eventName: string
  callback: (param: unknown) => void
}

export type IRefs = { [key: string]: IDataRefs }

export type EmitterListener = {
  count: number
  refs: IRefs
}
