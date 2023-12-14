import { useLoaderData } from "react-router-dom";
import BookCollectionDisplay from "../bookCollectionDisplay/BookCollectionDisplay";

const BookCollection = () => {
    const bookCollections = useLoaderData()
    return (
        <div>
            <h1 className="dark:text-white text-center text-2xl md:text-4xl lg:text-6xl font-playfair font-semibold mt-14 my-5 ">
            Choose Your favourite
            </h1>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:mt-48  pl-10 pr-10 font-playfair">
            {
                bookCollections.map(collection =>  <BookCollectionDisplay  booksCollection={collection} key={collection}></BookCollectionDisplay>)
            }
        </div>
        </div>
     
    );
};

export default BookCollection;