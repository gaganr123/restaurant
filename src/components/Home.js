import React from 'react';
import './home.css'
import image from '../img/shap3-slider-h4.png'
import image1 from '../img/shap1-slider-h4.png'
import image2 from '../img/shap2-slider-h4.png'

const Home = () => (
  <>
    <section class="banner w-full  h-[100vh]  ">

      <div class="lg:w-1/2 xl:w-1/2  h-full flex items-center">
        <div class="   w-full h-[70vh] ">
          <div class=" relative w-full h-full p-6 ">
            <div class="flex justify-end lg:absolute lg:top-[30px] lg:right-[-40px] xl:absolute xl:top-[30px] xl:right-[-40px]  ">
              <img src={image} alt="banner" class="z-50" />
            </div>
            <div class=" absolute top-[140px]  ">
              <img src={image1} alt="banner" />
            </div>
            <div class="absolute bottom-[130px] right-[60px] ">
              <img src={image2} alt="banner" />
            </div>
          </div>
        </div>
      </div>


    </section>
    <section class="bg-rose-50 w-full h-[100vh]">
      welcome text plus images
    </section>
    <section>
      small menu plus images
    </section>
    <section>
      servies
    </section>
    <section>
      dish MEnu with cards
    </section>
    <section>
      Reviews
    </section>
    <section>
      staffs
    </section>
    <section>
      Map plus enquiry form
    </section>
    <section>
      small menu plus images
    </section>
    <section>
      address
    </section>
  </>
);

export default Home;
