import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader'
import ProfileInfo from '../../components/Profile/ProfileInfo/ProfileInfo'
import style from './Profile.module.css'

const Profile = () => {
    return (
        <>
            <div className={style.Profile}>
                <div className={style.Role}>Role</div>
                <h1>Мой профиль</h1>
                <div className={style.ProfileBlock}>
                    <ProfileHeader />
                    <ProfileInfo />
                </div>
            </div>
        </>
    )
}

export default Profile