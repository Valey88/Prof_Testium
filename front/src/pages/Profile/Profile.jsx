import { useEffect, useState } from "react";
import ProfilePayment from "../../components/Profile/PrfilePayment/ProfilePayment";
import ProfileHeader from "../../components/Profile/ProfileHeader/ProfileHeader";
import ProfileInfo from "../../components/Profile/ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState({})
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('token')}`;
    axios.get("http://127.0.0.1:3001/api/profile")
    .then((response) => {
      setUser(response.data)
    })
    .catch((error) => {
      return error
    })
  }, [])

  console.log(user)
  return (
    <>
      <div className={style.Profile}>
        <div className={style.Role}>Role</div>
        <h1>Мой профиль</h1>
        Адрес: {user.adress}<br />
        ФИО: {user.fio}<br />
        ИНН: {user.inn}<br />
        Название огранизации: {user.name_org}<br />
        Телефон: {user.phone}<br />
        E-mail: {user.email}<br />
        <br />
        <br />
        <div className={style.ProfileBlock}>
          <ProfileHeader />
          {/* <ProfileInfo /> */}
          <ProfilePayment />
        </div>
      </div>
    </>
  );
};

export default Profile;
