function Drawer({onClose,onRemove,items = [] }) {
    return(
        <div  className="overlay">
        <div className="drawer">
        <h2 className="d-flex justify-between mb-30">Корзина 
        <img  onClick={onClose} className="cu-p" src="/img/remove.svg" alt="onClose"></img>
        </h2>  
       
       {
        items.length > 0 ? (  
          <div>
          <div className="items">
        {items.map((obj) => (
          <div className="cartItem d-flex align-center mb-20">
          <div style={{backgroundImage:`url(${obj.imageUrl})` }} className="cartItemImg" alt="imageUrl"></div>
          <div className="mr-20 flex">
            <p className="mb-5">{obj.title}</p>
            <b>{obj.price}</b>
          </div>
          <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/remove.svg" alt="remove"></img>
        </div>
          ))}
        </div>
         <div className="cartTotalBlock">
         <ul>
            <li>
            <span>Итого:</span>
            <div></div>
            <b>21 498 руб.</b>
            </li>
            <li className="d-flex">
            <span>Налог 5:</span>
            <div></div>
            <b>1074 руб.</b>
            </li> 
            <button onClick={onClose} className="greenButton">Оформить закакз <img src="/img/Group.svg"alt="Arrow"></img></button>
          </ul>  
          </div> 
          </div>
        ) : ( 
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
        <img className="mb-20" width="120px" height="120px" src="/img/cartEmpty.png" alt="includes"></img>
        <h2>Корзина пустая</h2>
        <p className="opacity-6">Добавьте хотя бы одну пару кроссовок,чтобы сделать закакз</p>
        <button onClick={onClose} className="greenButton">
          <img src="/img/arrow.png" alt="Arrow">Вернуться назад</img>
        </button>
       </div>
       )
       }
        </div>
        </div>  
    );
}

export default Drawer;