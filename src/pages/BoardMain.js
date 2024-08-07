import backgroundImg from '../image/noteImage3.jpg';
import { useNavigate } from 'react-router-dom';
import NavMenu from './navMenu';
import { useEffect, useState } from 'react';

import axios from 'axios';

export default function BoardMain() {

    const [currentPage, setCurrentPage] = useState(1); // 현재페이지를 알려준다.
    const [postNum, setPostNum] = useState(10); // 한페이지에 몇개씩 출력할것인지 알려준다.
    const [boardData, setBoardData] = useState([]); // 가져온 객체를 담는다
    const [pageCount, setPageCount] = useState(1); // 나중에 post로 바꾸자 // 전체글수 

    const [user, setUser] = useState({ "uid": localStorage.getItem("useruid") }); // user정보
    const [responseData, setResponseData] = useState();
    const [url, setUrl] = useState(localStorage.getItem("url"));

    const navigate = useNavigate();
    const uid = localStorage.getItem("userUid");

    //login후 localStorage에 유저의 정보를 저장하기 위한 함수
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(
                    url + "/userlist",
                    user,
                    { headers: { "Content-Type": "application/json" } }
                );
                response.data.map((arr) => {
                    setResponseData(arr);
                    localStorage.setItem("userInfo", JSON.stringify(arr))
                })
            } catch (error) {
                alert("고객정보 불러오기 오류");
            }
        };
        fetchData();
    }, []);

    //페이징을 하기 위한 함수
    useEffect(() => {
        axios.post(
            url + "/board-list",  // 출력할 게시물을 검색해오기
            {
                postNum: postNum,
                currentPage: currentPage - 1  //입력된 currentPage에 -1하는 이유는 index 0부터 서버에서 처리하기 위해 -1로 데이터 보냄
            },
            { headers: { "Content-Type": "application/json" } }
        ).then((resp) => {
            setBoardData(resp.data);
        });
    }, []);

    //전체 데이터 개수 구하는 부분
    const postCount = async () => {
        const response = await axios.post(
            url + "/post-count",
            { headers: { "Content-Type": "application/json" } }
        );
        setPageCount(response.data);
    }
    postCount();

    //데이터 받아오는 부분
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(
                    url + "/board-list",
                    {
                        postNum: postNum,
                        currentPage: currentPage - 1  //입력된 currentPage에 -1하는 이유는 index 0부터 서버에서 처리하기 위해 -1로 데이터 보냄
                    },
                    { headers: { "Content-Type": "application/json" } }
                );
                setBoardData(response.data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [currentPage])


    //불러온 데이터를 컴포넌트로 만들어 리턴하는 부분
    const dataList = boardData && boardData.map((item, index) => {
        let contentNum = item.uid;
        return (
            <ul className='content' key={index}>
                <li>{contentNum}</li>
                <li value={item.uid} onClick={() => {
                    localStorage.setItem("contentNum", contentNum);
                    localStorage.setItem("currentPage", currentPage);
                    navigate("/boardView", { state: { contentNum, currentPage }})
                    }
                }>{item.title}</li>
                <li>{item.userName}</li>
                <li>{new Date(item.createAt).toLocaleString()}</li>
            </ul>
        )
    });

    //페이지 네이션 출력하는 부분
    const [firstIndex, setFirstIndex] = useState(0); // index 0부터
    const [lastIndex, setLastIndex] = useState(5);  // 5개 출력

    const Pagination = () => {
        const pages = [];
        for (let i = 1; i < Math.ceil(pageCount / 10) + 1; i++) {
            let tagNum = i;
            const currentStyle = { borderBottom: currentPage === tagNum ? '1px solid black' : '1px solid white' }
            pages.push(
                <span key={tagNum} style={currentStyle} value={tagNum} onClick={() => handleClickPage(tagNum)}>
                    {i}
                </span>
            )
        }
        return (pages.slice(firstIndex, lastIndex))
    }

    // 현재페이지(current page에 앞에2 뒤에 2번호 잘라 표시 하는부분)
    useEffect(() => {
        if (currentPage <= 2) {
            setFirstIndex(0);
            setLastIndex(5);
        } else if (currentPage === 3) {
            setFirstIndex(0);
            setLastIndex(5);
        } else if (currentPage > 3 && currentPage < Math.ceil(pageCount / 10) - 1) {
            setFirstIndex(currentPage - 3); // index 0부터
            setLastIndex(currentPage + 2);  // 5개 출력
        }
    }, [currentPage]);

    // 페이지 번호 직접 클릭시 발생 이벤트
    const handleClickPage = (tagNum) => {
        console.log(tagNum + "tagnum")
        console.log(currentPage + "currentpage")
        setCurrentPage(tagNum);
    }

    // 뒤로 page 버튼 이벤트
    const handleClickBack = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(1);
        }
    }
    // 다음 page 버튼 이벤트
    const handleClickNext = () => {
        if (currentPage < Math.ceil(pageCount / 10) - 1) {
            setCurrentPage(currentPage + 1)
        } else {
            setCurrentPage(Math.ceil(pageCount / 10));
        }
    }

    const handleClickCreate = () => {
        navigate("/boardCreate", { state: { uid } })
    }
    return (
        <>
            <NavMenu></NavMenu>
            <div className='boardMain'>
                <span>Diary page</span>
                <div></div>
                <ul className='titles'>
                    <li>no</li>
                    <li>제목</li>
                    <li>작성자</li>
                    <li>시간</li>
                </ul>
                {dataList}
                <div className='board_menu'>
                    <div className='search_menu'>
                        <button className='boardMain_button' onClick={handleClickCreate}>글쓰기</button>
                        <input className='boardMain_search'></input>
                    </div>
                    <div className='paging'>
                        <button name="back" onClick={handleClickBack}>이전</button>
                        <Pagination />
                        <button name="next" onClick={handleClickNext}>다음</button>
                    </div>
                </div>
            </div>
            <img className='backgroundImg_boardMain' src={backgroundImg} alt="배경사진" />

        </>
    )
}