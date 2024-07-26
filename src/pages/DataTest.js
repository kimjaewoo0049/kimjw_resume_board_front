import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Test() {
    const [data, setData] = useState();

    useEffect(() => {
        //axios.get("https://apis.data.go.kr/4580000/SCAPI04/SC_Campground?serviceKey=DnG4BMwLkG%2FfMYXeWcgwdsLs745J27qkmIzKD2hR53RFQBbbHDF7PuRH6Cpnif4ygKtgiUGHmRwLGNLT%2F%2BcOog%3D%3D&pageUnit=20&pageIndex=1&dataTy=json&searchCondition=l_Gubun&searchKeyword=K")
        axios.get("https://apis.data.go.kr/1360000/TourStnInfoService1/getCityTourClmIdx1?serviceKey=DnG4BMwLkG%2FfMYXeWcgwdsLs745J27qkmIzKD2hR53RFQBbbHDF7PuRH6Cpnif4ygKtgiUGHmRwLGNLT%2F%2BcOog%3D%3D&pageNo=1&numOfRows=10&dataType=json&CURRENT_DATE=2023123110&DAY=30&CITY_AREA_ID=5013000000")

            .then((response) => {
                setData(response.data.response.body.items.item);
                //setData(response.data);
            })
    }, []);

    console.log(data);

    const dataList = data && data.map((item, index) => (
        <ul key={index}>
            <li>{item.totalCityName}</li>
        </ul>
    ));

    return (
        <>
            <div className='contents'>
                {dataList}
            </div>
        </>
    );
}