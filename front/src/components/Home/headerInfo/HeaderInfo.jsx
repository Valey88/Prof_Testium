import style from "./HeaderInfo.module.css"
import Button from "../../globalComponents/Buttons/Button"
// import Button from "../../components/globalComponents/Buttons/Button"

const HeaderInfo = () => {
  return (
    <div className={style.headerBlock}>
      <div className={style.headerText}>
        <h1>
          Платформа нового поколения <br /> Для онлайн обучения
        </h1>
        <ul>
          <li>
            один месяц бесплатных занятий познакомит вас с возможностями
            интерактивной платформы
          </li>
          <li>
            самостоятельное создание своего портала и наполнение его необходимым
            контентом
          </li>
        </ul>
        <div className={style.headerButton}>
          <Button backBtn="#fff" colorBtn="#6d32ff" widthBtn="30%">
            Попробовать бесплатно
          </Button>
        </div>
      </div>
      <div className={style.headerImg}>
        <img src="/public/b2b-online-form 1.svg" alt="" />
      </div>
    </div>
  )
}

export default HeaderInfo
