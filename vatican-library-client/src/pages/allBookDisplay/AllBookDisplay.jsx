import { Link } from "react-router-dom";
import Star from "../../components/star/Star";

const AllBookDisplay = ({booksDisplay}) => {
    const {name, image, author, category_name, rating, _id, quantity} = booksDisplay || {}
    return (
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
            <Link to={`/updatebook/${_id}`}>
            <button
                className="flex mx-auto select-none items-center gap-2 rounded-lg py-3  text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 dark:hover:bg-blue-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none dark:text-blue-300 "
                type="button"
              >
                Update Book
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
            </Link>
          </div>
        </div>
    );
};

export default AllBookDisplay;