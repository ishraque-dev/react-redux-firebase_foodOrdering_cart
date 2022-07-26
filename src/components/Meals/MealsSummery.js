import React from 'react';
import style from './mealsSummery.module.css';
const MealsSummery = () => {
  return (
    <section className={style.summary}>
      <h2>This Project is Powered by </h2>
      <h2>React-Redux & Firebase</h2>

      <p>Highly optimized structured code and best practices</p>
      {/* <small>
        View source Code 👉
        <a
          href="https://github.com/ishraque-dev/react-redux-firebase_foodOrdering_cart"
          target="_blank"
          rel="noreferrer"
        >
          Here👈
        </a>
        Don't forget to leave a star 🤗
      </small> */}
    </section>
  );
};

export default MealsSummery;
