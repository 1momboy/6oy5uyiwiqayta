

export default function Add({edit, pname, setPname, price, setPrice, addProduct, editItem, products, deleteItem}) {
  return (
    <div>
      <form className="form1" action="" onSubmit={addProduct}>
        <input 
        type="text" 
        name="" 
        id=""
        value={pname}
        onChange={(e) => setPname(e.target.value)}
        />
        <input 
        type="text" 
        name="" 
        id="" 
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        />
       <button >
        {edit ? 'edit' : 'add'}
       </button>
        </form>
        <div>
      {products.map((item) => {
        return (
          <div className="delete" key={item.id}>
            <h2>{item.name}</h2>
            <h2>{item.price}</h2>
            <button onClick={() => deleteItem(item.id)}>delete</button>
            <button  onClick={() => editItem(item.id)}>edit</button>
            </div>
          )
      })}
      </div>
        </div>
  )
}
