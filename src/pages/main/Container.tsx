import React from "react";

const Container = () => {
  return (
    <div className="containerr mx-auto hero pb-10 px-4">
      <img src={`${process.env.PUBLIC_URL}/img/outbreak-pink-OMPBSBVI.svg`} className="banner banner-pink z-20"/>
      <div className="flex sm:flex-row flex-col w-[90%] my-5 mx-auto">
        <div className="md:flex md:items-center z-30 sm:w-1/2 w-full break-all flex justify-center">
          <div className="heading">
            <h1 className="hero-heading uppercase">The Possessed
            <sup className="super"> NFT</sup></h1>
            <p className="text-center md:text-left">An innovative new NFT developed by PSSSSD Labs to enhance your creativity. <br/>
            </p>
            <p className="mt-4 text-center md:text-left">Outbreak starts in Q2 2022.</p>
          </div>
        </div>
        <div className="md:flex md:items-center z-10 sm:w-1/2 w-full">
            <div className="lf-player-container">
              <div id="lottie" className="hero-lottie">
                <img src={`${process.env.PUBLIC_URL}/img/1.png`} alt="" className="w-full h-full rounded-xl"/>
              </div>
            </div>
        </div>
      </div>
      <img src={`${process.env.PUBLIC_URL}/img/outbreak-orange-2PHTHBFH.svg`} className="banner banner-orange" />
      <img src={`${process.env.PUBLIC_URL}/img/outbreak-green-MOGZPMZQ.svg`} className="banner banner-green z-20" />
    </div>
  )
}

export default Container;
