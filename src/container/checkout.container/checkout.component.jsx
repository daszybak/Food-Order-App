import React from 'react';

const Checkout = ({closeModal}) => {
  return (
    <div>
      <form>
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
        <button>Order</button>
      </form>
      <button onClick={closeModal}>Go back</button>
    </div>
  );
};

export default Checkout;
