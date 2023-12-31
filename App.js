import Card from "./components/Card/index";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import React from "react";
import axios from "axios";






function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened,setCartOpened] = React.useState(false);


   React.useEffect(() => {
   axios.get('https://644d048bcfdddac9709b0c54.mockapi.io/items').then((res) => 
   {setItems(res.data);
   });
   axios.get('https://644d048bcfdddac9709b0c54.mockapi.io/card').then((res) => 
   {
    setCartItems(res.data);
   })
   },[]);

   const onAddToCart = (obj) => {
    axios.post('https://644d048bcfdddac9709b0c54.mockapi.io/card', obj);
    setCartItems((prev) => [...prev, obj]);
   }
 
  const onRemoveItem = (id) => {
  axios.delete(`https://644d048bcfdddac9709b0c54.mockapi.io/card/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }
  


   const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
   }




    

  return (
    <div className="wrapper clear">
    {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
      <Header onClickCart={() => setCartOpened(true)} />  
    <div className="content p-40">
    <div className="d-flex align-center justify-between mb-40">
      <h1>{searchValue ?  `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
      <div className="search-block">
      <img src="/img/search.png" alt=""></img>
      {searchValue && ( 
      <img className="clear cu-p"
      onClick={() => setSearchValue('')}
      src="/img/remove.svg" 
      alt=""></img>
      ) }
      <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск"></input>
      </div>
    </div>
    
      <div className="d-flex flex-wrap">
        {items.filter((item => item.title.toLowerCase().includes(searchValue.toLowerCase()))).map((item,index) => (
          <Card
          key={index} 
          title={item.title}
          price={item.price}
          imageUrl={item.imageUrl} 
          onPlus={(obj) => onAddToCart(obj)} />
        ))} 
      </div>

    
    </div>
    </div>
    
  );
}

export default App;
