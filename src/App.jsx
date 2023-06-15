import { useState } from 'react'

import './App.css'


import './style.css'


function App() {



  const [result, setResult] = useState('0')

 

const clickBtn=(e)=>{
if(result==0)
setResult(e.target.name)

else



setResult(result+e.target.name)
}

const clickpoint=(e)=>{
 if(result=='')
setResult('0'+e.target.id)


 

else
setResult(result+e.target.name)

}

const clickBtnOp=(e)=>{
if(result=='' || result=='0'  && e.target.name=='*')
return
else


setResult(result+e.target.name)
}

const clearScreen=()=>{

setResult('')
}

const calculate=()=>{


const output=eval(result)
setResult(output)


 
}








 return (
 
   <>
  




    <div className="outerdiv" className="cal">
      
 
<div>


<h2 >calculator</h2>
<hr/>

<div >

<h1 className="input">{result}</h1>






<hr />

</div>

<div className="div">

 


<div><button name="7" onClick={clickBtn}>7</button></div>
<div><button name="8" onClick={clickBtn}>8</button ></div>
<div><button name="9" onClick={clickBtn}>9</button></div>
<div><button  name="/" onClick={clickBtnOp}>/</button></div>

</div>

<div className="div">
<div><button name="4" onClick={clickBtn}>4</button></div>
<div><button name="5" onClick={clickBtn}>5</button></div>
<div><button name="6" onClick={clickBtn} >6</button></div>
<div><button  name="*" onClick={clickBtnOp}>*</button></div>
</div>

<div className="div">

<div><button name="1" onClick={clickBtn}>1</button></div>
<div><button name="2" onClick={clickBtn}>2</button></div>
<div><button name="3" onClick={clickBtn}>3</button></div>
<div><button name="+" onClick={clickBtnOp}>+</button></div>
</div>

<div className="div">
<div><button id="." onClick={clickpoint}>.</button></div>
<div><button name="0" onClick={clickBtn}>0</button></div>
<div><button  onClick={calculate}>=</button></div>
<div><button name="-" onClick={clickBtnOp}>-</button></div>

</div>

<div> <button class="clearbtn"  onClick={clearScreen}>Clear</button></div>

  </div>

</div>
</>


)
}






export default App;










