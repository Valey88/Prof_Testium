import style from "./ProfileInfo.module.css"

const ProfileInfo = () => {
  return (
    <div className={style.ProfileInfo}>
      <form className={style.imgForm}>
        <img src="/src/assets/icon/profile_3135823 (1).png" alt="" />
        <div>
          <input
            id="file-input"
            type="file"
            name="file"
            multiple
            style={{ display: "none" }}
          />
          <label for="file-input">Выберите файл</label>
        </div>
      </form>
      <div>
        
      </div>
    </div>
  )
}

export default ProfileInfo
