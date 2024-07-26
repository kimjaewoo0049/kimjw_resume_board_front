import backgroundImg from '../image/main_img.jpg';
import { Link } from 'react-router-dom';

export default function FindPw() {
    return (
        <>
            <div className='window'>
                <div>
                    <form>
                        <input type="text" placeholder="password" />
                        <input type="password" placeholder="new password" />
                        <input type="password" placeholder="new password" />
                    </form>

                    <div className='controlButton'>
                        <Link to="/Login">CHANGE PW</Link>
                        <Link to="/">CANCLE</Link>
                    </div>
                </div>
            </div>
            <img className='backgroundImg' src={backgroundImg} alt="" />
        </>
    )
}