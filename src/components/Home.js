import React from 'react';
import './home.css'
import image from '../img/shap3-slider-h4.png'
import image1 from '../img/shap1-slider-h4.png'
import image2 from '../img/shap2-slider-h4.png'

const Home = () => (
  <>
    <section className="banner w-full  h-[100vh]  ">

      <div className="lg:w-1/2 xl:w-1/2  h-full flex items-center">
        <div className="   w-full h-[70vh] ">
          <div className=" relative w-full h-full p-6 ">
            <div className="flex justify-end lg:absolute lg:top-[30px] lg:right-[-40px] xl:absolute xl:top-[30px] xl:right-[-40px]  ">
              <img src={image} alt="banner" className="z-10" />
            </div>
            <div className=" absolute top-[140px]  ">
              <img src={image1} alt="banner" />
            </div>
            <div className="absolute bottom-[130px] right-[60px] ">
              <img src={image2} alt="banner" />
            </div>
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
