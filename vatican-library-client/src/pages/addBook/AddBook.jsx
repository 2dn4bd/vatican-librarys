import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
const AddBook = () => {
    const location = useLocation();
	const navigate = useNavigate();
    const handleAddBook = e =>{
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const author = form.author.value;
        const category_name = form.category.value;
        const rating = form.rating.value;
        const short_description = form.description.value;
        const addNewBookInfo = {image, name, quantity, author, category_name, rating, short_description}
        fetch('http://localhost:5000/books',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(addNewBookInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                toast.success("Successfully Book Added!", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
            navigate(location?.state ? location.state : "/")
        })
    }
    return (
        <div className="max-w-2xl mx-auto bg-white p-16 dark:bg-gray-600">
            <ToastContainer></ToastContainer>
            <form onSubmit={handleAddBook} className="">
                <div className="text-center mb-5">
                    <h2 className="text-4xl font-bold dark:text-gray-300">
                    Add books you need
                    </h2>
                </div>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
                <div>
                    <label for="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
                    <input type="text" id="image" name="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Image link" required/>
                </div>
                <div>
                    <label for="name"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                    <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book name" required/>
                </div>
                <div>
                    <label for="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quantity</label>
                    <input type="text" id="quantity" name="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Quantity of book" required/>
                </div>  
                <div>
                    <label for="Author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Author Name</label>
                    <input type="text" id="author" name="author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Author"  required/>
                </div>
                <div>
                    <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Category</label>
                    <input type="text" id="category" name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book category" required/>
                </div>
                <div>
                    <label for="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rating</label>
                    <input type="text" id="rating" name="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rating" required/>
                </div>
            </div>
            <div className="mb-6">
                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Short description</label>
                <input type="text" id="description" name="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short description" required/>
            </div> 
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Book</button>
        </form>
        
        </div>
    );
};

export default AddBook;