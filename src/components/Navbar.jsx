import { Link } from "react-router-dom";


export default function Navbar({login, setLogin}) {
  return (
    <div>
        <ul className="nav">
            <li> 
            <Link to='/' >
            Home
            </Link>
            </li>
            <li><Link to='/add'>
            Add
            </Link>
            </li>
            <li>
              <Link to='/products'>
                Products
              </Link>
            </li>
            <li>
              <Link to='/about'>
              About
              </Link>
            </li>
            <li>
              <Link to='/service'> 
              Service
              </Link>
            </li>
            <Link to='/login'>

                 <button onClick={() => setLogin(!login)}>
                    login
                 </button>
                 </Link>
        </ul>
            </div>
  )
}
