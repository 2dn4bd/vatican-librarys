import { useEffect, useState } from "react";
import AllBookDisplay from "../allBookDisplay/AllBookDisplay";

const AllBook = () => {
    const [allbooks, setBooks] = useState(null)
    const [asc, setAsc] = useState(true)
    console.log(allbooks);
    useEffect(() =>{
        fetch(`http://localhost:5000/allbooks?sort=${asc ? 'ase': 'desc'}`)
        .then(res => res.json())
        .then(data =>{
            setBooks(data)
        })
    },[asc])

    if(!allbooks){
        return<>
        <span className="loading loading-ring loading-lg dark:text-white absolute left-[50%] top-[50%]"></span>
        </>
    }
    return (
        <div className="dark:text-white text-center text-2xl md:text-4xl lg:text-6xl font-playfair font-semibold my-5 ">
            All Books Here For You
            <div className="text-right pl-10 pr-10 mt-0 ">

                    <button onClick={() => setAsc(!asc)} className="btn bg-gray-600 text-white dark:bg-white dark:text-black hover:bg-gray-600">
                        Filter
                    </button>

                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 pl-10 pr-10 ">
            {
                allbooks.map(books => <AllBookDisplay key={books._id} booksDisplay={books}></AllBookDisplay>)
            }
            </div>
        </div>
    );
};

export default AllBook;