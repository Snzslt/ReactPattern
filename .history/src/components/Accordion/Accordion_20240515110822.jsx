import {createContext, useContext, useState} from 'react'



export default function Accordion({ children, className }) {
    return <ul className={className}>{children}</ul>;
  }