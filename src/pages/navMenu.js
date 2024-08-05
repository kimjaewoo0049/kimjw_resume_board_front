import { Link } from 'react-router-dom';
import userIconImg from '../image/kimjw_icon.png';
import homeIconImg from '../image/home.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userData } from './app/slice/userSlice.js';



function NavMenu() {

    const [myClass, setMyClass] = useState('hiddenMenuOff');
    const userName = localStorage.getItem("username")
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 버튼 클릭 시 className 변경
    const handlerMenuClick = () => {
        //현재 상태에 따라 반전시킴
        setMyClass((classNameValue) =>
            (classNameValue === 'hiddenMenuOff' ? 'hiddenMenu' : 'hiddenMenuOff'));
    };

    const handleClickButton = () => {
        alert("로그아웃 되었습니다. 안녕히가세요")
        dispatch(userData(" "));
        localStorage.clear();
        navigate("/")
    }

    return (
        <>
            <div className='navbar'>
                <div className='userIcon'>
                    <Link to='/userInfoMain'><img className='userImg' src={userIconImg} alt="유저사진"></img></Link>
                </div>
                <div className='userName'>
                    <span>{userName}</span>
                    <div>
                        <span><Link to='/userInfoMain'>user Info</Link></span>
                        <span onClick={handleClickButton}>Log out</span>
                    </div>
                </div>
                <div className='menu'>
                    <Link to='/board'><img src={homeIconImg} alt='home'></img></Link>
                    <span><Link to='/resume'>RESUME PAGE</Link></span>
                    <span><Link to='/board'>BOARD PAGE</Link></span>
                    <span>준비중</span>
                    <a className="menu_icon" onClick={handlerMenuClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
            </div >
            <div className={myClass} id='test'>
                <span><Link to='/resume'>RESUME PAGE</Link></span>
                <span><Link to='/board'>BOARD PAGE</Link></span>
                <span>Portfolio.3</span>
            </div>
        </>
    )
}

export default NavMenu