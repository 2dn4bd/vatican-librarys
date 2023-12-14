import { useContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [regiError, setRegiError] = useState('')
    const navigate = useNavigate()
    const handleRegister = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        console.log(form);
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        setRegiError('')
        if(password.length < 6){
          setRegiError(`password must be 6 characters or more`)
          return;
        }else if(!/([A-Z]+[a-z@$%#&])/g.test(password)){
          setRegiError('Password must be one upper,lower case and special characters')
          return;
        } else{
          toast.success("Registration Success",{
            position: toast.POSITION.TOP_CENTER
        })
        }
        createUser(email, password)
        .then(res =>{
            console.log(res.user);
            e.target.reset()
            navigate("/")
            updateProfile(res.user, {
                displayName:name,
                photoURL:photo
            })
            .then(res =>{
                console.log(res.user);
            })
            .catch(error =>{
                console.log(error.massage);
            })
        })
        .catch(error =>{
            console.error(error.massage);
        })
    }
    return (
<section className="flex flex-col items-center pt-6">
  <ToastContainer></ToastContainer>
  <div
    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">Create an
        account
      </h1>
      <form onSubmit={handleRegister} className="space-y-4 md:space-y-6" method="POST">
        <div>
          <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required=""/>
        </div>
        <div>
          <label for="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-mail" required=""/>
        </div>

        <div>
          <label for="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo</label>
          <input type="text" name="photo" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Photo URL" required=""/>
        </div>

        <div>
          <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
        </div>
        <button type="submit" className="w-full text-white bg-[#FA7C54] border border-[#FA7C54] rounded hover:bg-transparent hover:text-[#FA7C54] transition uppercase font-roboto font-medium  focus:ring-4 focus:outline-none focus:ring-blue-300  text-sm px-5 py-2.5 text-center  ">Create an account</button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account? <a
            className="font-medium text-gray-300  hover:text-[#FA7C54] underline " href="/login">Login in here</a>
        </p>
      </form>
      {
        regiError && <span className="text-red-600 font-bold text-center mt-10">{regiError}</span>
      }
    </div>
  </div>
</section>
    );
};

export default Register;