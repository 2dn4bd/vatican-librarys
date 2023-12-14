import moment from 'moment';
import { Link, useLoaderData } from "react-router-dom";
import Star from "../../components/star/Star";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Borrowed from '../borrowed/Borrowed';
const BookDetails = () => {
    const detailsOfBook = useLoaderData()
    console.log(detailsOfBook);
<Borrowed
details={detailsOfBook}
></Borrowed>
    const [showModal, setShowModal] = useState(false)
    const {image, name, author, short_description,quantity, rating, _id, category_name} = detailsOfBook || {}
    
    const [reduce, setReduce] = useState(quantity)

    const {user} = useContext(AuthContext)
        const user_email =  user.email;
        const user_name = user.displayName;
        const currentDate = moment()
        const borrowed_date = currentDate.format('L');
    const BookBorrowModal = () =>{
        const handleBorrowBook = e =>{
            
            e.preventDefault()
            const form = e.target
            const return_date = form.return.value;
            console.log(return_date);
            const borrowBook = {image, name, category_name, return_date, user_email, borrowed_date, quantity}
            fetch('http://localhost:5000/borrowedbooks',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(borrowBook)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.insertedId){
                    toast.success("Successfully Borrowed Book!", {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            })
            
            setReduce(reduce - 1)
            const totalReduce = {reduce}
            console.log(totalReduce);
            fetch(`http://localhost:5000/reduce/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(totalReduce)
            })
            .then(res => res.json())
            .then( data => {
                console.log(data);
            })
        }


        return<>
        <div 
    className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex">
    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <ToastContainer></ToastContainer>
        <div className="relative bg-white rounded-lg shadow ">
            <button onClick={() => setShowModal(false)} type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"><svg
                    aria-hidden="true" className="w-5 h-5" fill="#c6c7c7" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        cliprule="evenodd"></path>
                </svg>
                <span className="sr-only">Close popup</span>
            </button>

            <div className="p-5">
                <h3 className="text-2xl mb-0.5 font-medium"></h3>
                <p className="mb-4 text-sm font-normal text-gray-800"></p>

                <div className="text-center">
                    <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                        Borrow Your favourite Book
                    </p>
                    <p className="mt-2 text-sm leading-4 text-slate-600">
                        You must be input return date for borrow a book 
                    </p>
                </div>
                <div className="mt-7 flex flex-col gap-2">
                </div>
                <form  onSubmit={handleBorrowBook} className="w-full my-10">
                <label  className="ml-1">User Name</label>
                <input type="text" name="user_name" id=""  defaultValue={user_name} disabled className="block w-full rounded-lg border  border-gray-300 px-3 py-2 shadow-sm outline-none  focus:ring-2 focus:ring-black focus:ring-offset-1 mt-2"/>

                <label  className="ml-1">User E-mail</label>
                <input type="email" name="user_email" id="" defaultValue={user_email} disabled className="block w-full rounded-lg border  border-gray-300 px-3 py-2 shadow-sm outline-none  focus:ring-2 focus:ring-black focus:ring-offset-1 mt-2"/>

                    <label  className="ml-1">Retrun Date</label>
                <input type="date" name="return" id="" required  className="block w-full rounded-lg border  border-gray-300 px-3 py-2 shadow-sm outline-none  focus:ring-2 focus:ring-black focus:ring-offset-1 mt-2"/>
                <div>
                    <button   className="flex items-center justify-center w-full p-4 bg-[#FA7C54] shadow-md shadow-orange-500-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] text-white py-3 px-4 rounded-md font-bold">
                        Submit
                    </button>
                </div>
                </form>

            </div>
        </div>
    </div>
</div>
        </>
    }
    return (
<section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800 ">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 md:w-1/2 ">
                    <div className="sticky top-0 z-50 overflow-hidden ">
                        <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                            <img src={image} alt=""
                                className="object-cover w-full lg:h-[75vh]"/>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 md:w-1/2 flex items-center">
                    <div className="lg:pl-20">
                        <div className="mb-8 ">
                            <h2 className="max-w-xl mt-2 my-2 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                                {name}</h2>
                                <p className="max-w-md text-gray-700 dark:text-gray-400">
                                {category_name}
                            </p>
                                <span className="text-lg font-medium text-rose-500 dark:text-rose-200">{author}</span>
                                <div>
                                    <Star rating={rating}/>
                                </div>
                            <p className="max-w-md text-gray-700 dark:text-gray-400">
                                {short_description}
                            </p>
                            <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                            </p>
                            <p className="text-green-600 dark:text-green-300 ">Quantity: {quantity}</p>
                        </div>
                        
                        <div className="flex flex-wrap items-center -mx-4 ">
                            <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                {quantity === 0 ?                      <button type="button" disabled 
                                onClick={() => setShowModal(true)}
                                    className="flex items-center justify-center w-full p-4 bg-slate-600  text-white py-3 px-4 rounded-md font-bold">
                                    Borrow
                                </button> :    <button type="button"
                                onClick={() => setShowModal(true)}
                                    className="flex items-center justify-center w-full p-4 bg-[#FA7C54] shadow-md shadow-orange-500-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] text-white py-3 px-4 rounded-md font-bold">
                                    Borrow
                                </button>}
                                { showModal && <BookBorrowModal/>}
                            </div>
                                
                            <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                            <Link to={`/read/${_id}`}>
                            <button
                                    className="flex items-center justify-center w-full p-4 bg-[#FA7C54] shadow-md shadow-orange-500-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] text-white py-3 px-4 rounded-md font-bold">
                                    Read
                                </button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default BookDetails;