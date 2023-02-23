import logo from './logo.svg';
import './App.css';
// import Header, { Footer } from "./Header"
import Header from './components/common/Header';
import React,{ useState } from 'react';
// import Footer from './components/common/Footer';
// import Student from './components/pages/Student';
// import Movie from './components/pages/Movie';
// import  movie from './movie.json'
//console.log("fsdkjffkjsfkj",movie);

function App() {
  // let name = "Saroj Kumar Pandey"
  // let login = false;

  // if(login ==false){
  //   return <h1>Ja Mai render nahi karunga</h1>
  // }

const [num,setNum] = useState(1);
  
const increase= async()=>{
    setNum(num +1);
}
const decrease= async()=>{
  setNum(num - 1);
}

  return (
    
    <div className="App">
      <Header/>
      <div className='main'>        
        <button className='btninc' onClick={increase}>+</button>
        <h1 className='heading'>{num}</h1>
        <button className='btndec' onClick={decrease}>-</button>
        
      </div>


    {/* {
     (()=>{
       if(login){
         return <h2 style={{color:"#000"}}>Hello Now you can see me</h2>
       }else{
         return <h2 style={{color:"#000"}}>Bhi abhi mai apko nahi dikhunga</h2>
       }
     })()
  } */}

      {/* {
        login ? <h1>Ja Mai kuch  nahi karta</h1> :<p>Sorry Bhai Bol Kya bol raha hai.</p>
      } */}
        {/* <p>Hello {name} are you ready to start tutorial</p> */}
        {/* <Student name="Saroj Kumar Pandey" age="35"/> */}
        {/* <div className='main'>
          {
            movie.map((element,index)=>{
              return (
                <Movie key={index} title={element.Title} Year={element.Year} img={element.Poster} />
              ) 
            })
          }
                       
        </div> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
