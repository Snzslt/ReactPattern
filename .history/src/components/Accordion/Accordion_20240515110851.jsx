import {createContext, useContext, useState} from 'react';
import A



export default function Accordion({ children, className }) {
    return <ul className={className}>{children}</ul>;
  }