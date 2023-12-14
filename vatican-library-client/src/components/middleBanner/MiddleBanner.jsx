const MiddleBanner = () => {
    return (
<div className="w-full  bg-cover bg-center" style = {{
               backgroundImage:
               'url("https://cdn.pixabay.com/photo/2017/09/11/15/34/animals-2739386_1280.jpg")',
               height:'32rem'
            }} >
    
        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50" >
            <div className="text-center">
                <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">"The only thing that you absolutely have to know, is the location of the library." <br />
                <h2>
                -Albert Einstein 
                </h2>
                </h1>
                <p className='text-white'>
                (1879-1955. Theoretical physicist)
                </p>
            </div>
        </div>
    </div>
    );
};

export default MiddleBanner;