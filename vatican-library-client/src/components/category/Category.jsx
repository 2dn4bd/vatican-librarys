import { useEffect, useState } from "react";
import DisplayCategory from "../displayCategory/DisplayCategory";
import NextBooks from "../nextBooks/NextBooks";
import MiddleBanner from "../middleBanner/MiddleBanner";
const Category = () => {
    const [categoryData, setCategoryData] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/bookcategory')
        .then(res => res.json())
        .then(data => setCategoryData(data))
    }, [])
    return (
        <div>
            <h2 className="dark:text-white text-center text-2xl md:text-4xl lg:text-5xl font-playfair font-semibold my-5">
            Choose Your Favourite Category!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 font-playfair">
            {
                categoryData.map(categoryInfo => <DisplayCategory key={categoryInfo._id} itemCategory={categoryInfo}></DisplayCategory>)
            }
            </div>
            <div className="h-full mt-5">
                <MiddleBanner></MiddleBanner>
            </div>
            <div>
            <h2 className="dark:text-white text-center text-2xl md:text-4xl lg:text-5xl font-playfair font-semibold my-5">
            Discover Your Next Book
            </h2>
            <NextBooks></NextBooks>
            </div>

        </div>
    );
};

export default Category;