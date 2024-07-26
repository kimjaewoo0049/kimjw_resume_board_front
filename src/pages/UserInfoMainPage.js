import backgroundImg from '../image/noteImage5.jpg';
import userIconImg from '../image/kimjw_icon.png';
import { Link } from 'react-router-dom';
import NavMenu from './navMenu';

export default function UserInfoMain() {

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    return (
        <>
            <NavMenu></NavMenu>
            <div className='boardMain'>
                <span>User Info page</span>
                <div className='userInfo'>
                    <div>
                        <div className='Profile'>
                            <div>
                                <img className='userImg' src={userIconImg} alt="유저사진"></img>
                                <input type="file" className="real-upload" accept="image/*" required multiple />
                            </div>
                            <div>
                                <p>{userInfo.nickName}</p>
                                <p>{userInfo.userId}</p>
                            </div>
                        </div>
                        <div className='userContactInfo'>

                            <p>{userInfo.email}</p>
                            <p>{userInfo.phone}</p>
                        </div>
                        <div className='userInfoMain_button'>
                            <button><Link to="/userInfoUpdate">수정</Link></button>
                            <button><Link to="/">삭제</Link></button>
                            <button><Link to="/board">뒤로가기</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <img className='backgroundImg_boardMain' src={backgroundImg} alt="배경사진" />

        </>
    )
}