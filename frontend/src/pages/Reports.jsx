import { useEffect, useState } from "react";
import api from "../api";

function Reports() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const res = await api.get("/attendance/report", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setData(res.data);
      } catch (err) {
        alert(err.response?.data?.message || "Something went wrong");
      }
    };

    fetchReport();
  }, []);

  return (
    <>
      <h1>Attendance Report</h1>

      {data.map((item) => (
        <p key={item._id}>
          {new Date(item.date).toDateString()} - {item.status}
        </p>
      ))}
    </>
  );
}

export default Reports;