import React from 'react';
import './home.css'
import image from '../img/shap3-slider-h4.png'
import image1 from '../img/shap1-slider-h4.png'
import image2 from '../img/shap2-slider-h4.png'
import person1 from '../img/avatar-1.jpg'
import person2 from '../img/avatar-2.jpg'
import person3 from '../img/avatar-3.jpg'
import chef1 from '../img/box-team-2-1.jpg'
import chef2 from '../img/box-team-6-1.jpg'
import location from '../img/location.png'


const Home = () => (
  <>
    <div className="banner w-full  h-[100vh]  ">

      <div className="  lg:w-1/2 xl:w-1/2 md:w-1/2 h-full flex flex-col pt-20 ">
        <div className="   w-full h-1/2 ">
          <div className=" relative w-full h-full  ">
            <div className="offerImagediv flex justify-end lg:absolute lg:top-[30px] lg:right-[-40px] xl:absolute xl:top-[30px] xl:right-[-40px]  ">
              <img src={image} alt="banner" className="z-10" style={{ height: "100px" }} />
            </div>
            <div className=" absolute top-[140px]">
              <div className='relative' >
                <div>
                  <img src={image1} alt="banner" style={{ position: "relative" }} />
                  {/* <span className="banner1Text  text-white texl-xl font-bold" >Boom Boom Boom</span> */}
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
    </div>
    <div className="bg-rose-50 w-full h-[100vh]">

      <div className='flex lg:flex-row xl:flex-row flex-col w-full h-full items-center justify-center'>
        <div className='w-full grid grid-rows-3 p-4'>
          <div className='text-xl font-mono text-orange-500'> Welcome</div>
          <div className='text-2xl font-mono '>
            Best burger ideas & traditions from the whole world
          </div>
          <div className='text-lg font-bold'>
            lorem ipsum dolor sit lorem ipsum dolor sit amet, consectetur adip
          </div>
          <div className='flex justify-center'>
            <button className='p-2 rounded bg-yellow-400 hover:bg-orange-400 hover:text-black'>
              <span className='text-xl text-white font-bold'>Order Now</span>
            </button>
          </div>
        </div>
        <div className='w-full flex lg:flex-row xl:flex-row p-6'>
          <div className='w-full'>
            <img src={person1} alt="banner" className="w-full h-full rounded p-2" />
          </div>
          <div className='w-full '>
            <div>
              <img src={person2} alt="banner" className="w-full rounded p-2" />
            </div>
            <div>
              <img src={person3} alt="banner" className="w-2/3 h-full rounded p-2" />
            </div>
          </div>
        </div>
      </div>



    </div>
    <div className="bg-white w-full h-[100vh]">

      <div className='flex flex-col lg:flex-row xl:flex-row h-full '>
        <div className="burger w-full h-full  ">
          <div className='w-full h-full flex flex-col items-center justify-center bg-black/60'>
            <div className='font-bold text-xl flex justify-center items-center text-white'>
              Explore the new taste
            </div>
            <div className='text-lg flex justify-center items-center text-white'>
              Enjoy our luscious dishes wherever you want
            </div>
            <div className='flex justify-center'>
              <button className='p-2 rounded bg-yellow-400 hover:bg-orange-400 hover:text-black'>
                <span className='text-xl text-white font-bold'>Order Now</span>
              </button>
            </div>
          </div>

        </div>
        <div className='w-full h-full flex flex-col justify-center items-center p-6  lg:p-16 xl:p-20 '>

          <div className='flex flex-col w-full mb-3'>
            <div className='flex flex-row justify-between border-dashed border-b border-gray-400'>
              <span className='text-xl font-bold'> Pizza Hut</span> <span className='font-bold text-yellow-400'>$4.95</span>
            </div>
            <div className='font-mono text-xl mt-2'>
              Shrimp, Squid, Pineapple
            </div>
          </div>

          <div className='flex flex-col w-full mb-3'>
            <div className='flex flex-row justify-between border-dashed border-b border-gray-400'>
              <span className='text-xl font-bold'> Pepperoni Pizza</span> <span className='font-bold text-yellow-400'>$5.95</span>
            </div>
            <div className='font-mono text-xl mt-2'>
              Shrimp, Squid, Pineapple
            </div>
          </div>

          <div className='flex flex-col w-full mb-3'>
            <div className='flex flex-row justify-between border-dashed border-b border-gray-400'>
              <span className='text-xl font-bold'> Apricot Chicken</span> <span className='font-bold text-yellow-400'>$5.65</span>
            </div>
            <div className='font-mono text-xl mt-2'>
              Shrimp, Squid, Pineapple
            </div>
          </div>

          <div className='flex flex-col w-full mb-3'>
            <div className='flex flex-row justify-between border-dashed border-b border-gray-400'>
              <span className='text-xl font-bold'>Summer Pizza</span> <span className='font-bold text-yellow-400'>$8.95</span>
            </div>
            <div className='font-mono text-xl mt-2'>
              Shrimp, Squid, Pineapple
            </div>
          </div>
        </div>
      </div>

    </div>
    <section className="bg-rose-50 w-full h-[100vh] flex flex-col">
      <div className='w-full pt-4 h-1/3 flex flex-col justify-center items-center'>
        <span className='flex justify-center items-center font-mono text-orange-400 text-2xl'>Always Quality</span>
        <span className='flex justify-center items-center font-bold text-black text-4xl'>Our Servcies</span>
      </div>

      <div className='h-2/3 w-full'>
        <div className='grid md:grid-cols-2 gap-x-2 lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 w-full h-full p-4'>
          <div className='w-full h-full rounded bg-white hover:bg-rose-100 p-4 flex flex-col m-2'>
            <div className=' h-full w-full flex justify-center items-center'>
              <div className='bg-yellow-400 w-2/4 h-full rounded-full flex justify-center items-center '>
                <i class="fa fa-apple fa-3x" aria-hidden="true"></i>
              </div>
            </div>

            <div className='flex flex-col h-full items-center mt-4'>
              <div className='font-bold text-xl flex justify-center items-center'>QUALITY FOODS</div>
              <div className='text-lg flex justify-center items-center'>
                Everything you order will be quickly delivered to your door.
              </div>
            </div>
          </div>

          <div className='w-full h-full rounded bg-white hover:bg-rose-100 p-4 flex flex-col m-2'>
            <div className=' h-full w-full flex justify-center items-center'>
              <div className='bg-yellow-400 w-2/4 h-full rounded-full flex justify-center items-center '>
                <i class="fa fa-apple fa-3x" aria-hidden="true"></i>
              </div>
            </div>

            <div className='flex flex-col h-full items-center mt-4'>
              <div className='font-bold text-xl flex justify-center items-center'>QUALITY FOODS</div>
              <div className='text-lg flex justify-center items-center'>
                Everything you order will be quickly delivered to your door.
              </div>
            </div>
          </div>

          <div className='w-full h-full rounded bg-white hover:bg-rose-100 p-4 flex flex-col m-2'>
            <div className=' h-full w-full flex justify-center items-center'>
              <div className='bg-yellow-400 w-2/4 h-full rounded-full flex justify-center items-center '>
                <i class="fa fa-apple fa-3x" aria-hidden="true"></i>
              </div>
            </div>

            <div className='flex flex-col h-full items-center mt-4'>
              <div className='font-bold text-xl flex justify-center items-center'>QUALITY FOODS</div>
              <div className='text-lg flex justify-center items-center'>
                Everything you order will be quickly delivered to your door.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white w-full ">

      <div className='text-2xl font-bold flex justify-center items-center w-full'>
        Popular Dishes
      </div>

      <div className='w-full flex gap-x-3 justify-center p-4 overflow-auto'>
        <button className='p-2  bg-yellow-400 rounded-3xl'>
          <span className='text-xl text-white font-bold'>Order Now</span>
        </button>

        <button className='p-2  bg-yellow-400 rounded-3xl'>
          <span className='text-xl text-white font-bold'>Order Now</span>
        </button>

        <button className='p-2  bg-yellow-400 rounded-3xl'>
          <span className='text-xl text-white font-bold'>Order Now</span>
        </button>

        <button className='p-2  bg-yellow-400 rounded-3xl'>
          <span className='text-xl text-white font-bold'>Order Now</span>
        </button>

        <button className='p-2  bg-yellow-400 rounded-3xl'>
          <span className='text-xl text-white font-bold'>Order Now</span>
        </button>
      </div>

      <div className='grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 gap-x-2 grid-cols-1 w-full p-4'>
        <div className='rounded-lg flex flex-col p-4 w-full border border-1  border-gray-200'>
          <div className=' rounded-lg  w-full '>
            <div className='rounded-lg p-2 bg-white hover:bg-yellow-400 transition-all ease-in-out duration-250'>
              <div className='flex justify-end pb-2'>
                <i class="fa fa-heart" aria-hidden="true" ></i>
              </div>
              <img src={person3} alt="food1" className='w-full rounded-lg' />
            </div>
          </div>
          <div>
            <div className='pt-2'>
              <ul class="flex ">
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </li>
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </li>
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </li>
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                  </svg>
                </li>
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                  </svg>
                </li>
              </ul>

            </div>
            <div className='pt-2'>
              <a className='text-xl font-bold '> Water Bottle</a>
            </div>
            <div className='pt-2'>
              Investing in a reusable water bottle that you can refill throughout the day.
            </div>

            <div className='flex flex-row justify-between p-2'>
              <div>
                <span className='text-yellow-400 font-bold '>£10.18</span>

              </div>
              <div className='rounded bg-yellow-300'>
                <i class="fa fa-shopping-basket" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>

        <div className='rounded-lg flex flex-col p-4 w-full border border-1  border-gray-200'>
          <div className=' rounded-lg  w-full '>
            <div className='rounded-lg p-2 bg-white hover:bg-yellow-400 transition-all ease-in-out duration-250'>
              <div className='flex justify-end pb-2'>
                <i class="fa fa-heart" aria-hidden="true" ></i>
              </div>
              <img src={person3} alt="food1" className='w-full rounded-lg' />
            </div>
          </div>
          <div>
            <div className='pt-2'>
              <ul class="flex ">
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </li>
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </li>
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </li>
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                  </svg>
                </li>
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                  </svg>
                </li>
              </ul>

            </div>
            <div className='pt-2'>
              <a className='text-xl font-bold '> Water Bottle</a>
            </div>
            <div className='pt-2'>
              Investing in a reusable water bottle that you can refill throughout the day.
            </div>

            <div className='flex flex-row justify-between p-2'>
              <div>
                <span className='text-yellow-400 font-bold '>£10.18</span>

              </div>
              <div className='rounded bg-yellow-300'>
                <i class="fa fa-shopping-basket" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>

        <div className='rounded-lg flex flex-col p-4 w-full border border-1  border-gray-200'>
          <div className=' rounded-lg  w-full '>
            <div className='rounded-lg p-2 bg-white hover:bg-yellow-400 transition-all ease-in-out duration-250'>
              <div className='flex justify-end pb-2'>
                <i class="fa fa-heart" aria-hidden="true" ></i>
              </div>
              <img src={person3} alt="food1" className='w-full rounded-lg' />
            </div>
          </div>
          <div>
            <div className='pt-2'>
              <ul class="flex ">
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </li>
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </li>
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </li>
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                  </svg>
                </li>
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                  </svg>
                </li>
              </ul>

            </div>
            <div className='pt-2'>
              <a className='text-xl font-bold '> Water Bottle</a>
            </div>
            <div className='pt-2'>
              Investing in a reusable water bottle that you can refill throughout the day.
            </div>

            <div className='flex flex-row justify-between p-2'>
              <div>
                <span className='text-yellow-400 font-bold '>£10.18</span>

              </div>
              <div className='rounded bg-yellow-300'>
                <i class="fa fa-shopping-basket" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>

        <div className='rounded-lg flex flex-col p-4 w-full border border-1  border-gray-200'>
          <div className=' rounded-lg  w-full '>
            <div className='rounded-lg p-2 bg-white hover:bg-yellow-400 transition-all ease-in-out duration-250'>
              <div className='flex justify-end pb-2'>
                <i class="fa fa-heart" aria-hidden="true" ></i>
              </div>
              <img src={person3} alt="food1" className='w-full rounded-lg' />
            </div>
          </div>
          <div>
            <div className='pt-2'>
              <ul class="flex ">
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </li>
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </li>
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </li>
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                  </svg>
                </li>
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                  </svg>
                </li>
              </ul>

            </div>
            <div className='pt-2'>
              <a className='text-xl font-bold '> Water Bottle</a>
            </div>
            <div className='pt-2'>
              Investing in a reusable water bottle that you can refill throughout the day.
            </div>

            <div className='flex flex-row justify-between p-2'>
              <div>
                <span className='text-yellow-400 font-bold '>£10.18</span>

              </div>
              <div className='rounded bg-yellow-300'>
                <i class="fa fa-shopping-basket" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center mb-2'>
        <button className='p-2 rounded bg-yellow-400 '>
          <span className='text-xl text-black font-bold'>All Products</span>
        </button>
      </div>



    </section>

    <section class="testimonial text-center">
      <div class="container">

        <div class="heading white-heading">
          Testimonial
        </div>
        <div id="testimonial4" class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">

          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <div class="testimonial4_slide">
                <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <h4>Client 1</h4>
              </div>
            </div>
            <div class="carousel-item">
              <div class="testimonial4_slide">
                <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" /><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <h4>Client 2</h4>
              </div>
            </div>
            <div class="carousel-item">
              <div class="testimonial4_slide">
                <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <h4>Client 3</h4>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#testimonial4" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#testimonial4" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </section>

    <section className="bg-white w-full h-[100vh] p-4">

      <div className='flex justify-center text-4xl font-bold mb-2'>
        Our Talented Chefs
      </div>

      <div className='grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-2'>

        <div className='rounded-lg flex flex-col p-4 w-full border border-1  border-gray-200'>
          <div className=' rounded-lg  w-full '>
            <div className='rounded-lg p-2 bg-white hover:bg-gray-400 transition-all ease-in-out duration-250'>

              <img src={chef1} alt="food1" className='w-full rounded-lg' />
            </div>
          </div>
          <div>

            <div className='flex flex-col justify-center items-center pt-2'>

              <div className='text-xl font-bold'>
                Mr. XYZ
              </div>
              <div className='text-lg '>
                Testimonial abc
              </div>
            </div>

          </div>
        </div>

        <div className='rounded-lg flex flex-col p-4 w-full border border-1  border-gray-200'>
          <div className=' rounded-lg  w-full '>
            <div className='rounded-lg p-2 bg-white hover:bg-gray-400 transition-all ease-in-out duration-250'>

              <img src={chef2} alt="food1" className='w-full rounded-lg' />
            </div>
          </div>
          <div>

            <div className='flex flex-col justify-center items-center pt-2'>

              <div className='text-xl font-bold'>
                Mr. XYZ
              </div>
              <div className='text-lg '>
                Testimonial abc
              </div>
            </div>

          </div>
        </div>

        <div className='rounded-lg flex flex-col p-4 w-full border border-1  border-gray-200'>
          <div className=' rounded-lg  w-full '>
            <div className='rounded-lg p-2 bg-white hover:bg-gray-400 transition-all ease-in-out duration-250'>

              <img src={chef1} alt="food1" className='w-full rounded-lg' />
            </div>
          </div>
          <div>

            <div className='flex flex-col justify-center items-center pt-2'>

              <div className='text-xl font-bold'>
                Mr. XYZ
              </div>
              <div className='text-lg '>
                Testimonial abc
              </div>
            </div>

          </div>
        </div>

      </div>


    </section>
    <section className="bg-gray-400 w-full h-[100vh]">
      <div className='flex lg:flex-row xl:flex-row gap-x-2 flex-col w-full h-full'>
        <div className='w-full h-full '>
          <img src={location} alt="location" className='w-full h-full ' />
        </div>
        <div className='h-full w-full'>
          <form class="w-full h-full  border-1 border-gray-300 bg-white p-2">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  First Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Last Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  E-mail
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                <p class="text-gray-600 text-xs italic">Some tips - as long as needed</p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Message
                </label>
                <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                <p class="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3">
                <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                  Send
                </button>
              </div>
              <div class="md:w-2/3"></div>
            </div>
          </form>
        </div>

      </div>


    </section>

  </>
);

export default Home;
