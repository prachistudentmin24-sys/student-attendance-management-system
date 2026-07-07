import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <h1>Welcome to Student Dashboard</h1>

      <Link to="/attendance">Mark Attendance</Link>

      <br />
      <br />

      <Link to="/reports">View Reports</Link>

      <br />
      <br />

      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Dashboard;