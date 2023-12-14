import { Link } from "react-router-dom";
import Star from "../star/Star";

const NextBooksDisplay = ({displayYourBook}) => {
    console.log(displayYourBook);
    const {name, image, author, category_name, rating, _id, quantity} = displayYourBook || {}
    return (
        <Link to={`/bookdetail/${_id}`}>
                <div className="relative flex w-full max-w-[48rem] flex-row  dark:text-white dark:bg-gray-600 items-center rounded-xl bg-white bg-clip-border text-gray-700 shadow-md duration-300 ease-in-out transition-transform transform hover:-translate-y-2">
          <div className="relative m-0 w-2/5 shrink-0 h-full overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 ">
            <img
              src={image}
              alt="image"
              className="h-full w-full  object-cover"
            />
          </div>
          <div className="p-6 ">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {name}
            </h4>
            <p className=" block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased dark:text-white">
              {category_name}
            </p>

            <p className=" block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased dark:text-white">
              Written by: {author}
            </p>

            <p className=" block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased dark:text-white">
            Quantity: {quantity}
            </p>
            <div className="text-xl flex justify-center">
              <Star rating={rating}/>
            </div>
          </div>
        </div>
        </Link>

    );
};

export default NextBooksDisplay;