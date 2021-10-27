import { Input } from "./Components/Input";
import { Card } from "./Components/Card";
import { useState } from "react";
import GlobalStyle from "./Styles/global";

interface User {
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<any>();
  const [hobby, setHobby] = useState<string>(""); 
  const [user, setUser] = useState<User[]>([] as User[]);
  const [show, setShow] = useState<boolean>(true);
  const handleClick = (name:string, age:number, hobby:string) => {
    const person = {name, age, hobby};
    setUser([person]);
    setName("");
    setAge("");
    setHobby("");
    setShow(false);
  }

  return (
    <div className="App">
      <GlobalStyle/>
      {show ?
      <div className="form">
        <h1>Formulário</h1>
        <Input label="nome" value={name} placeholder="name" onChange={(e) => setName(e.target.value)}></Input>
        <Input label="idade" value={age} placeholder="age" onChange={(e) => setAge(parseInt(e.target.value))}></Input>
        <Input label="hobby" value={hobby} placeholder="hobby" onChange={(e) => setHobby(e.target.value)}></Input>
        <button onClick={() => handleClick(name, age, hobby)}>Enviar</button>
      </div>
      :
      user.map(item =>
        <>
          <Card name={item.name} age={item.age} hobby={item.hobby}></Card>
          <button onClick={() => setShow(true)}>Voltar ao formulário</button>
        </>
        )
      }
    </div>
  );
}

export default App;
