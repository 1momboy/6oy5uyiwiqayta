
export default function Products({editItem, products, deleteItem}) {
  return (
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
  )
}

  
  
  

