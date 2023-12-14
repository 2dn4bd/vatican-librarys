import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Banner.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <>
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/6y5NrR2/banner2.png" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white lg:space-y-7 md:space-y-7pl-12 w-1/2'>
                        <h2 className='lg:text-6xl md:text-3xl  font-bold'>“The sea is nothing but a library of all the tears in history.”</h2>
                        <p>― Lemony Snicket</p>
                        <div>
                            <Link to={'/allbooks'}>
                            <button className="btn btn-outline btn-secondary">Books</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide> <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/HHkNb77/banner3.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white lg:space-y-7 md:space-y-7 pl-12 w-1/2'>
                        <h2 className='lg:text-6xl md:text-3xl  font-bold'>“The sea is nothing but a library of all the tears in history.”</h2>
                        <p>― Lemony Snicket</p>
                        <div>
                            <Link to={'/allbooks'}>
                            <button className="btn btn-outline btn-secondary">Books</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide><div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/FDngtBK/banner4.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white lg:space-y-7 md:space-y-7 pl-12 w-1/2'>
                        <h2 className=' lg:text-6xl md:text-3xl  font-bold'>“The sea is nothing but a library of all the tears in history.”</h2>
                        <p>― Lemony Snicket</p>
                        <div>
                            <Link to={'/allbooks'}>
                            <button className="btn btn-outline btn-secondary">Books</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide>  <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/ZJMYxXg/banner5.webp" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white lg:space-y-7 md:space-y-7 pl-12 w-1/2'>
                        <h2 className='lg:text-6xl md:text-3xl font-bold'>“The sea is nothing but a library of all the tears in history.”</h2>
                        <p>― Lemony Snicket</p>
                        <div>
                            <Link to={'/allbooks'}>
                            <button className="btn btn-outline btn-secondary">Books</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div></SwiperSlide>
      </Swiper>
    </>
    );
};

export default Banner;