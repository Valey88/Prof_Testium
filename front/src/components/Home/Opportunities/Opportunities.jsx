import style from "./Opportunities.module.css";

function Opportunities() {
  return (
    <div className={style.OpportunitiesBlock}>
      <div className={style.headingText}>
        <h2>Возможности</h2>
      </div>
      <div>
        <div className={style.OpportunitiesInsideBlock}>
          <div className={style.HeadP}>
            <h3>Не требует установки и интеграции</h3>
            <p>
              Начать использовать платформу можно уже в день покупки. <br /> Для
              запуска не нужно привлекать IT-специалистов.
            </p>
          </div>
          <div className={style.headH}>
            <h1>01</h1>
          </div>
        </div>
        <div className={style.OpportunitiesInsideBlock}>
          <div className={style.HeadP}>
            <h3>Просто для сотрудников</h3>
            <p>
              В ПрофТестиум легко создавать контент и учиться. <br /> Как
              пользоваться платформой, понятно после первых минут работы в нем.
            </p>
          </div>
          <div className={style.headH}>
            <h1>02</h1>
          </div>
        </div>
        <div className={style.OpportunitiesInsideBlock}>
          <div className={style.HeadP}>
            <h3>Создание платформы</h3>
            <p>
              Создание своего портала, наполнение ее необходимым контентом
              (загрузка отделов и сотрудников, загрузка обучающих материалов,{" "}
              <br />
              наполнение и запуск тестирования на всех или определенных групп
              сотрудников).
            </p>
          </div>
          <div className={style.headH}>
            <h1>03</h1>
          </div>
        </div>
        <div className={style.OpportunitiesInsideBlock}>
          <div className={style.HeadP}>
            <h3>Интеграция</h3>
            <p>
              Платформа предусматривает интеграцию с BMP-файлами, чтобы
              результаты и запись прохождения <br /> VR-тестов с помощью очков
              отображались на платформе.
            </p>
          </div>
          <div className={style.headH}>
            <h1>04</h1>
          </div>
        </div>
        <div className={style.OpportunitiesInsideBlock}>
          <div className={style.HeadP}>
            <h3>Любое устройство</h3>
            <p>
              Учиться можно не только с компьютера, но и с планшета или телефона
            </p>
          </div>
          <div className={style.headH}>
            <h1>05</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Opportunities;
