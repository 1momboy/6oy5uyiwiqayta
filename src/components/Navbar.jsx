

export default function Navbar({login, setLogin}) {
  return (
    <div>
        <ul className="nav">
            <li>home</li>
            <li>logo</li>
            <li>products</li>
            <li>
                 <button onClick={() => setLogin(!login)}>
                    login
                 </button>
                 </li>
        </ul>
            </div>
  )
}
