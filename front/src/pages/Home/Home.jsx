import Button from "../../components/globalComponents/Buttons/Button";
import Input from "../../components/globalComponents/Input/Input";
import style from "./Home.module.css";
import Keywords from "./Keywords/Keywords";
import TrialBlock from "./Trialplatform/TrialBlock";

const Home = () => {
  return (
    <div>
      <div className={style.headerContent}>
        <div className={style.headerBlock}>
          <div className={style.headerTitle}>
            <div className={style.headerImg}>
              <img src="/public/b2b-online-form 1.svg" alt="" />
            </div>
            <div className={style.headerText}>
              <h1>
                Платформа нового поколения
                <br />
                Для онлайн обучения
              </h1>
              <li>
                один месяц бесплатных занятий познакомит вас
                <br /> с возможностями интерактивной платформы
              </li>
              <li>
                один месяц бесплатных занятий познакомит
                <br /> вас с возможностями интерактивной платформы
              </li>
              <div className={style.headerButton}>
                <Button backBtn="#fff" colorBtn="#6d32ff" widthBtn={246}>
                  Попробовать бесплатно
                </Button>
                <Button
                  backBtn="none"
                  colorBtn="#fff"
                  borderBtn="1px solid #fff"
                  widthBtn={246}
                >
                  Войти в аккаунт
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Keywords />
      <TrialBlock />
    </div>
  );
};

export default Home;
