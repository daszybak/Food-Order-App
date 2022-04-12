import React, {useEffect} from 'react';

import meals from '../../api/meals.api';

import './checkout.styles.scss';

const Checkout = ({closeModal, amount, items}) => {
  // useEffect(() => {
  //   const postMeals = () => {
  //     const response = await meals.post();
  //   };
  // });

  return (
    <>
      <form>
        <div className="form__grid">
          <div>
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="first-name" />
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="last-name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input type="text" name="address" />
          </div>
        </div>
        <div className="total">
          <p>Total Amount</p>
          <p>${amount.toFixed(2)}</p>
        </div>
        <hr className="form__hr"></hr>
        <div className="form__buttons actions">
          <button onClick={closeModal} type="button" className="button--alt">
            Go back
          </button>
          <button>Order</button>
        </div>
      </form>
    </>
  );
};

export default Checkout;
