import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";

export default function AppRoutes(){
    return(
        <BrowserRouter>
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
    
}