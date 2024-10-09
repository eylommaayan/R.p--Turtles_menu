import React from "react";




function App() {
  return (
    <div>
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  );
}

function Header(){
  return <h1>רכיב פיצה ביוב</h1>
}

function Menu(){
  return (
    <div>
      <h2>תפריט הפיצה צבי הנינג'ה</h2>
      <Pizza/>
    </div>
  )
}

function Footer() {
  return (
    <footer>{new Date().toLocaleTimeString()}.כרגע אנחנו בביוב</footer>
  )
}


function Pizza() {
  return(
    <div>
     <img src="./pizzas/tiramisu.jpg" alt="Pizza" />
    <h2>Pizza</h2>;
    <p>פיצה צבי הניג'נג'ה עם  רוטב ביוב</p>
</div>
  )
  
}

export default App;
