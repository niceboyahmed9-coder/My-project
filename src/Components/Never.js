import React from 'react';
import { useState, createContext, useContext } from 'react';


const Never = createContext();

function Component1() {
  const [user, setUser] = useState("Linus");

  return (
    <Never.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </Never.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const user = useContext(Never);

  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}


export default Never;
