import { useState } from 'react';
import backgroundImg from '../image/main_img.jpg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function FindPw() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({userId: "", email: ""});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:8080/pwCheck", formData,
            { headers: { 'Content-Type': 'application/json' } });
        if(response.data === true){
            alert("인증메일을 발송했습니다. 메일함을 확인해주세요");
            localStorage.setItem("userId", formData.userId);
            localStorage.setItem("email", formData.email);
            navigate("/findPw");
            const sendMailResponse = await axios.post("http://localhost:8080/sendMail", formData,
                { headers: { 'Content-Type': 'application/json' } });
        }else{
            alert("가입되어있는 유저가 아닙니다. ID혹은 EMAIL을 확인해주세요");
        }
    }

    return (
        <>
            <div className='window'>
                test
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name='userId' placeholder="ID" value={formData.userId} onChange={handleInputChange}/>
                        <input type="text" name='email' placeholder="EMAIL" value={formData.email} onChange={handleInputChange}/>
                        <div className='controlButton'>
                            <button type='submit'>SEND MAIL</button>
                            <Link to="/Login">CANCLE</Link>
                        </div>
                    </form>    
                </div>
            </div>
            <img className='backgroundImg' src={backgroundImg} alt="" />
        </>
    )
}