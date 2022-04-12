import React, {useState, useContext} from 'react';

import meals from '../../api/meals.api';
import useHttp from '../../hooks/post-http.hook';
import OrderSummary from '../order-summary.container/order-summary.component';

import './checkout.styles.scss';
import CartContext from '../../store/cart';

const validateNameInput = (name) => name.trim().length > 2;
const validateEmailInput = (email) => email.trim().includes('@');
const validateAddressInput = (address) => address.trim().length > 5;

const Checkout = ({closeModal, amount, items}) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const {clearCart} = useContext(CartContext);

  const {
    input: {inputValue: enteredFirstName},
    enteredInputIsValid: enteredFirstNameIsValid,
    inputFieldIsInvalid: firstNameFieldIsInvalid,
    handleOnChange: handleFirstNameOnChange,
    handleOnBlur: handleFirstNameOnBlur,
    resetInput: resetFirstName,
  } = useHttp(validateNameInput);

  const {
    input: {inputValue: enteredLastName},
    enteredInputIsValid: enteredLastNameIsValid,
    inputFieldIsInvalid: lastNameFieldIsInvalid,
    handleOnChange: handleLastNameOnChange,
    handleOnBlur: handleLastNameOnBlur,
    resetInput: resetLastName,
  } = useHttp(validateNameInput);

  const {
    input: {inputValue: enteredEmail},
    enteredInputIsValid: enteredEmailIsValid,
    inputFieldIsInvalid: emailFieldIsInvalid,
    handleOnChange: handleEmailOnChange,
    handleOnBlur: handleEmailOnBlur,
    resetInput: resetEmail,
  } = useHttp(validateEmailInput);

  const {
    input: {inputValue: enteredAddress},
    enteredInputIsValid: enteredAddressIsValid,
    inputFieldIsInvalid: addressFieldIsInvalid,
    handleOnChange: handleAddressOnChange,
    handleOnBlur: handleAddressOnBlur,
    resetInput: resetAddress,
  } = useHttp(validateAddressInput);

  const handleFormOnSubmit = (event) => {
    event.preventDefault();
    handleFirstNameOnBlur();
    handleLastNameOnBlur();
    handleEmailOnBlur();
    handleAddressOnBlur();

    if (
      !enteredFirstNameIsValid ||
      !enteredLastNameIsValid ||
      !enteredEmailIsValid ||
      !enteredAddressIsValid
    )
      return;

    const postOrder = async () => {
      try {
        const response = await meals.post('orders.json', {
          firstName: enteredFirstName,
          lastName: enteredLastName,
          address: enteredAddress,
          email: enteredEmail,
          items: items,
          amount: amount,
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    postOrder();

    resetFirstName();
    resetLastName();
    resetEmail();
    resetAddress();

    clearCart();

    setFormIsValid(true);
  };

  const firstNameInputClasses = firstNameFieldIsInvalid ? 'invalid' : '';
  const lastNameInputClasses = lastNameFieldIsInvalid ? 'invalid' : '';
  const emailInputClasses = emailFieldIsInvalid ? 'invalid' : '';
  const addressInputClasses = addressFieldIsInvalid ? 'invalid' : '';

  return (
    <>
      {!formIsValid && (
        <form onSubmit={handleFormOnSubmit}>
          <div className="form__grid">
            <div className={firstNameInputClasses}>
              <div className="form__label-input-flex">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  name="first-name"
                  value={enteredFirstName}
                  onChange={handleFirstNameOnChange}
                  onBlur={handleFirstNameOnBlur}
                />
              </div>
              {firstNameFieldIsInvalid && (
                <p className="error-text">
                  First name length must be greater than 2 characters
                </p>
              )}
            </div>
            <div className={lastNameInputClasses}>
              <div className="form__label-input-flex">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  name="last-name"
                  value={enteredLastName}
                  onChange={handleLastNameOnChange}
                  onBlur={handleLastNameOnBlur}
                />
              </div>
              {lastNameFieldIsInvalid && (
                <p className="error-text">
                  Last name length must be greater than 2 characters
                </p>
              )}
            </div>
            <div className={emailInputClasses}>
              <div className="form__label-input-flex">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  value={enteredEmail}
                  onChange={handleEmailOnChange}
                  onBlur={handleEmailOnBlur}
                />
              </div>
              {emailFieldIsInvalid && (
                <p className="error-text">Email must include '@' symbol</p>
              )}
            </div>
            <div className={addressInputClasses}>
              <div className="form__label-input-flex">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  value={enteredAddress}
                  onChange={handleAddressOnChange}
                  onBlur={handleAddressOnBlur}
                />
              </div>
              {addressFieldIsInvalid && (
                <p className="error-text">
                  First name length must be greater than 2 characters
                </p>
              )}
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
      )}
      {formIsValid && <OrderSummary />}
    </>
  );
};

export default Checkout;
