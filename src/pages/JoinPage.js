import { Link } from "react-router-dom"
import backgroundImg from '../image/noteImage6.jpg';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Join() {

    const navigate = useNavigate();
    const [url, setUrl] = useState(localStorage.getItem("url"));
    const [formData, setFormData] = useState({
        userId: "",
        userPw: "",
        userPw2: "",
        userName: "",
        nickName: "",
        address: "",
        phone: "",
        email: ""
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleClickButton = async (e) => {
        e.preventDefault();
        // 비밀번호 정규표현식 : 영문숫자조합, 특수문자, 8자리
        const pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_])(?=.*[A-Z]).{8,}$/;
        // email 검증
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // 핸드폰 검증 " -제외"
        const phoneRegex = /^010\d{8}$/;

        
        if (pwRegex.test(formData.userPw) === false) {
            alert("입력하신 비밀번호는 비밀번호 규정에 맞지 않습니다. 다시한번 확인해주세요");
        } else if (formData.userPw !== formData.userPw2){
            alert("비밀번호가 서로 다릅니다. 다시한번 확인해주세요");
        } else if (emailRegex.test(formData.email) === false) {
            alert("이메일 형식에 맞지 않습니다. 다시한번 확인해주세요");
        } else if (phoneRegex.test(formData.phone) === false){    
            alert("전화번호 형식에 맞지 않습니다. 핸드폰 번호를 숫자만(-제외) 입력해주세요");
        } else{
            const regexResponse = await axios.post(url + "/infoRegex", formData,
                { headers: { "Content-Type": "application/json" } });
            if(regexResponse.data === "성공" ){
                const response = await axios.post(url + "/join", formData,
                    { headers: { "Content-Type": "application/json" } });
                alert("가입이 완료되었습니다.");
                navigate("/login")
            }else {
                alert(regexResponse.data);
            }
        }



    }
    return (
        <>
            <form>
                <div className="joinContaner">
                    <div className="joinWindow">
                        <span>JOIN US!!</span>
                        <input name="userId" placeholder="id" onChange={handleInputChange}></input>
                        <input name="userPw" placeholder="password" type="password" onChange={handleInputChange}></input>
                        <input name="userPw2" placeholder="re_password" type="password" onChange={handleInputChange}></input>
                        <input name="nickName" placeholder="nickName" onChange={handleInputChange}></input>
                        <input name="email" placeholder="email" onChange={handleInputChange}></input>
                        <input name="userName" placeholder="name" onChange={handleInputChange}></input>
                        <input name="phone" placeholder="phone (only number)" onChange={handleInputChange}></input>
                        <input name="address" placeholder="address" onChange={handleInputChange}></input>
                        <button onClick={handleClickButton}>CREATE</button>
                        <Link to={'/login'}>already registered? sign in</Link>
                    </div>
                </div>
                <img className='backgroundImg' src={backgroundImg} alt="" />
            </form>
        </>
    )
}