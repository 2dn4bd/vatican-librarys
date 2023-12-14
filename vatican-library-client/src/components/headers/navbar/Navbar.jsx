import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../pages/provider/AuthProvider";
import { BsSun } from 'react-icons/bs';
const Navbar = () => {
    const {user, logOutUser} = useContext(AuthContext)
    const [theme, setTheme] = useState(null)
    useEffect(()=>{
        if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
    }, [])
    useEffect(() =>{
        if(theme === 'dark'){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
    }, [theme])
    const handleMode = () =>{
        setTheme(theme === "dark" ? "light" : "dark")
    }
    const handleLogOutUser = () =>{
        logOutUser()
        .then(res =>{
            console.log(res.user);
        })
        .catch(error =>{
            console.log(error.massage);
        })
    }
    const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/addbook">Add Book</NavLink></li>
    <li><NavLink to="/allbooks">All Book</NavLink></li>
    <li><NavLink to="/borrow">Borrowed
Books</NavLink></li>
</>
    return (
         <div className=" lg:pl-10 lg:pr-10 shadow-md dark:text-white ">
        <div className="navbar py-4">
            <div className="navbar-start">
                <div className="dropdown ">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 font-bold text-xl shadow rounded-box w-52 bg-gray-200 dark:bg-gray-700 dark:text-white">
                        {navLinks}
                </ul>
                </div>
                <div className="flex items-center">
                <h2 className="md:text-2xl text-xl font-extrabold lg:text-4xl font-playfair">
                Vatican
                </h2>
                <img className="w-16 md:w-20  lg:w-28  inline-block" src="https://i.ibb.co/h7JxbS9/logo.png" alt="" />
                <h2 className="md:text-2xl text-xl font-extrabold lg:text-4xl font-playfair">
                Library
                </h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal font-bold text-lg px-1 ">
                        {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dark:text-white">
                    <button onClick={handleMode}>
                    <BsSun className="text-xl mr-5"></BsSun>
                    </button>
                </div>
                <div className="dropdown dropdown-end ">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar w-14  ">
        <div className="rounded-full ">
          <div >
            {
                user ? <>
                <img className="hover:dark:bg-gray-400  " src={user.photoURL} alt="" />
                </>
                :  <div className="w-10 rounded-full">
                <img src="https://i.ibb.co/GdHDs3r/40.jpg" />
              </div>
            }
        </div>
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 rounded-box w-52 dark:bg-gray-600">
        <li className="">       
           <div className="flex items-center justify-center ">
          {
              user ? <>
                  <span className="font-bold md:text-xl text-center dark:text-white">{user.displayName}</span>
              </>
              : ''
          }
  </div>
 </li>
        <li>  
          <div className="flex justify-center">
          {
              user ? <button onClick={handleLogOutUser} className=" bg-[#FA7C54] shadow-md shadow-orange-500-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] text-white py-3 px-4 rounded-md font-bold">
              Log Out
          </button> :<Link to={"/login"} className=" bg-[#FA7C54] shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] text-white  py-3 px-4 rounded-md font-bold">
                  Login
              </Link>
          }
          </div>
         </li>
      </ul>
    </div>
          </div>
            </div>
                </div>
    );
};

export default Navbar;