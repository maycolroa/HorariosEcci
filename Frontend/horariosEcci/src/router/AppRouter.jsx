import { Navigate, Route, Routes } from "react-router-dom";
import { Loginpage } from '../pages/login';
import { Teacherpage  } from '../pages/teacher';
import { Managerpage } from "../pages/manager";




export const AppRouter = () => {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Loginpage />} />
      <Route path="/teacher" element={<Teacherpage />} />
      <Route path="/manager" element={<Managerpage />} />
      <Route path="/" element={ <Navigate to="/login" />} />
    </Routes>
    </>
  )
}
