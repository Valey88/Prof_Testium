import ProfilePayment from "../../components/Profile/PrfilePayment/ProfilePayment";
import ProfileHeader from "../../components/Profile/ProfileHeader/ProfileHeader";
import style from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <div className={style.Profile}>
        <div className={style.Role}>Role</div>
        <h1>Мой профиль</h1>
        <div className={style.ProfileBlock}>
          <ProfileHeader />
          <ProfilePayment />
        </div>
      </div>
    </>
  );
};

export default Profile;
