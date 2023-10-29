import style from "./TrialBlock.module.css";
import Button from "../../../components/globalComponents/Buttons/Button";
import Input from "../../../components/globalComponents/Input/Input";
import { Link } from "react-router-dom";

function TrialBlock() {
  return (
    <div className={style.trialTitle}>
      <div className={style.trialText}>
        <h1>
          Попробуйте платформу
          <br />
          прямо сейчас
        </h1>
        <p>
          Приглашаем вас начать свой увлекательный путь уже <br /> сегодня.
          Создайте свой портал или школу и <br /> наполните ее необходимым
          контентом.
        </p>
        <div className={style.trialButton}>
          <Link to="/trial">
            <Button backBtn="#fff" colorBtn="#6d32ff" widthBtn={246}>
              Попробовать бесплатно
            </Button>
          </Link>
          <Link to="/login">
            <Button
              backBtn="none"
              colorBtn="#fff"
              borderBtn="1px solid #fff"
              widthBtn={246}
            >
              Войти в аккаунт
            </Button>
          </Link>
        </div>
      </div>
      <div className={style.trialImg}>
        <img
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
          }}
          src="/public/digital02_pixian_ai 1.svg"
          alt=""
        />
      </div>
    </div>
  );
}
export default TrialBlock;
