import style from "./Cart.module.css";

const Cart = ({ icon, heading, info, number }) => {
  return (
    <div className={style.cart}>
      <div>
        <h1>{number}.</h1>
        <h2>{heading}</h2>
      </div>
      <div>
        <img src={icon} />
        <p>{info}</p>
      </div>
    </div>
  );
};

export default Cart;
