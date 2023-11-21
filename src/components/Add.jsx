

export default function Add({pname, setPname, price, setPrice, addProduct}) {
  return (
    <div><form action="">
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
       <button onClick={() => addProduct () }>
        add
       </button>

        </form>
        </div>
  )
}
