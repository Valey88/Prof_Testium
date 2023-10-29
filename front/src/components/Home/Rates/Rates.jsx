import style from './Rates.module.css'
import RatesCard from './ratesComp/RatesCard'

const Rates = () => {
    return (
        <div className={style.Rates}>
            <h2>Тарифы</h2>
            <div className={style.Cards}>
                <RatesCard />
            </div>
        </div>
    )
}

export default Rates