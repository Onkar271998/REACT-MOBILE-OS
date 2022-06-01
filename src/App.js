import './App.css';
import { Head, Categories }  from './components/list';
function App() {
  
  let info1 = [
    { name:"Android" },
    { name:"Blackberry" },
    { name:"iPhone" },
    { name:"Windows Phone" }
  ];
  let info2 = [
    { name:"Samsung" },
    { name:"Htc" },
    { name:"Micromax" },
    { name:"Apple" }
  ];

  return (
    <div className="pp">
      <Head value="Opertaing System" />
      {info1.map((list) => (
          <Categories {...list}/>
      ))}
      
      <Head value="Manufactures"/>
      {info2.map((list2) => (
        <Categories {...list2}/>
      ))}
    </div>
  );
}

export default App;