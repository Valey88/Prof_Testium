import style from "./ProfileHeader.module.css"

const ProfileHeader = () => {
  return (
    <div className={style.ProfileHeader}>
      <ul>
        <li>
          <a href="">Профиль</a>
        </li>
        <li>
          <a href="">Платежная информация</a>
        </li>
        <li>
          <a href="">Модули</a>
        </li>
      </ul>
    </div>
  )
}

export default ProfileHeader
