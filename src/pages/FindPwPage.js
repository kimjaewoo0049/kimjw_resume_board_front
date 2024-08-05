import { useEffect, useState } from 'react';
import backgroundImg from '../image/main_img.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function FindPw() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState ({
        userId: localStorage.getItem("userId")||"",
        email: localStorage.getItem("email")||"",
        code: "",
        newPassword: "",
        reNewPassword: ""
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData ({...formData, [name]: value});
    }

    const handleClickButton = async() => {
        // 비밀번호 정규표현식 : 영문숫자조합, 특수문자, 8자리
        const pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_])(?=.*[A-Z]).{8,}$/;

        if(formData.email === null){
            alert("인증번호를 입력해주세요");
        }else if(formData.newPassword === null && formData.reNewPassword ===null){
            alert("패스워드가 서로 다릅니다. 비밀번호를 확인해주세요");
        }else if(pwRegex.test(formData.newPassword) === false){
            alert("패스워드는 영문숫자조합, 특수문자 포함, 총8자리 이상이어야 합니다.");
        }else{
            const response = await axios.post("http://localhost:8080/rePassword", formData,
                { headers: { 'Content-Type': 'application/json' } });
            alert("변경이 완료되었습니다.");
            navigate("/login");
        }
    }

    return (
        <>
            <div className='window'>
                <div>
                    <form>
                        <input name='code' type="text" placeholder="인증번호" onChange={handleInputChange}/>
                        <input name='newPassword' type="password" placeholder="new password" onChange={handleInputChange}/>
                        <input name='reNewPassword' type="password" placeholder="new password" onChange={handleInputChange}/>
                    </form>
                    <div className='controlButton'>
                        <button onClick={handleClickButton}>CHANGE PW</button>
                        <Link to="/findPwInputId">CANCLE</Link>
                    </div>
                </div>
            </div>
            <img className='backgroundImg' src={backgroundImg} alt="" />
        </>
    )
}