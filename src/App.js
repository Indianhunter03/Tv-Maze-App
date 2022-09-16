 
import NavBar from './Components/NavBar';
import Search from './Components/Search';
function App() {
  return (
    <>
     <div style={{marginTop:'0px',padding:'0px',opacity:'80%',backgroundRepeat:'no-repeat',width:'100%',height:'370px',backgroundSize:'cover',backgroundImage: `url("https://images5.alphacoders.com/403/thumb-1920-403408.jpg")`}}>  
       <NavBar />
    </div>
     <div>
       <Search/>
     </div>
    </>
  );
}

export default App;
