import { useLoaderData } from "react-router-dom";

const Read = () => {
    const bookReadContent = useLoaderData()
    console.log(bookReadContent);
    const {name, read, image} = bookReadContent || {}
    return (
        <div>
            <div className="text-center my-5">
                <h2 className="text-4xl font-bold dark:text-gray-300">
                Some content of {name}
                </h2>
            </div>
            <div className="text-center dark:text-white border dark:border-white border-black font-semibold text-lg w-[50%] item mx-auto dark:bg-gray-600 p-5 shadow-lg ">
                <div className="flex justify-center mb-5">
                    <img src={image} alt="" />
                </div>
                <p>
                    {read}
                </p>
            </div>
        </div>
    );
};

export default Read;