import React from 'react';
import './home.css'
import image from '../img/shap3-slider-h4.png'
import image1 from '../img/shap1-slider-h4.png'
import image2 from '../img/shap2-slider-h4.png'
// import { positions } from '@mui/system';

const Home = () => (
  <>
    <section className="banner w-full  h-[100vh]  ">

      <div className="  lg:w-1/2 xl:w-1/2 md:w-1/2 h-full flex flex-col pt-20 ">
        <div className="   w-full h-1/2 ">
          <div className=" relative w-full h-full  ">
            <div className="offerImagediv flex justify-end lg:absolute lg:top-[30px] lg:right-[-40px] xl:absolute xl:top-[30px] xl:right-[-40px]  ">
              <img src={image} alt="banner" className="z-10" style={{ height: "100px" }} />
            </div>
            <div className=" absolute top-[140px]">
              <div className='relative' >
                <div>
                  <img src={image1} alt="banner" style={{ position:"relative" }} />
                  <span className="banner1Text  text-white texl-xl font-bold" >Boom Boom Boom</span>
                </div>
                <div>
                  <img src={image2} alt="banner" style={{ position: "absolute", right: " 0px", bottom: "-40px" }} />
                  {/* <p className='w-full h-full'>SomeText</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' descriptionDiv w-full h-1/2 flex flex-col p-2'>
          <span className='flex justify-center font-bold text-xl pb-4 '>Extra-virgin olive oil, garlic, mozzarella cheese, onions, mushrooms, green olives, black olives, fresh tomatoes.</span>
          <div className='flex justify-center'>
            <button className='p-2 rounded bg-yellow-400 '>
              <span className='text-xl text-white font-bold'>Order Now</span>
            </button>
          </div>
        </div>

      </div>
    </section>
    <section className="bg-rose-50 w-full h-[100vh]">
      welcome text plus images
    </section>
    <section className="bg-white w-full h-[100vh]">
      small menu plus images
    </section>
    <section className="bg-rose-50 w-full h-[100vh]">
      servies
    </section>
    <section className="bg-white w-full h-[100vh]">
      dish MEnu with cards
    </section>
    <section className="bg-rose-50 w-full h-[100vh]">
      Reviews
    </section>
    <section className="bg-white w-full h-[100vh]">
      staffs
    </section>
    <section className="bg-rose-50 w-full h-[100vh]">
      Map plus enquiry form
    </section>
    <section className="bg-white w-full h-[100vh]">
      small menu plus images
    </section>
    <section className="bg-rose-50 w-full h-[100vh]">
      address
    </section>
  </>
);

export default Home;
