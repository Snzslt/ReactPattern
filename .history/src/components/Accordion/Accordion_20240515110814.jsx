import {createContext, useContext, useState}



export default function Accordion({ children, className }) {
    return <ul className={className}>{children}</ul>;
  }