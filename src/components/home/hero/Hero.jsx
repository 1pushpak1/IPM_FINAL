import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
     <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Unlimited IPM-AT & PI Online & classes
        <br class="hidden lg:inline-block"/>SWOT Analysis, Personal Mentor, Online Mock, IIM & IIT Faculty, Offline available in Delhi
      </h1>
      <p class="mb-8 leading-relaxed">India's Most Trusted & 3 Times Awarded. Personalized IPMAT Mentorship Program With Unlimited Classes
Online & Offline (Delhi). Programs Available Experience Your Personalized Journey.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://i.pinimg.com/originals/32/9b/63/329b63886c58f6f4915b8642f52ec8b3.gif"/>
    </div>
  </div>
</section>

    </>
  )
}

export default Hero
