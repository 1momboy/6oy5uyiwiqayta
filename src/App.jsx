
import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Login from './components/login'
import { getStore, getUser } from './utils'
import { uid } from 'uid'
import Products from './components/Products'
import Add from './components/Add'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Service from './page/Service'
import Error from './page/Error'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  const id = uid();

  const [login, setLogin] = useState(false)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  
  const [pname, setPname] = useState('');
  const [price, setPrice] = useState('');
  
  const [editID, setEditID] = useState(null);
  const [edit, setEdit] = useState(false);


  const [user, setUser] = useState(getUser('user'));
  const [products, setProducts] = useState(getStore('products'));
 
  const handleSubmit = (e) => {
    
    const newUser = {id: id, uname: name, uemail: email};
    setUser([ newUser]);
  }
  const addProduct = () =>{
    if(!pname && !price ){
      console.log('error');
    } else if  (pname && edit ) {
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
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('products', JSON.stringify(products));
     
    },[user, products, setProducts])



  return (
    <>
    
        <Navbar login= {login} setLogin={setLogin} />
        <Routes>
              <Route path='/login' element={login && <Login
                                    name={name}
                                    setName={setName}
                                    email={email}
                                    setEmail={setEmail}
                                    handleSubmit={handleSubmit}
                                    />} 
        />

        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        
          <Route path='/add' element={        <Add edit={edit} setEdit={setEdit} pname={pname} setPname={setPname} price={price} setPrice={setPrice} addProduct={addProduct} editItem={editItem}   products={products} deleteItem={deleteItem}/>} />

        <Route path='*' element={<Error/>} />
        <Route path='/products' element={
          <ProtectedRoute user={user} >
            <Products editItem={editItem}  
            setEdit={setEdit} 
            products={products} 
            deleteItem={deleteItem} />
          </ProtectedRoute>

        }/>

         </Routes> 
        
        
        
        
        
        
        
        
        
    </>
  )

        }
export default App
