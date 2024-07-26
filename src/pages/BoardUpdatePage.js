import backgroundImg from '../image/noteImage3.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import NavMenu from './navMenu';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


export default function BoardCreate() {
    const location = useLocation();
    const contentNum = location.state?.uid;
    const [boardData, setBoardData] = useState({ title: '', content: '' });
    const navigate = useNavigate();
    const token = useSelector((state) => state.user.value)

    console.log(token + "테스트");

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.post(
                "http://localhost:8080/content-find",
                {
                    uid: contentNum
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": token
                    }
                }
            );
            setBoardData(response.data || { title: '', content: '' });
        }
        if (contentNum != null) {
            fetchData();
        }
    }, [contentNum])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBoardData({ ...boardData, [name]: value })
    }

    const handleClickButton = async () => {
        try {

            const response = await axios.post(
                "http://localhost:8080/content-update",
                {
                    uid: contentNum,
                    title: boardData.title,
                    content: boardData.content
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": token
                    }
                }
            ).then((response) => {
                console.log(response)
                if (response.data === "fail") {
                    alert("작성자만 수정할 수 있습니다.")
                } else {
                    alert("수정완료")
                    navigate("/boardView", { state: { contentNum } })
                }
            })
        } catch (error) {
            alert("로그인페이지로 이동합니다.")
            navigate("/login")
        }
    };

    return (
        <>
            <NavMenu></NavMenu>
            <div className='boardMain'>
                <span>Diary page</span>
                <div className='boardCreate'>
                    <div className='boardCreate_Text'>
                        <textarea type='text' name='title' placeholder='제목' value={boardData.title} onChange={handleInputChange}></textarea>
                        <textarea type='text' name='content' placeholder='내용' value={boardData.content} onChange={handleInputChange}></textarea>
                    </div>
                    <div className='boardCreate_Buttons'>
                        <button><Link to='/board' onClick={handleClickButton}>등록</Link></button>
                        <button><Link to='/boardView'>취소</Link></button>
                    </div>
                </div>
            </div>
            <img className='backgroundImg_boardMain' src={backgroundImg} alt="배경사진" />
        </>
    )
}