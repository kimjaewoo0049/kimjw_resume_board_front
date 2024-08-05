import { Link } from 'react-router-dom';
import backgroundImg from '../image/main_img.jpg';
import axios from 'axios';
import { useState } from 'react';

export default function FindId() {

    const [formData, setFormData] = useState({
        userName: "",
        email: ""
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }


    const handleClickFindId = async() => {
        const response = await axios.post("http://localhost:8080/findId", formData,
        { headers: { "Content-Type": "application/json" } });
        if(response.data !== ""){
            alert("ID는 "+response.data+" 입니다.")
        } else {
            alert("등록되어있지 않은 고객입니다. 가입 후 이용해주세요")
        }
    }

    return (
        <>
            <div className='window'>
                <div>
                    <form>
                        <input type="enterName" name='userName' placeholder="enter name" onChange={handleInputChange} />
                        <input type="enterEmail" name='email' placeholder="enter email" onChange={handleInputChange}/>
                    </form>

                    <div className='find'>
                        <div>
                            <Link to={"/FindPw"}>Find Password</Link >
                        </div>
                    </div>

                    <div className='controlButton'>
                        <button onClick={handleClickFindId}>FIND ID</button>
                        <Link to="/">CANCLE</Link>
                    </div>
                </div>
            </div>
            <img className='backgroundImg' src={backgroundImg} alt="" />
        </>
    )
}