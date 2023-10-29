import style from "./ProfilePayment.module.css";
import Button from "../../globalComponents/Buttons/Button";
function ProfilePayment() {
  return (
    <div className={style.ProfilePaymentBlock}>
      <div className={style.ProfilePaymentHeading}>
        <h3>Ваши карты</h3>
        <div className={style.ProfilePaymentBlockInside}>
          <div className={style.PaymentBlock}>
            <div>
              <img src="/src/assets/icon/free-icon-visa-349221.png" alt="" />
              <p>xxxx xxxx xxxx 3829</p>
            </div>
            <div>
              <button>
                <img src="/src/assets/icon/piper.svg" alt="" />
              </button>
              <button>
                <img src="/src/assets/icon/rabit.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className={style.AddPaymentBlock}>
          <div>
            <Button backBtn="#f5f5f5" widthBtn={250}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <img src="/src/assets/icon/plus.svg" alt="" />
                <p>Добавить карту</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfilePayment;
