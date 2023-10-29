import style from "./Register.module.css"
import Input from "../../components/globalComponents/Input/Input"
import Button from "../../components/globalComponents/Buttons/Button"
import { useState } from "react"
import axios from "axios"

const handleSubmit = (event) => {
  event.preventDefault()
}

const token = () => {
  axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('token')}`;
  axios.get("http://127.0.0.1:3001/api/profile")
  .then((response) => {
    location.href = "/profile"
  })
  .catch((error) => {
    console.log(error);
  })
}

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [inn, setInn] = useState("")
  const [phone, setPhone] = useState("")
  const [org, setOrg] = useState("")
  const [adress, setAdress] = useState("")
  const [fio, setFio] = useState("")

  if(localStorage.getItem("token") == null) {} else {
    token()
  }

  const submit = () => {
    axios
      .post("http://127.0.0.1:3001/api/signup", {
        email: email,
        fio: fio,
        phone: phone,
        inn: inn,
        name_org: org,
        adress: adress,
        password: password
      })
      .then((response) => {
        localStorage.setItem("token", response.data.tokenPair.accessToken)
        localStorage.setItem("role", response.data.role)
        token()
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  }

  return (
    <div className={style.main}>
      <form onSubmit={handleSubmit} className={style.regForm}>
        <h1>Зарегестрироваться</h1>
        <div className={style.inpBlock}>
          <input type="text"  onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="text"  onChange={(e) => setFio(e.target.value)} placeholder="ФИО" />
          <input type="text"  onChange={(e) => setPhone(e.target.value)} placeholder="Телефон" />
          <input type="text"  onChange={(e) => setOrg(e.target.value)} placeholder="Название организации" />
          <input type="text"  onChange={(e) => setAdress(e.target.value)} placeholder="Адресс" />
          <input type="text"  onChange={(e) => setInn(e.target.value)} placeholder="ИНН" />
          <input type="text"  onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />
          <button onClick={submit}>Зарегестрироваться</button>
        </div>
      </form>
    </div>
  )
}

export default Register
