import {createContext, useContex}



export default function Accordion({ children, className }) {
    return <ul className={className}>{children}</ul>;
  }