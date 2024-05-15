import {createContext, useContext, useState} from 



export default function Accordion({ children, className }) {
    return <ul className={className}>{children}</ul>;
  }