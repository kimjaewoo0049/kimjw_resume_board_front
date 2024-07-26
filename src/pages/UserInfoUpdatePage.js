import backgroundImg from '../image/noteImage5.jpg';
import userIconImg from '../image/kimjw_icon.png';
import { Link } from 'react-router-dom';
import NavMenu from './navMenu';

export default function UserInfoUpdate() {


    return (
        <>
            <NavMenu></NavMenu>
            <div className='boardMain'>
                <span>User Info page</span>
                <div className='updateContaner'>
                    <div className="updateWindow">
                        <div>
                            <img className='userImg' src={userIconImg} alt="유저사진"></img>
                            <input type="file" class="real-upload" accept="image/*" required multiple />
                        </div>
                        <input placeholder="id"></input>
                        <input placeholder="password"></input>
                        <input placeholder="password"></input>
                        <input placeholder="name"></input>
                        <input placeholder="e-mail"></input>
                        <input placeholder="phone"></input>
                        <div className='userInfoMain_button'>
                            <button><Link to="/userInfoUpdate">수정</Link></button>
                            <button><Link to="/userInfoMain">취소</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <img className='backgroundImg_boardMain' src={backgroundImg} alt="배경사진" />

        </>
    )
}