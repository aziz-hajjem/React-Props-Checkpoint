import Profile from './Profile/Profile';
import image from './img.jpg';
import './App.css';


function App() {
 const FNname=(params)=> {
  alert(`Welcome ${params}`)
 }

 
  return (
    <>
    <Profile fullName="Aziz Hajjem " bio="Club Africain"  profession="Student" FNPropsName={FNname} >
      <img src={image} alt="" style={{width:'30rem', height:"30rem" , borderRadius:'2em'}}/>
    </Profile>

    </>
  );
 
}


export default App;
