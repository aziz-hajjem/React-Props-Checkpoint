import Profile from './Profile/Profile';
import image from './img.jpg';
import './App.css';


function App() {
  const name="Aziz Hajjem";

 
  return (
    <>
    <Profile fullName={name} bio="Club Africain"  profession="Student" handleName={()=>alert(`My name is ${name}`)} >
      <img src={image} alt="" style={{width:'30rem', height:"30rem" , borderRadius:'2em'}}/>
    </Profile>

    </>
  );
 
}


export default App;
