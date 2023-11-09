import { Navigate, Route, Routes } from "react-router-dom";
import { Loginpage } from '../pages/login';
import { Menupage  } from '../pages/menu';




export const AppRouter = () => {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Loginpage/>}/>
      <Route path="/menu" element={<Menupage />} />
      <Route path="/" element={ <Navigate to="/menu" />} />
    </Routes>
    </>
  )
}
