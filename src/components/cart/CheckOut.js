import style from './CheckOut.module.css';
import { useRef, useState } from 'react';

const isEmpty = (value) => value.trim() === '';

const CheckOut = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();

  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const street = streetInputRef.current.value;

    const city = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(name);
    const enteredStreetIsValid = !isEmpty(street);
    const enteredCityIsValid = !isEmpty(city);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: name,
      street: street,
      city: city,
    });
  };

  return (
    <form className={style.form} onSubmit={confirmHandler}>
      <div className={style.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter your name</p>}
      </div>
      <div className={style.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter your street</p>}
      </div>

      <div className={style.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter your city </p>}
      </div>
      <div className={style.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className={style.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default CheckOut;
