import { Outlet } from "react-router-dom";
import Navbar from "../headers/navbar/Navbar";
import Footer from "../footer/Footer";

const Root = () => {
    return (
        <div className="dark:bg-gray-700 bg-white">
            <div className="">
            <Navbar></Navbar>
            </div>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            <div >
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;

