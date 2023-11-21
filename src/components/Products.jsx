
export default function Products({products, deleteItem}) {
  return (
    <div>
      {products.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <button onClick={() => deleteItem(item.id)}>delete</button>

            </div>
          )
      }
      
      
      )}
    </div>
  )
}

  
  
  
