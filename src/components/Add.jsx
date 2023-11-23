

export default function Add({edit, pname, setPname, price, setPrice, addProduct}) {
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
        </div>
  )
}
