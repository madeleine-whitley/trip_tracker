
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center fixed-bottom">
      <div className="text-center ">
        © {new Date().getFullYear()} Copyright:
        <a href="https://github.com/madeleine-whitley" target="_blank"> Madeleine Whitley</a>
      </div>
    </footer>
  )
}

export default Footer;