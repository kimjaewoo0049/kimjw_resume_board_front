import backgroundImg from '../image/background.webp';
import NavMenu from './navMenu';
import Skill from './component/resumeSkills';

// image
import myImg from '../image/myImg.jpg'
import birthday from '../image/birthday.png'
import email from '../image/email.png'
import phone from '../image/telephone.png'
import address from '../image/address.png'
import hpLogo from '../image/company_Icon/hp_logo.png'

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

export default function Resume() {

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

    const handleClickButton = () => {
        const fileUrl = '../image/skill_logo/jira_logo.png'; // 파일 URL
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', 'file.pdf'); // 파일 이름 설정
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

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
                            <div><img src={address} alt='주소아이콘'></img><span>서울시 강동구 상임로 79길 88 롯데캐슬베네루체 710동 1103호</span></div>
                            <button className='download' onClick={handleClickButton}>RESUME DOWNLOAD</button>
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
                            <span>38살 무렵, IT에 대한 열정으로 개발 공부를 시작한 늦깎이 신입 개발자입니다. 다른 직업에 종사하면서도 꾸준히 관심을 가져왔던 IT 분야에 본격적으로 뛰어들어, 국비지원 교육을 최우등으로 마쳤습니다. 2018년 첫 취업에 성공했지만, 1년 반만에 회사가 폐업했습니다</span>
                            <span>코로나 팬데믹으로 취업이 지연되며, 생계를 위해 사업을 진행했습니다. 이 과정에서 비즈니스 스킬과 문제 해결 능력을 키울 수 있었습니다. 비록 IT 분야에서 잠시 멀어졌지만, 개발자로서의 열정은 계속되었습니다.</span>
                            <span>이제 다시 IT 개발자로서의 길을 걷고자 합니다. 나이는 숫자에 불과하다는 믿음으로, 마지막 도전을 향한 강한 의지와 열정을 가지고 있습니다. HP에서 12년 동안 쌓아온 고객 서비스 경험과 글로벌 환경에서의 업무 능력은 IT 개발 업무에서도 큰 자산이 될 것입니다. 특히 사용자 중심의 사고와 문제 해결 능력은 귀사에서 기여할 수 있는 중요한 강점입니다.</span>
                            <span>사람에 대한 배려와 끈기를 중요시하며, 팀 내에서 긍정적인 분위기를 조성하고 협업을 중시하는 자세로 일해왔습니다. 어려운 상황에서도 포기하지 않는 의지는 저를 성장하게 만들었습니다. 이러한 성품은 IT 프로젝트에서도 팀원들과의 협업과 문제 해결에 큰 기여를 할 것입니다.</span>
                            <span>늦은 나이에 다시 도전하는 만큼, 경력 인정이나 많은 연봉을 기대하지 않습니다. 성실하고 꾸준한 노력으로 좋은 결과를 만들어내고 싶습니다. 열정과 성실함을 보여드리며, 귀사에서 빛을 발할 수 있도록 최선을 다하겠습니다. 감사합니다.</span>
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
                                    <h2>2020. 07 ~ 2023. 09                                    </h2>
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
