import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Borrowed = () => {
    // console.log(mainId);
    // const {quantity, _id} = mainId || {}
    // console.log(quantity);
    // console.log(_id);
    const {user} = useContext(AuthContext)
    const [borrowedBook, setborrowedBook] = useState([]);
    const [increase, setIncrease] = useState()
    useEffect(() =>{
        fetch(`http://localhost:5000/getborrowedbooks/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setborrowedBook(data)
        })
    }, [setborrowedBook,user.email])
    
    const handleRetrun = (id) =>{
      setIncrease(increase + 1)
      const totalIncrease = {increase}
      console.log(totalIncrease);
      fetch(`http://localhost:5000/increasequantity/${id}`,{
          method:'PUT',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(totalIncrease)
      })
      .then(res => res.json())
      .then(data =>{
          console.log(data);
      })

        fetch(`http://localhost:5000/returnbook/${id}`,{
          method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          if(data.deletedCount > 0){
            toast.success("Successfully Return Book!", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        const remaining = borrowedBook.filter( borrowed => borrowed._id !== id)
        console.log(remaining);
        setborrowedBook(remaining)
    })
   
    }

    return (
        <div>
            <ToastContainer></ToastContainer>
            <h2 className="dark:text-white text-center text-2xl md:text-4xl lg:text-5xl font-playfair font-semibold my-5">
            Books you have borrowed
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 pl-10 pr-10 ">
        {
            borrowedBook.map(borrowedBook =>{

                return(
                    <div key={borrowedBook._id} className="relative flex w-full max-w-[48rem] flex-row  dark:text-white dark:bg-gray-600 items-center rounded-xl bg-white bg-clip-border text-gray-700 shadow-md duration-300 ease-in-out transition-transform transform hover:-translate-y-2 font-playfair">
                  
                  <div className="relative m-0 w-2/5 shrink-0 h-full overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 ">
                    <img
                      src={borrowedBook.image}
                      alt="image"
                      className="h-full w-full  object-cover"
                    />
                  </div>
                  <div className="p-6 ">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      {borrowedBook.name}
                    </h4>
                    <p className=" block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased dark:text-white">
                      {borrowedBook.category_name}
                    </p>
          
                    <p className=" block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased dark:text-white">
                      Borrowed Date: {borrowedBook.borrowed_date}
                    </p>
          
                    <p className=" block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased dark:text-white">
                    Return Date: {borrowedBook.return_date}
                    </p>
          
                    <button  onClick={()=>handleRetrun(borrowedBook._id)}
                        className="flex select-none items-center gap-2 rounded-lg py-3  text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 dark:hover:bg-blue-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none dark:text-blue-300"
                        type="button"
                      >
                        Return Book
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-4 w-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                          ></path>
                        </svg>
                      </button>
                  </div>
                  
                </div>
                )
            } )
        }
        </div>
        </div>

    );
};

export default Borrowed;