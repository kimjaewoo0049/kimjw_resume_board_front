import { Link } from 'react-router-dom';
import backgroundImg from '../image/main_img.jpg';

export default function FindId() {
    return (
        <>
            <div className='window'>
                <div>
                    <form>
                        <input type="enterId" placeholder="enter ID" />
                        <input type="enterName" placeholder="enter name" />
                        <input type="enterPhone" placeholder="enter phonenumber" />
                    </form>

                    <div className='find'>
                        <div>
                            <Link to={"/FindPw"}>Find Password</Link >
                        </div>
                    </div>

                    <div className='controlButton'>
                        <Link to="/Login">FIND ID</Link>
                        <Link to="/">CANCLE</Link>
                    </div>
                </div>
            </div>
            <img className='backgroundImg' src={backgroundImg} alt="" />
        </>
    )
}