function Header(props){
    return(
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="./img/image 4.png" alt="logotype"></img>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучшиз кросовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li onClick={props.onClickCart}>
            <img width={18} height={18} src="./img/Vector.png" alt="card"></img>
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="./img/Vector1.png" alt="jopa"></img>
          </li>
        </ul>
      </header>
    )
}
export default Header;








