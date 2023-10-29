import style from "./ProfilePayment.module.css";
function ProfilePayment() {
  return (
    <div className={style.ProfilePaymentBlock}>
      <div className={style.ProfilePaymentHeading}>
        <h2>Ваши карты</h2>
        <div className={style.ProfilePaymentBlockInside}>
          <div className={style.PaymentBlock}>
            <img src="" alt="" />
            <p>xxxx xxxx xxxx 3829</p>
            <button>
              <img src="" alt="" />
            </button>
            <button></button>
          </div>
        </div>
        <div className={style.AddPaymentBlock}>
          <div>
            <button>
              <div>
                <p></p>
                <img src="" alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfilePayment;
