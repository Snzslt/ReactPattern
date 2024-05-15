import {createContext, useContext, useState} from 'react';
import AccordionItem from './AccordionItem';

const AccordionContext = useContext();

export function useAccordion 



export default function Accordion({ children, className }) {
    return <ul className={className}>{children}</ul>;
  }