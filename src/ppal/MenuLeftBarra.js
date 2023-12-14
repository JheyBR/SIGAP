import './css/MenuLeftBarra.css';

function MenuLeftBarra(props) {
  return(
    <ul className="MenuLeftBarra">
      {props.children}
    </ul>
  )
}

  export { MenuLeftBarra };