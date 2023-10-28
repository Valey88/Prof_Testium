import style from "./LogIn.module.css"
import axios from "axios"
import { useState, useEffect } from "react"

const handleSubmit = (event) => {
  event.preventDefault()
}

const LogIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const submit = () => {
    axios
      .post("http://127.0.0.1:3001/api/signin", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error.response.data.message)
        return <div>{error.response.data.message}</div>
      })
  }
  return (
    <div className={style.main}>
      <form onSubmit={handleSubmit} className={style.logForm}>
        <h1>Войти</h1>
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
