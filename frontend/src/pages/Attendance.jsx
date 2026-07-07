import { useState } from "react";
import api from "../api";

function Attendance() {
  const [loading, setLoading] = useState(false);

  const markAttendance = async () => {
    setLoading(true);

    try {
      const res = await api.post(
        "/attendance/mark",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Attendance</h1>

      <button onClick={markAttendance} disabled={loading}>
        {loading ? "Marking..." : "Mark Present"}
      </button>
    </>
  );
}

export default Attendance;
