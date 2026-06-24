import axios from "axios";

function Attendance(){

    const markAttendance = async()=>{

        await axios.post(
            "http://localhost:5000/api/attendance/mark",
            {},
            {
                headers:{
                    Authorization:
                    localStorage.getItem("token")
                }
            }
        );

        alert("Attendance Marked");
    }

    return(
        <>
            <h1>Attendance</h1>

            <button onClick={markAttendance}>
                Mark Present
            </button>
        </>
    )
}

export default Attendance;