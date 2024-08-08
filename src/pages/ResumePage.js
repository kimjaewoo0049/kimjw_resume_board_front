import backgroundImg from '../image/background.webp';
import NavMenu from './navMenu';
import Skill from './component/resumeSkills';

// image
import myImg from '../image/myImg.jpg'
import birthday from '../image/birthday.png'
import email from '../image/email.png'
import phone from '../image/telephone.png'
import address from '../image/address.png'

// skill logo img
import web_logo from '../image/skill_logo/html_css_js_logo.png' 
import java_logo from '../image/skill_logo/java_logo.png' 
import jsp_logo from '../image/skill_logo/JSP_logo.png' 
import mysql_logo from '../image/skill_logo/mysql_logo.png'
import mybatis_logo from '../image/skill_logo/mybatis_logo.png'
import react_logo from '../image/skill_logo/react_logo.png' 
import springBoot_logo from '../image/skill_logo/springboot_logo.png' 
import git_logo from '../image/skill_logo/git_logo.png' 
import postman_logo from '../image/skill_logo/postman_logo2.png' 
import jira_logo from '../image/skill_logo/jira_logo.png' 
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Resume() {

    const navigete = useNavigate;
    
    const skills1 = [
        { imgSrc: web_logo, imgAlt: '웹로고', description: 'HTML의 계층구조를 이해하고 있으며 css와 js를 사용해 화면을 디자인 할 수 있습니다.' },
        { imgSrc: jsp_logo, imgAlt: 'jsp로고', description: 'jsp를 이용해 서버 데이터를 요청하고 화면에 출력할 수 있습니다.' },
        { imgSrc: react_logo, imgAlt: '리엑트로고', description: 'React를 이용해 요소를 컴포넌트화 할 수 있습니다.' },
        { imgSrc: java_logo, imgAlt: '자바로고', description: '자바의 기본사용법을 정확히 알고 있으며 개발문서를 참고하여 원하는 기능을 개발할 수 있습니다.' },
        { imgSrc: springBoot_logo, imgAlt: '스프링부트로고', description: '스프링의 DI, AOP등 POJO 개념을 이해하고 사용할 수 있습니다.' },
    ];

    const skills2 = [
        { imgSrc: mysql_logo, imgAlt: 'mysql로고', description: 'mysql와 mariaDB 등의 DBMS를 사용하여 데이터를 저장 출력 할 수 있습니다.' },
        { imgSrc: mybatis_logo, imgAlt: 'mybatis', description: 'spring에서 mybatis를 이용해 쿼리를 실행 할 수 있습니다.' },
        { imgSrc: git_logo, imgAlt: '깃로고', description: '깃을 이용해 개발 코드에 대한 버전 관리가 가능합니다.' },
        { imgSrc: postman_logo, imgAlt: '포스트맨로고', description: '백엔드 개발시 postman을 이용해 테스트 진행이 가능합니다.' },
        { imgSrc: jira_logo, imgAlt: '지라로고', description: 'jira를 이용한 협업 경험이 있습니다.' },
    ];

    const handleClickButton = (e) => {
        const fileType = e.target.name === 'pdf'? 'resume_pdf_20240808.pdf':'resume_doc_20240808.doc';
        const fileUrl = `${process.env.PUBLIC_URL}/resume/${fileType}`; // 파일 URL
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', fileType); // 파일 이름 설정
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    useEffect (() => {
        if(localStorage.getItem("username")===""){
            alert("로그인 해주세요");
            navigete("/");
        }
    },[])

    return (
        <>
            <NavMenu></NavMenu>
            <div className='resumeContainer'>
                <div className='resumeContent1'>
                    <div>
                        <h1>안녕하세요 신입 개발자 김재우 입니다.</h1>
                        <div className='myInfo'>
                            <div><img src={birthday} alt='생일아이콘'></img><span>1980. 10. 06</span></div>
                            <div><img src={email} alt='메일아이콘'></img><span>kim1656@naver.com</span></div>
                            <div><img src={phone} alt='전화아이콘'></img><span>010-4290-1656</span></div>
                            <div><img src={address} alt='주소아이콘'></img><span>서울시 강동구 상임로 79길 88</span></div>
                            <div>
                                <button className='download' name='pdf' onClick={handleClickButton}>PDF RESUME DOWNLOAD</button>
                                <button className='download' name='doc' onClick={handleClickButton}>DOC RESUME DOWNLOAD</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='myPhoto' src={myImg}></img>
                    </div>
                </div>
                <div className='Introduction'>
                    <div>
                        <p>열정과 끈기로 도전하는 신입 개발자 김재우 입니다.</p>
                        <div>
                            <span>안녕하세요 저는 이제막 새로운 도전을 시작한 43세의 신입 개발자 입니다. 오래전 IT관련 학과를 졸업하고도 빠른 취업을 위해 다른 업계에 몸담았습니다. 하지만 IT 분야에 대한 미련을 버리지 못하고 이직 준비를 시작하였고 결국, 10개월 전 국비지원 IT 교육학원에 입학하여 최우등으로 이수하였고, 이제는 IT 개발 업무에 종사하고자 합니다.</span>
                            <span>저의 주요 경력 사항으로는 중국에 위치한 HP 글로벌 솔루션 센터에서 오랜 시간 동안 근무하며 글로벌 환경에서의 다양한 경험을 쌓았습니다. 글로벌 솔루션 센터란 전세계 HP 고객 지원 센터가 모인 곳으로 근무기간동안 고객의 다양한 요구와 문제를 해결하는 데 주력했습니다. 이 과정에서 고객의 목소리에 귀 기울이고 문제를 신속하게 해결하는 능력을 배양할 수 있었습니다. 이러한 경험은 IT 개발 업무에서도 사용자 중심의 사고와 문제 해결 능력을 발휘하는 데 큰 도움이 될 것입니다. 또한, 약간의 중국어를 구사할 수 있어 글로벌 프로젝트에서도 소통의 장벽을 낮추고, 다양한 문화권의 팀원들과 원활하게 협업할 수 있습니다.</span>
                            <span>저의 가장 큰 강점은 사람에 대한 배려와 끈기입니다. 항상 타인을 배려하며 협업을 중시하는 자세로 일해왔고, 이는 IT 프로젝트에서도 팀원들과의 원활한 협업을 이끌어낼 수 있는 밑바탕이 될 것입니다. 어려운 상황에서도 포기하지 않고 끝까지 완수하려는 끈기는 저를 한층 더 성장하게 만들었습니다. 저의 이러한 성품은 팀 내에서 긍정적인 분위기를 조성하고, 협력하여 문제를 해결하는 데 큰 기여를 할 것입니다.</span>
                            <span>적지않은 나이임에도 신입으로 입사지원을 하는 만큼 경력 인정이나 많은 연봉을 바라지 않습니다. 또 경력이 없다고 주어진 업무에 소홀이 하지도 않겠습니다. 한사람의 개발자로서 고된 업무라도 성실하고 꾸준히 열심히 하여 나이와 관계없이 좋은 결과를 만들어내고 싶습니다. 많은 회사에서 나이만 보고 제 이력서를 거를 수 있겠지만, 제 열정과 성실함을 보여드리고자 합니다. 저는 이 새로운 도전이 결코 늦지 않았음을 증명하고 싶습니다. 긴글 읽어주셔서 감사합니다.</span>
                        </div>
                    </div>
                    
                </div>
                <div className='resumeContent2'>
                    <img className='backgroundImg_resume' src={backgroundImg} alt="배경사진" />
                    <div className='Layer1'>
                        <div>
                            <div className='careerLeft' name='career1'></div>
                            <div className='careerRight' name='career2'></div>
                        </div>
                        <div>
                            <div className='careerLeft'name='career3'>
                                <div>
                                    <h2>2024.04 ~ 2024.06</h2>
                                    <div>
                                        <h3>프리랜서</h3>
                                    </div>
                                </div>
                                <p>경력사항</p>
                                <ul>
                                    <li>현대 글로비스 AEO인증 자동화 시스템 구축</li>
                                </ul>
                            </div>
                            <div className='careerRight'name='career4'></div>
                        </div>
                        <div>
                            <div className='careerLeft' name='career5'></div>
                            <div className='careerRight' name='career6'>
                                <div>
                                    <h2>2020. 07 ~ 2023. 09 </h2>
                                    <div>
                                        <h3>라미</h3>
                                    </div>
                                </div>
                                <p>경력사항</p>
                                <ul>
                                    <li>(주)대한약품에서 생산하는 정제수와 식염수를 쿠팡, 스마트 스토어, 지마켓 등 온라인 플랫폼에 납품 및 판매</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='careerLeft' name='career7'>
                                <div>
                                    <h2>2018. 08 ~ 2020. 05</h2>
                                    <div>
                                        <h3>모야</h3>
                                    </div>
                                </div>
                                <p>경력사항</p>
                                <ul>
                                    <li>자체 솔루션인 원스톱솔루션 개발, 유지 보수</li>
                                    <li>아마존, 이베이등에 등록된 상품을 크롤링하여 지마켓, 11번가, 쿠팡등에 등록, 판매하는 관리툴</li>
                                </ul>
                            </div>
                            <div className='careerRight' name='career8'></div>
                        </div>
                        <div>
                            <div className='careerLeft' name='career9'></div>
                            <div className='careerRight' name='career10'>
                                <div>
                                    <h2>2006. 02 ~ 2018. 02</h2>
                                    <div>
                                        <h3>휴렛 패커드</h3>
                                    </div>
                                </div>
                                <p>경력사항</p>
                                <ul>
                                    <li>고객지원팀 : HP에서 생산되는 PC와 NOTEBOOK의 수리시 사용되는 부품의 관리 및 사용 승인 업무진행</li>
                                    <li>sw 기술지원팀 : 웹페이지 관리, 유지보수</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='careerLeft' name='career11'>
                                <div>
                                    <h2>2005. 02 ~ 2006. 05</h2>
                                    <div>
                                        <h3>MPC</h3>
                                    </div>
                                </div>
                                <p>경력사항</p>
                                <ul>
                                    <li>PC 및 server H/W 엔지니어</li>
                                </ul>
                            </div>
                            <div className='careerRight' name='career12'></div>
                        </div>
                    </div>
                    <div className='Layer2'>
                        <span>2024</span>
                        <div className='careerPoint'>
                            <div className='line'></div>
                            <div className='point'>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <span>2005</span>
                    </div>
                </div>
                <div className='resumeContent3'>
                    <p>SKILL</p>
                    <div>
                        <div className='Layer1_skills'>
                            {skills1.map((skill, index) => (
                                <Skill key={index} imgSrc={skill.imgSrc} imgAlt={skill.imgAlt} description={skill.description}></Skill>
                            ))}
                        </div>
                        <div className='Layer2_skills'>
                            {skills2.map((skill, index) => (
                                <Skill key={index} imgSrc={skill.imgSrc} imgAlt={skill.imgAlt} description={skill.description} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
