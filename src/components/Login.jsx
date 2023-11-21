

export default function Login({name ,setName, email, setEmail, handleSubmit, }) {
  return (
    <div>
        <form action="">
            <input
                 type="text" 
                 value={name} 
                 onChange={(e) => setName(e.target.value)}
                 />
            <input
                type="text" 
                value={email}  
                 onChange={(e) => setEmail(e.target.value)}
                />
                    <button onClick={() => handleSubmit()}>
                        login
                    </button>
        </form>
    </div>
  )
}
