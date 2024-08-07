import backgroundImg from '../image/main_img.jpg';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from './app/slice/userSlice.js';
import '../function.js'
import axios from 'axios';



export default function Login() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: "", password: "" });
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    localStorage.setItem("url", "http://3.36.57.117:8080");
    const [url, setUrl] = useState(localStorage.getItem("url"));

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(url+"/login", formData,
                { headers: { "Content-Type": "application/x-www-form-urlencoded" } });

            const token = response.headers.get('authorization'); // header가 authorization로 시작하는 토큰 가지고 오기
            const tokenArr = token.split(".");  // "."을 기준으로로 잘라 배열을 생성
            const payload = tokenArr[1];  // 그중 1번 index에 있는 payload를 가지고옴
            const decodePayload = atob(payload); // atob 함수에 payload를 전달해 실행하면 디코드 된다.
            const tokenData = JSON.parse(decodePayload); // json으로 변경해준다.

            if (token != null) {
                alert(tokenData.username + "님 안녕하세요 방문해주셔서 감사합니다.");
                dispatch(userData(String(token)));  // redux 저장
                localStorage.setItem("useruid", tokenData.userUid)
                localStorage.setItem("username", tokenData.username)
                navigate("/board")
            }
        } catch (error) {
            alert("죄송합니다. ID 혹은 PASSWORD를 확인해주세요 ㅜㅜ")
        }
    }

    return (
        <div>
            <div className='window'>
                <div >
                    <form onSubmit={handleSubmit}>
                        <input name="username" placeholder="id" value={formData.username} onChange={handleInputChange} />
                        <input type="password" name="password" placeholder="password" value={formData.password} onChange={handleInputChange} />
                        <div className='find'>
                            <div>
                                <Link to="/findId">ID 찾기</Link>
                                <Link to="/findPwInputId">Password 재발급</Link>
                            </div>
                            <Link to={'/Join'}>회원가입</Link>
                        </div>
                        <div className='controlButton'>
                            <button type='submit'>SIGN UP</button>
                            <Link to="/"><button>CANCLE</button></Link>
                        </div>
                    </form>
                </div>
            </div>
            <img className='backgroundImg' src={backgroundImg} alt="" />
        </div>
    )
}