


import { useLocation, useNavigate } from 'react-router-dom';

const location = useLocation();

const contentNum = location.state?.contentNum;

const fetchData = async () => {
    try {
        const response = await axios.post(
            "http://localhost:8080/content-view",
            {
                uid: contentNum
            },
            { headers: { "Content-Type": "application/json" } }
        );
        setContentData(response)
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

