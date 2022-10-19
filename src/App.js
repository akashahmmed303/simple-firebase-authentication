import app from './firebase/firebase.init';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import './App.css';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error('error: ', error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      });
  };

  return (
    <div className='App'>
      {/* condition ? true: false */}

      {user.email ? (
        <button onClick={handleGoogleSignIn}>Google sign in</button>
      ) : (
        <button onClick={handleSignOut}>Sign Out</button>
      )}

      {user.email && (
        <div>
          <h3>User name: {user.displayName}</h3>
          <p>Email address: {user.email}</p>
          <img src={user.photoURL} alt='' />
        </div>
      )}
    </div>
  );
}

export default App;
