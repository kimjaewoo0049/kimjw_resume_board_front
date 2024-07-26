import { Link } from "react-router-dom"
import backgroundImg from '../image/noteImage6.jpg';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Join() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userId: "",
        userPw: "",
        userPw2: "",
        userName: "",
        nickName: "-",
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
        try {
            if (formData.userPw === formData.userPw2) {
                const response = await axios.post("http://localhost:8080/join", formData,
                    { headers: { "Content-Type": "application/json" } });
                alert("가입이 완료되었습니다.");
                navigate("/login")
            } else {
                alert("password를 확인해주세요")
            }
        } catch (error) {
            alert("죄송합니다. PASSWORD를 확인해주세요 ㅜㅜ")
        }
    }

    return (
        <>
            <form>
                <div className="joinContaner">
                    <div className="joinWindow">
                        <span>JOIN US!!</span>
                        <input name="userId" placeholder="id" onChange={handleInputChange}></input>
                        <input name="userPw" placeholder="password" onChange={handleInputChange}></input>
                        <input name="userPw2" placeholder="password" onChange={handleInputChange}></input>
                        <input name="email" placeholder="email" onChange={handleInputChange}></input>
                        <input name="userName" placeholder="name" onChange={handleInputChange}></input>
                        <input name="phone" placeholder="phone" onChange={handleInputChange}></input>
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