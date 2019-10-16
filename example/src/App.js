import React, { Component } from 'react'
import SberbankIPay from 'react-sberbank-ipay';

export default class App extends Component {
  render() {
    return (
      <div>
        <SberbankIPay.Preloader classNamePreloader="test" />
        <button onClick={() => SberbankIPay.ipayCheckout({
          amount: 500,
          currency: 'RUB',
          order_number: '',
          description: 'А. С. Пушкин. Избранное (подарочное издание)'
        },
          function (order) { /*showSuccessfulPurchase(order) */},
          function (order) { /*showFailurefulPurchase(order) */ })
        }>
          Start pay!
        </button>
      </div>
    )
  }
}
