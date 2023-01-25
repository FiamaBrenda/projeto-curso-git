//import {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';



const App = () => {
//   const [texts, setTexts] = useState([]);
//   const [text, setText] = useState('')

//   // const handleChange = (value) => {
//   // setText(value);
  
// }
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const newItem = {
//       text: text,
//       id: Date.now
     
//     }  
//     if(newItem.text !==''){
//     setTexts([...texts,newItem])
// console.log(texts)
//     }
// }

  return (
    <div className="App">
     {/* <form>
       <label>Tarefa Finalizada </label>
       <input onChange={(event)=> handleChange(event.target.value)} />
       <button onClick={(event) => handleSubmit(event)} >Adicionar</button>
     </form>
     <section>
       <ul>
         {texts.length ? texts.map((item) => (
           <li key={Math.random()}>{item.text}</li>

         )):''}
       </ul>
     </section>  */}
     <Login/>
    </div>
  );
}
  

export default App;
