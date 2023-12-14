import { useEffect, useState } from "react";
import NextBooksDisplay from "../nextBooksDisplay/NextBooksDisplay";
const NextBooks = () => {
    const [displayBooks, setDisplayBooks] = useState([])
    useEffect(() =>{
      fetch('http://localhost:5000/allbooks')
      .then(res => res.json())
      .then(data => {
        setDisplayBooks(data)
      })
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 pl-10 pr-10">
        {
          displayBooks.slice(7,11).map(books => <NextBooksDisplay key={books._id} displayYourBook={books}></NextBooksDisplay>)
        }
      </div>
    );
};

export default NextBooks;