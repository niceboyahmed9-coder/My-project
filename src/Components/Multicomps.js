import { useState, createContext, useContext } from 'react';


const Billie = createContext();

function Multicomps() {
  const [user, setUser] = useState("Linus");

  return (
    <>    
    <Billie.Provider value={user}>

    </Billie.Provider>
    <Component2 />

    </>
  );
}


function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Midcomponent />
    </>
  );
}

function Midcomponent(){
    const user = useContext(Billie)
    return(
        <>
        <h1>hum bhi ayen hain </h1>
        <strong>{"iska naam hai"}  {user}</strong>
        <Component3/>
        </>
    )
}

function Component3() {
  const user = useContext(Billie);

  return (
    <>
      <h1>Component 3</h1>
      <h2>{"hello this is " } {user}</h2>
    </>
  );
}

export default Multicomps;