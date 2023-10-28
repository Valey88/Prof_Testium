import style from "./Trial.module.css";
import Input from "../../components/globalComponents/Input/Input";
import Button from "../../components/globalComponents/Buttons/Button";

const handleSubmit = (event) => {
  event.preventDefault();
};

function Trial() {
  return (
    <div className={style.main}>
      <form onSubmit={handleSubmit} className={style.regForm}>
        <div className={style.heading}>
          <h1>Заполните форму и получите доступ бесплатно</h1>
          <h3 style={{ paddingBottom: "4%" }}>
            (После отправки формы мы свяжемся с Вами для уточнения деталий)
          </h3>
        </div>
        <div className={style.inpBlock}>
          <Input
            typeBtn="text"
            placeInp="Имя"
            х
            backInp="rgba(255, 255, 255, 0.5)"
            colorInp="#000"
          />
          <Input
            typeBtn="text"
            placeInp="+7(999)999-99-99"
            backInp="rgba(255, 255, 255, 0.5)"
            colorInp="#000"
          />
          <Input
            typeBtn="text"
            placeInp="Название компании"
            backInp="rgba(255, 255, 255, 0.5)"
            colorInp="#000"
          />

          <Button backBtn="#fff" colorBtn="#000">
            Отправить
          </Button>
        </div>
      </form>
    </div>
  );
}
export default Trial;
