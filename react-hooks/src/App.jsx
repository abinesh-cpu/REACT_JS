import { useState } from 'react';

function App(){
  const [name, setName] = useState('Manu');

  // const handleChange = () => {
  //   setName('Vysakh');
  // }

  return(
    <>
      <h1>{name}</h1>
      {/* <button onClick={handleChange}>Change Name</button> */}
      <button onClick={() => setName('Vysakh')}>Change Name</button>
    </>
  );
}

export default App;