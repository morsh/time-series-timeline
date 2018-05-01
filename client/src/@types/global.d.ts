declare module "alt-utils/lib/connectToStores" {
  export default function connectToStores<T>(reactClass: T) : T;
}

declare module "xhr-request" {
  let request: any;
  export = request;
}

declare module "react-calendar-timeline/lib" {
  let temp: any;
  export default temp;
}

declare module "react-calendar-timeline/lib/resize-detector/container" {
  let temp: any;
  export default temp;
}