import React from 'react';



function CostumerPage(props) {
  
  return(
    <section className='costumerPage'>
    {props.children}
  </section>
  )
}

export { CostumerPage};