import {createContext, useContext, useState} from 'react';
import AccordionItem from './AccordionItem';

const 



export default function Accordion({ children, className }) {
    return <ul className={className}>{children}</ul>;
  }