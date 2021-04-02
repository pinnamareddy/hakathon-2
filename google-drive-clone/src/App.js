import './App.css';
import Header from './components/header'
import Sidebar from './components/sidebar'
import FilesView from './components/filesView/FilesView'
import SideIcons from './components/sideIcons'

import GDriveLogo from './media/google-drive-logo.png'

import { auth, provider } from "./firebase";
import { useState } from 'react';

function App() {
  // const [user, setUser] = useState()
  const [user, setUser] = useState({
  displayName: "p m v s rajesh",
  email: "sairajesh8262@gmail.com",
  emailVerified: true,
  phoneNumber: null,
  photoURL: ""})

  
  

  return (
    <div className="app">
      {
        user ? (
          <>
            <Header userPhoto={user.photoURL} />
            <div className="app__main">
              <Sidebar />
              <FilesView />
              <SideIcons />
              
            </div>
          </>
        ) : (
            <div className='app__login'>
              
              
            </div>
          )
      }
    </div>
  );
}

export default App;
