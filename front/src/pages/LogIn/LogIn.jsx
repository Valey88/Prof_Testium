import style from "./LogIn.module.css"
import axios from "axios"
import { useState, useEffect } from "react"

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

const LogIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  if(localStorage.getItem("token") == null) {} else {
    token()
  }

  const submit = () => {
    axios
      .post("http://127.0.0.1:3001/api/signin", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.tokenPair.accessToken)
        localStorage.setItem("role", response.data.role)
        token()
      })
      .catch((error) => {
        setMessage(error.response.data.message)
      })
  }
  return (
    <div className={style.main}>
      <form onSubmit={handleSubmit} className={style.logForm}>
        <h1>Войти</h1>
        <h3 style={{
          color: "red",
          margin: "10px 0px"
        }}>{message}</h3>
        <div className={style.inpBlock}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Почта"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Пароль"
          />
          <button onClick={submit}>Войти</button>
        </div>
      </form>
    </div>
  )
}

export default LogIn
