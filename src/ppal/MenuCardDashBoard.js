  import './css/MenuCardDashBoard.css';

  function MenuCardsDashBoard(props) {
    return(
      <ul className="menuCardDashBoard">
        {props.children}
      </ul>
    )
  }

    export { MenuCardsDashBoard };