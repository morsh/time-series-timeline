declare module "alt-utils/lib/connectToStores" {
  export default function connectToStores<T>(reactClass: T) : T;
}

declare module "xhr-request" {
  let request: any;
  export = request;
}