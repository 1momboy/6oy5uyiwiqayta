
import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Login from './components/login'
import { getStore } from './utils'
import { uid } from 'uid'
import Products from './components/Products'
import Add from './components/Add'

function App() {

  const id = uid();

  const [login, setLogin] = useState(false)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  
  const [pname, setPname] = useState('');
  const [price, setPrice] = useState('');
  
  const [editID, setEditID] = useState(null);
  const [edit, setEdit] = useState(false);


  const [users, setUsers] = useState(getStore('users'));
  const [products, setProducts] = useState(getStore('products'));
 
  const handleSubmit = (e) => {
    
    const newUser = {id: id, uname: name, uemail: email};
    setUsers([ newUser]);
  }
  const addProduct = () =>{
    if(!pname && !price ){
      console.log('error');
    } else if  (name && edit ) {
      setProducts(products.map((item) => {
        if(item.id === editID){
          return {...item, name: pname , price:price}
        }
        return item;
      }))
  } else {
    const newProduct ={id:id, name:pname, price:price};
    setProducts([...products,newProduct]);
  }
  } 

  

    
      
        
    
    

    function deleteItem(id) {
  const newItem = products.filter((item) => item.id !== id)
  setProducts(newItem)
  setEditID(id)
  setName(newItem.name)
  setPrice(newItem.price)
}

    const editItem = (id) => {
      const newItem = products.find((item) => item.id === id)
      setEdit(true);
      setEditID(id);
      setPname(newItem.name)
      setPrice(newItem.price)
    }

    useEffect(() => {
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('products', JSON.stringify(products));
     
    },[users, products, setProducts])



  return (
    <>
    <h2> {users.uname && "welcome"} {users.uname}</h2>
        <Navbar login= {login} setLogin={setLogin} />
        {login && <Login
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        />}  
        <Add edit={edit} setEdit={setEdit} pname={pname} setPname={setPname} price={price} setPrice={setPrice} addProduct={addProduct}/>
        <Products editItem={editItem}  setEdit={setEdit} products={products} deleteItem={deleteItem} />
    </>
  )

        }
export default App
