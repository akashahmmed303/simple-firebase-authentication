import app from './firebase/firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './App.css';

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error('error: ', error);
      });
  };

  return (
    <div className='App'>
      <button onClick={handleGoogleSignIn}>Google sign in</button>
    </div>
  );
}

export default App;
