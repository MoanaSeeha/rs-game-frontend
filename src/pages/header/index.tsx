import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="nav fixed left-0 right-0 flex flex-row pr-4 sm:px-16 items-center z-50 uppercase text-sm text-black">
        <div className="hidden sm:inline sm:pl-32">PSSSSD Labs</div>
        <div className="grow text-right">
          <span className="dot"></span>
          <span className="hidden md:inline">Current Status: </span>Tier 4 Emergency
        </div>
        <div className="mx-4">||||</div>
        <a className="underline underline-offset-1" href="/connect">Connect</a>
      </nav>
      <div className="fixed left-0 z-40 overflow-x-hidden header">
        <img src={`${process.env.PUBLIC_URL}/img/nav-QLRXPLVY.svg`} className="nav-img" alt=""/>
      </div>
      <img src={`${process.env.PUBLIC_URL}/img/logo-FDOECSF6.svg`} className="nav-logo fixed w-16 z-40" alt="logo"></img>
    </div>
  )
}

export default Header;