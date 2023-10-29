import Cart from "../../../components/globalComponents/Cart/Cart";
import style from "./Keywords.module.css";

const cartObj = [
  {
    number: "01",
    heading: "Библиотека готовых уроков",
    info: "Сотни материалов для увлекательных уроков",
    icon: "/src/assets/icon/book.svg",
  },
  {
    number: "02",
    heading: "Видеочат",
    info: "Попробуй наше удобное видео общение",
    icon: "/src/assets/icon/camera.svg",
  },
  {
    number: "03",
    heading: "Виртуальная доска",
    info: "Иновационный инструмент для повышения мотивации",
    icon: "/src/assets/icon/board.svg",
  },
  {
    number: "04",
    heading: "Библиотека готовых уроков",
    info: "Сотни материалов для увлекательных уроков",
    icon: "/src/assets/icon/fluent_window.svg",
  },
  {
    number: "05",
    heading: "Видеочат",
    info: "Попробуй наше удобное видео общение",
    icon: "/src/assets/icon/system-uicons_translate.svg",
  },
  {
    number: "06",
    heading: "Виртуальная доска",
    info: "Иновационный инструмент для повышения мотивации",
    icon: "/src/assets/icon/arcticons.svg",
  },
];

function Keywords() {
  return (
    <div id="keywords" className={style.KeywordsBlock}>
      <div className={style.KeywordsInside}>
        <div className={style.KeywordsHeaderText}>
          <h2>Преимущества</h2>
        </div>
        <div className={style.KeywordsMain}>
          {cartObj.map((item) => {
            return (
              <Cart
                icon={item.icon}
                number={item.number}
                heading={item.heading}
                info={item.info}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Keywords;
