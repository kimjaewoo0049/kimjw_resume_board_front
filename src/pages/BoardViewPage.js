import backgroundImg from '../image/noteImage3.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import NavMenu from './navMenu';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function BoardView() {

    const location = useLocation();
    const contentNum = location.state?.contentNum;
    const currentPage = location.state?.currentPage;
    const navigate = useNavigate();
    const [contentData, setContentData] = useState();

    const token = useSelector((state) => state.user.value)

    //데이터 불러오기
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(
                    "http://localhost:8080/content-view", // 이주소는 서버주소임 스프링 확인할것
                    {
                        uid: contentNum  //아래 Content-Type에는 제이슨 방식으로 요청한다고 되어있기 때문에 제이슨 형식으로 보내야함
                    },
                    { headers: { "Content-Type": "application/json" } }
                );
                setContentData(response)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        if (contentNum) {
            fetchData();
        }
    }, [contentNum]);

    // 글정보 컴포넌트
    const ContentInfo = () => {
        return (
            <>
                {contentData && contentData.data && (
                    <>
                        <p>작성자: {contentData.data.userName}</p>
                        <p>제   목: {contentData.data.title}</p>
                        <p>작성일: {new Date(contentData.data.createAt).toLocaleString()}</p>
                    </>
                )}
            </>
        );
    }

    // 본문출력컴포넌트
    const Content = () => {
        return (
            <>
                {contentData && contentData.data && (
                    <p>{contentData.data.content}</p>
                )}
            </>
        );
    }

    const [delPopup, setDelPopup] = useState("popupOff")
    const [updtPopup, setUpdtPopup] = useState("popupOff")
    const [formData, setFormData] = useState({ uid: contentNum, userPw: "" })

    //삭제 승인창 팝업 이벤트
    const handlerPopupDeleteClick = () => {
        setDelPopup((value) => (
            value === 'popupOff' ? 'popup' : 'popupOff'
        ));
        setUpdtPopup('popupOff');
    };
    //업데이트 승인창 팝업 이벤트
    const handlerPopupUpdateClick = () => {
        setUpdtPopup((value) => (
            value === 'popupOff' ? 'popup' : 'popupOff'
        ));
        setDelPopup('popupOff');
    };

    // 삭제버튼 이벤트
    const handleClickDelete = (e) => {
        e.preventDefault();
        setDelPopup((value) => (
            value === 'popupOff' ? 'popup' : 'popupOff'
        ));

        const test = axios.post(
            "http://localhost:8080/content-delete",
            {
                uid: contentNum
            },
            {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": token
                }
            }
        ).then((response) => {
            console.log(response)
            if (response.data === "fail") {
                alert("작성자만 삭제할수 있습니다.")
            } else {
                alert("삭제완료")
                navigate("/board", { state: { contentNum, currentPage } })
            }
        })
        console.log(test)
    };

    //업데이트 버튼 이벤트
    const handleClickUpdate = () => {
        setUpdtPopup((value) => (
            value === 'popupOff' ? 'popup' : 'popupOff'
        ));
        let uid = contentData.data.uid;
        navigate('/boardUpdate', { state: { uid } }, { replace: true });
    };
    // 돌아가기 버튼 클릭으로 이전페이지로 돌아가는 이벤트
    const handleClickBack = () => {
        navigate("/board", { state: { contentNum, currentPage } })
    }
    //브라우저 back버튼을 이용해 이번페이지로 돌아가는 이벤트
    window.onpopstate = () => {
        navigate("/board", { state: { contentNum, currentPage } })
    }

    return (
        <>
            <NavMenu></NavMenu>
            <div className='boardMain'>
                <span>Diary page</span>
                <div className='textInfo'>
                    <ContentInfo></ContentInfo>
                    <div>
                        <button className='boardView_button' onClick={handlerPopupUpdateClick}>수 정</button>
                        <button className='boardView_button' onClick={handlerPopupDeleteClick}>삭 제</button>
                        <button className='boardView_button' onClick={handleClickBack}>뒤로가기</button>
                    </div>
                    <div className={delPopup}>
                        <p>삭제하시겠습니까?</p>
                        <form>
                            <div>
                                <button type='submit' onClick={handleClickDelete}>삭제</button>
                                <button onClick={handlerPopupDeleteClick}>취소</button>
                            </div>
                        </form>
                    </div>
                    <div className={updtPopup}>
                        <p>수정하시겠습니까?</p>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <button type='submit' onClick={handleClickUpdate}>수정</button>
                                <button onClick={handlerPopupUpdateClick}>취소</button>
                            </div>
                        </form>
                    </div>
                    <div className='mainContent'><br></br>
                        <Content></Content>
                    </div>
                </div>
            </div>
            <img className='backgroundImg_boardMain' src={backgroundImg} alt="배경사진" />
        </>
    )
}