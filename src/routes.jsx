import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/Login";
import CadEvento from "./pages/CadEvento";

export default function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/signUp" element={<SignUp/>}></Route>
                <Route path="/cadEvento" element={<CadEvento/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

