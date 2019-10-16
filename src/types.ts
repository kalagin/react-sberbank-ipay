declare global {
  interface Window {
    IPAY: any;
    ipayCheckout: any;
    ipay: object;
  }
}

window.IPAY = window.IPAY || {};

export default window;
