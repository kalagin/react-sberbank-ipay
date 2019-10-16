import './third-party/ipay';
import PayPreloader from './components/PayPreloader';
import window from './types';

export default {
  Preloader: PayPreloader,
  ipayCheckout: window.ipayCheckout,
}