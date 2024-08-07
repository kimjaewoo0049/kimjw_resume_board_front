
import { useEffect, useState } from 'react';
import backgroundImg from '../image/noteImage5.jpg';
import { Link } from 'react-router-dom';


export default function Main() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return (() => clearInterval(id))
    }, []);

    const formattedTime = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    }).format(time);

    return (
        <div className='loginPage'>
            <div>
                <div className='headline'>
                    <p>W</p><p>ELCOME</p>
                </div>
                <p>저의 포트폴리오 사이트에방문해주셔서 감사합니다.</p>
                <span className='mainPageclock'>{formattedTime}</span>
                <button type="button" className="btn btn-success"><Link to="/Login">Login</Link></button>
            </div>
            <img className='backgroundImg' src={backgroundImg} alt="" />
        </div>
    )
}