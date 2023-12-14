const Footer = () => {
    return (

<footer className="block bg-gray-100 dark:bg-gray-600 ">
  <div className="mx-auto w-full max-w-7xl px-5 py-10 md:px-10 md:py-5 lg:py-5  ">
    <div className="flex flex-col items-center">
    <div className="flex items-center dark:text-white">
                <h2 className="md:text-2xl text-xl font-extrabold lg:text-4xl font-playfair">
                Vatican
                </h2>
                <img className="w-16 md:w-20  lg:w-28  inline-block" src="https://i.ibb.co/h7JxbS9/logo.png" alt="" />
                <h2 className="md:text-2xl text-xl font-extrabold lg:text-4xl font-playfair">
                Library
                </h2>
                </div>
      <div className="max-[991px]: text-center font-semibold max-[991px]:py-1">
        <a href="#" className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701] dark:text-white hover:dark:text-[#d6a701]">About</a>
        <a href="#" className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701] dark:text-white hover:dark:text-[#d6a701]">Features</a>
        <a href="#" className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701] dark:text-white hover:dark:text-[#d6a701]">Works</a>
        <a href="#" className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701] dark:text-white hover:dark:text-[#d6a701]">Support</a>
        <a href="#" className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701] dark:text-white hover:dark:text-[#d6a701]">Help</a>
      </div>
      <div className="mb-8 mt-8 w-48 dark:border-white [border-bottom:1px_solid_rgb(0,_0,_0)]"></div>
      <div className="mb-12 grid w-full max-w-[208px] grid-flow-col grid-cols-4 gap-3">
        <a href="#" className="mx-auto flex max-w-[24px] flex-col items-center justify-center">
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f65ff1579cbd64244573_FacebookLogo.svg" alt="" className="inline-block" />
        </a>
        <a href="#" className="mx-auto flex max-w-[24px] flex-col items-center justify-center">
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f65864ee6f4870bbe5cb_InstagramLogo.svg" alt="" className="inline-block" />
        </a>
        <a href="#" className="mx-auto flex max-w-[24px] flex-col items-center justify-center">
          <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f65ab9fdec6c06b596f6_SlackLogo.svg" alt="" className="inline-block" />
        </a>
        <a href="#" className="mx-auto flex max-w-[24px] flex-col items-center justify-center">
          <img  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f65b64ee6f2f15bbe5e0_TwitterLogo.svg" alt="" className="inline-block " />
        </a>
      </div>
      <p className="max-[479px]:text-sm dark:text-white">© Copyright 2024. All rights reserved.</p>
    </div>
  </div>
</footer>
    );
};

export default Footer;