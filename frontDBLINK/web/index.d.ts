/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg , .png, .webp' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}
