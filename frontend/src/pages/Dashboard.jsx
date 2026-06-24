import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Dashboard Loaded Successfully 🎉</h1>

      <Link to="/attendance">
        Mark Attendance
      </Link>

      <br/>

      <Link to="/reports">
        View Reports
      </Link>
    </>
  );
}

export default Dashboard;