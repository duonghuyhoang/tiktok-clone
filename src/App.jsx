import { useState } from "react";




function App() {
  
const [name ,setName] = useState('Duong');
console.log(name);  
const handleClick = () => {
  setName(name +' Huy Hoang')
}
  return (
    <div className="App">
      
       <input type="text"  value={name}/>
       <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
