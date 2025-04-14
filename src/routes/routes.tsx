import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { TestPage } from "../pages/test";

export const AppRoutes = ()=>{
    
    return (
        <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path = "/test" element = {<TestPage/>} />
    </Routes>
    )
}