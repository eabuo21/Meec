import React from 'react'
import ClientCards from "./ClientsCards";
import ClienteleAccordion from "./ClientAccordion";

const Clientele = () => {
  return (
      <div className=' flex flex-col gap-12 p-2 justify-start items-start           md:grid md:grid-cols-2 md:justify-start md:items-start md:gap-8'>  
          
      <ClientCards />
      
          <ClienteleAccordion/>
          
    </div>
  )
}

export default Clientele