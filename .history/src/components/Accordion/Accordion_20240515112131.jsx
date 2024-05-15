import {createContext, useContext, useState} from 'react';
import AccordionItem from './AccordionItem';

const AccordionContext = useContext();

export function useAccordionContext(){
  const ctx = useContext(AccordionContext);

  if(!ctx){
    throw new Error(
      'Accordion-related comp'
    )
  }
}



export default function Accordion({ children, className }) {
    return <ul className={className}>{children}</ul>;
  }