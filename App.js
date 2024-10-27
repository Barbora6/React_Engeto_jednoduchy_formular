
import { useState } from 'react'

const App = () => {
  const[fullName, setFullName] = useState('')
  const[email, setEmail] = useState('')
  const[users, setUsers] = useState([])


  const formSubmit = (event) => {
    event.preventDefault()

    if(fullName && email){
      const oneUser = { userFullName: fullName, userEmail: email }
      setFullName('')
      setEmail('')
      setUsers((users) => {
        return [...users, oneUser]
      })
    } else {
      console.log('Něco nebylo vyplněno!');
    }
  }

  return <article>
    <form onSubmit={formSubmit}>
      <input 
      type="text" 
      placeholder='Jméno'
      value={fullName}
      onChange={(event) => setFullName(event.target.value)}/>
      <input 
      type="text" 
      placeholder='Email'
      value={email}
      onChange={(event) => setEmail(event.target.value)} />
      <button>Odeslat</button>
    </form>

    {
      users.map((oneUser, index) => {
      const {userFullName, userEmail} = oneUser

        return <div key={index} className='user-box'>
          <h2>{userFullName}</h2>
          <p>{userEmail}</p>
        </div>
      })
    }
    </article>

}

export default App

































// import { useState } from "react"
// const App = () => {
//   const [fullName, setFullName] = useState("")
//   const [email, setEmail] = useState("")
//   const [users, setUsers] = useState([])
//   const formSubmit = (event) => {
//     event.preventDefault()
//     if (fullName && email) {
//       const oneUser = { userFullName: fullName, userEmail: email }
//       setFullName("")
//       setEmail("")
//       setUsers((users) => {
//         return [...users, oneUser]
//       })
//     } else {
//       console.log("Něco nebylo vyplněno!");
//     }
//   }
// return <article>
//   <form onSubmit={formSubmit}>
//     <input 
//       type="text" 
//       placeholder="Jméno"
//       value={fullName}
//       onChange={ (event) => setFullName(event.target.value) } 
//     />
//     <input 
//       type="email" 
//       placeholder="Email" 
//       value={email}
//       onChange={ (event) => setEmail(event.target.value) }
//     /> 
      
//       <button>Odeslat</button>
//     </form>
//     {users.map((oneUser, index) => {
//       const { userFullName, userEmail } = oneUser
//       return <div key={index} className="user-box">
//         <h2>{userFullName}</h2>
//         <p>{userEmail}</p>
//       </div>
//     })}
//   </article>
// }
// export default App


/*
1. k form přidej událost odeslání formuláře, jakmile bude formulář odeslán, spustí se funkce formSubmit
2. vypnout výchozí chování formuláře preventDefault()
3. Získání hodnoty z formuláře, pomocí useState.
4. Vytvořit proměnné pomocí useState - fullName, email, users
5. v users bude prázdné pole
6. obsah proměnných doplním do inputů ve formuláři, pomocí value (její hodnota se propisuje do políčka)
7. ukládání do proměnných to co se nachází v políčku => pomocí onChange 
onChange se spustí, jakmile se v políčku cokoli změní
pomocí funkcí setFullName a setEmail se nastaví do proměnných
8. K políčku se dostaneš pomocí event.target.value

PODMÍNKA, KTERÁ ŘEŠÍ JESTLI JE V POLÍČKU NĚCO VYPLNĚNO
  1. vytvořím podmínku
  2. vytvořím do ní nový objekt, který bude mít v sobě vlastnosti userFullName a userEmail
  - naplním je hodnotami fullName a email, a objekt uložím do proměnné oneUser

  if (fullName && email) {
  const oneUser = { userFullName: fullName, userEmail: email }
} else {
  console.log("Něco nebylo vyplněno!");
}

3. Dalším krokem je, že zavoláš funkci setUsers. Co bude uvnitř oblých závorek, tak se nastaví do proměnné users.

Ty ale nejdříve potřebuješ do pole users přidat nový objekt OneUser. To uděláš tak, že se současný obsah user pošle do funkce uvnitř setUsers. 

Díky spread operátoru k users přidáš oneUser. A celé toto pole se vrátí.

Výsledkem je, že se do users díky setUsers uloží pole rozšířené o oneUser.

if (fullName && email) {
  const oneUser = { userFullName: fullName, userEmail: email }
  setUsers((users) => {
    return [...users, oneUser]
  })
} else {
  console.log("Něco nebylo vyplněno!");
}
*/