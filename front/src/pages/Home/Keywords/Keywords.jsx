import Cart from "../../../components/globalComponents/Cart/Cart"
import style from "./Keywords.module.css"

const cartObj = [
  {
    number: '01',
    heading: 'Библиотека готовых уроков',
    info: 'Сотни материалов для увлекательных уроков',
    icon: '/src/assets/icon/book.svg'
  },
  {
    number: '02',
    heading: 'Видеочат',
    info: 'Попробуй наше удобное видео общение',
    icon: '/src/assets/icon/camera.svg'
  },
  {
    number: '03',
    heading: 'Виртуальная доска',
    info: 'Иновационный инструмент для повышения мотивации',
    icon: '/src/assets/icon/board.svg'
  }
]

function Keywords() {
  return (
    <div className={style.KeywordsBlock}>
      <div className={style.KeywordsInside}>
        <div className={style.KeywordsHeaderText}>
          <h1>Ключевые преимущества</h1>
        </div>
        <div className={style.KeywordsMain}>
          {cartObj.map(item => {
            return (
              <Cart
              icon={item.icon}
              number={item.number}
              heading={item.heading}
              info={item.info}
            />
            )
          })}
          
        </div>
      </div>
    </div>
  )
}
export default Keywords
