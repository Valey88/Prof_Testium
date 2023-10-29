import style from './Rates.module.css'
import RatesCard from './ratesComp/RatesCard'

const Rates = () => {
    return (
        <div className={style.Rates}>
            <h2>Тарифы</h2>
            <div className={style.Cards}>
                <RatesCard name='Малый бизнес' price='10 000' />
                <RatesCard name='Малый бизнес' price='10 000' />
                <RatesCard name='Малый бизнес' price='10 000' />
            </div>
        </div>
    )
}

export default Rates