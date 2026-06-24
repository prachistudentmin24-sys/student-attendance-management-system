import { useEffect, useState } from "react";
import axios from "axios";

function Reports(){

    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get(
            "http://localhost:5000/api/attendance/report",
            {
                headers:{
                    Authorization:
                    localStorage.getItem("token")
                }
            }
        )
        .then(res=>setData(res.data));

    },[]);

    return(
        <>
            <h1>Attendance Report</h1>

            {
                data.map((item)=>(
                    <p key={item._id}>
                        {new Date(item.date).toDateString()}
                        - {item.status}
                    </p>
                ))
            }
        </>
    );
}

export default Reports;