import {createContext, useContext, useState} from 'react';
import AccordionItem from './AccordionItem';

const AccordionContext = useContext();

export function useAccordionContext(){
  const ctx = useContext(AccordionContext);

  if(!ctx){
    throw new Error(
      'Accordion-related componentd must be wrapped by <Accordion>.'
    );
  }
  return ctx;
}




export default function Accordion({ children, className }) {
    const [openItemId, setOpenItemId] = useState();

    function toggleItem(id){
      setOpenItemId((prev) => (prevId === id ? null : id));
    }

    const context
    return <ul className={className}>{children}</ul>;
  }