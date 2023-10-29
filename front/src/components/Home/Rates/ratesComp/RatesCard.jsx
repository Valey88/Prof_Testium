import Button from "../../../globalComponents/Buttons/Button"
import style from "./Rates.Card.module.css"

const RatesCard = ({ name, price }) => {
  return (
    <div className={style.RatesCard}>
      <h3>{name}</h3>
      <span>{price} руб./мес</span>
      <div className={style.conditions}>
        <div>
          <img src="/front/src/assets/icon/Vector.svg" />
          <p>Изменение дизайна </p>
        </div>
        <div>
          <img src="/front/src/assets/icon/Vector.svg" />
          <p>Что-то еще  </p>
        </div>
        <div>
          <img src="/front/src/assets/icon/Vector.svg" />
          <p>Что-то еще  </p>
        </div>
        <div>
          <img src="/front/src/assets/icon/Vector.svg" />
          <p>Что-то еще  </p>
        </div>
        <div>
          <img src="/front/src/assets/icon/Vector.svg" />
          <p>Что-то еще  </p>
        </div>
        
      </div>
      <Button widthBtn="100%" backBtn="#fff">
        Приобрести
      </Button>
    </div>
  )
}

export default RatesCard
