import './css/ToDoPage.css';

function ToDoPage(props) {
  return(
    <section className='toDoPage'>
      {props.children}
    </section>
  )
}

  export { ToDoPage };
