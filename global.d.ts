export {};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
declare module "@react-email/render";
