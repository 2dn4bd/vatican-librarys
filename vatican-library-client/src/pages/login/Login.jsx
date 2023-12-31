import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {loginUser, loginWIthGoogle} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState('')
    const [loginSuccess, setLoginSuccess] = useState('')
    const handleLoginUser = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        loginUser(email, password)
        setLoginError('')
        .then(res =>{
            console.log(res.user);
            navigate(location?.state ? location.state : "/")
            e.target.reset();
            setLoginSuccess('Login Success')
            toast.success("Login successfull", {
              position: toast.POSITION.TOP_CENTER
            })
        })
        .catch(error =>{
            console.error(error.massage);
            setLoginError('user does not exist or invalid information ')
        })
    }
    const loginWithGoogle = () =>{
        loginWIthGoogle()
        .then(res =>{
          console.log(res.user);
          navigate(location?.state ? location.state : "/")
        })
        .catch(error =>{
          console.error(error.user);
        })
    }
    return (
<div className="contain py-16">
  <ToastContainer></ToastContainer>
  <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
    <h2 className="text-2xl uppercase font-medium mb-1 dark:text-white">Login</h2>
    <p className="text-gray-600 mb-6 text-sm dark:text-white">Welcome! So good to have you back!</p>
    <div className="my-5">
            <button onClick={loginWithGoogle} className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-[#FA7C54] bg-[#FA7C54] rounded-lg text-white hover:border-[#FA7C54]  hover:shadow hover:bg-transparent hover:text-[#FA7C54] transition duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg> <span>Login with Google</span>
            </button>
        </div>
    <form onSubmit={handleLoginUser} autocomplete="off">
      <p className="text-red-500"></p>
      <div className="space-y-2">
        <div><label for="email" className="text-gray-600 mb-2 block dark:text-white">Email address</label><input type="email" name="email" id="email" className="block w-full border border-gray-300 px-4 py-3 text-gray-600  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400" placeholder="E-mail"/>
        </div>
      </div>
      <div className="space-y-2">
        <div><label for="password" className="text-gray-600 mb-2 dark:text-white block">Password</label><div className="relative"><input type={showPassword ? "text" : "password"} name="password" id="password" className="block w-full border  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400" placeholder="***********"/>


            <div onClick={()=> setShowPassword(!showPassword)}
              className="cursor-pointer absolute inset-y-0 right-0 flex dark:text-white items-center px-8 text-gray-600 border-l border-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" className="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z">
                </path>
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>


          </div>
        </div>
      </div>
      <div className="mt-4">
        <button type="submit" className="block w-full py-2 text-center text-white bg-[#FA7C54] border border-[#FA7C54] rounded hover:bg-transparent hover:text-[#FA7C54] transition uppercase font-roboto font-medium">Login</button>
        <div className="flex gap-2 pt-5">
          <p className="text-gray-600 text-sm dark:text-white">Don't have an account?</p><Link to={'/register'} className="text-gray-600  hover:text-[#FA7C54] text-sm underline dark:text-white"
            >Register here</Link>
        </div>
      </div>
      <div className="text-center mt-5">
        {
			loginError && <span className='text-red-600 font-bold text-center mt-10'>
				{loginError}
			</span>
		}
		{
			loginSuccess && <span className='text-blue-600 font-bold text-center mt-10'>
			{loginSuccess}
			</span>
		}
</div>
    </form>



  </div>
</div>
    );
};

export default Login;