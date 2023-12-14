import './css/AllDashBoard.css';

function AllDashBoard(props) {
  return(
    <section className='AllDashBoard'>
      {props.children}
    </section>
  )
}

  export { AllDashBoard };