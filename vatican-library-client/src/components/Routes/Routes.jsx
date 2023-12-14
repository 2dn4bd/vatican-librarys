import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import ErrorPage from "../../pages/errorPage/ErrorPage";
import AddBook from "../../pages/addBook/AddBook";
import AllBook from "../../pages/allBook/AllBook";
import PrivateRoute from "./PrivateRoute";
import BookCollection from "../../pages/bookCollection/BookCollection";
import BookDetails from "../../pages/bookDetails/BookDetails";
import UpdateBook from "../../pages/updateBook/UpdateBook";
import Read from "../../pages/read/Read";
import Borrow from "../../pages/borrow/Borrow";



const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/addbook',
                element:<PrivateRoute><AddBook></AddBook></PrivateRoute>
            },
            {
                path:'/allbooks',
                element:<PrivateRoute><AllBook></AllBook></PrivateRoute>
                
            },
            {
                path:'/books/:name',
                element:<BookCollection></BookCollection>,
                loader: ({params}) => fetch(`http://localhost:5000/books/${params.name}`)
            },
            {
                path:'/bookdetail/:id',
                element:<PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/bookdetail/${params.id}`)
            },
            {
                path:'/updatebook/:id',
                element:<PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/bookdetail/${params.id}`)
            },
            {
                path:'/read/:id',
                element:<PrivateRoute><Read></Read></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/bookdetail/${params.id}`)
            },
            {
                path:'/borrow',
                element:<PrivateRoute><Borrow></Borrow></PrivateRoute>
                
            }
        ]
    }
])
export default Routes;