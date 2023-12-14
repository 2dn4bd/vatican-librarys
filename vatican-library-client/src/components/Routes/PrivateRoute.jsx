import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../pages/provider/AuthProvider";
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <>
        <span className="loading loading-ring loading-lg dark:text-white absolute left-[50%] top-[50%]"></span>
        </>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;