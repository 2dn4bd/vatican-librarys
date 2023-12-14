import {  useLoaderData, useLocation, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const UpdateBook = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const updateBookInfo = useLoaderData()
    console.log(updateBookInfo);
    const {author, name, rating, image, category, _id} = updateBookInfo
    const handleUpdateBook = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const author = form.author.value;
        const image = form.image.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const updatedBook = {name, author, image, rating, category}
        console.log(updatedBook);
        fetch(`http://localhost:5000/updatedbook/${_id}`, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedBook)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                toast.success("Book Updated Successfully!", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
            navigate(location?.state ? location.state : "/")
        })
    }
    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-800">
            <ToastContainer></ToastContainer>
        <div className="max-w-4xl px-4 mx-auto ">
            <div className="p-6 bg-white rounded-md shadow dark:border-gray-800 dark:bg-gray-900">
                <h2 className="my-6  leading-6 text-gray-900 dark:text-gray-300 text-center text-4xl font-bold">Update Book
                </h2>
                <form onSubmit={handleUpdateBook} method="post" className="">
                    <div className="container px-4 mx-auto"></div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium dark:text-gray-400" for="">
                            Book Name
                        </label>
                        <input
                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                            type="text" name="name" defaultValue={name} />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium dark:text-gray-400" for="">Category</label>
                        <div className="relative">
                            <select defaultValue={category}
                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded appearance-none dark:text-gray-400 dark:border-gray-900 dark:bg-gray-800"
                                name="category">
                                <option>Novel</option>
                                <option>Thriller</option>
                                <option>Romance</option>
                                <option>Kids</option>
                            </select>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pointer-events-none">
                                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="grid w-full gap-4 mb-6 lg:grid-cols-2">
                        <div> <label className="block mb-2 text-sm font-medium dark:text-gray-400" for="">Image
                            </label>
                            <input
                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:border-gray-900 dark:bg-gray-800"
                                type="text" name="image" defaultValue={image}/>
                        </div>
                        <div> <label className="block mb-2 text-sm font-medium dark:text-gray-400" for="">Author
                            </label>
                            <input
                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:border-gray-900 dark:bg-gray-800"
                                type="text" name="author" defaultValue={author} />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium dark:text-gray-400" for="">
                            Rating</label>
                        <input
                            className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:border-gray-900 dark:bg-gray-800"
                            type="text" name="rating" defaultValue={rating} />
                    </div>
                    <div className="mt-7">
                        <div className="flex justify-start space-x-2">
                            <button type="submit"
                                className="inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-600">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};

export default UpdateBook;