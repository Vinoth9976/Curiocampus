import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FirstPage from './Startpage/FirstPage';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import ForgotPasswordForm from './Forgetpassword/Forgetpassword'; 
import SendOTP from './Sendotp/Sendotp'; 
import ResetPassword from './ResetPassword/Resetpassword';
import Chat from './chatapp/Chat';
import Profile from './UserProfile/UserPofile';
import Art from './Cards/Art';
import Development from './Cards/Development';
import Gaming from './Cards/Gaming';
import Music from './Cards/Music';
import Photograph from './Cards/Photograph';
import Ui_Ux from './Cards/Ui_Ux';
import Creativity from './Cards/Creativity';
import Dance from './Cards/Dance';
import ProfilePage from './profilepage/ProfilePage';
import MainScreen from '../src/MainPage/MainScreen';
import UserForm from './profilepage/ProfilePage';
import UserIntro from './offlinevideo/offline';
import CustomRoom from '../src/videocall/CreateRoom';


function App() {
  return (
    <Routes>
    <Route path="/" element={<FirstPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/forgot-password" element={<ForgotPasswordForm />} />
    <Route path="/verify-otp" element={<SendOTP />} /> 
    <Route path="/reset-password" element={<ResetPassword />} />
    <Route path="/MainScreen" element={<MainScreen/>} /> 
    <Route path="/chat" element={<Chat />} /> 
    <Route path="/video-call" element={<CustomRoom />} /> 
    <Route path="/Profilepage" element={<ProfilePage />} />
    <Route path="/Profile" element={<Profile/>} />
    <Route path="/Profile" element={<UserForm />} />
    <Route path="/Art" element={<Art />} />
    <Route path="/Creativity" element={<Creativity />} />
    <Route path="/Development" element={<Development />} />
    <Route path="/Dance" element={<Dance />} />
    <Route path="/Gaming" element={<Gaming />} />
    <Route path="/Music" element={<Music />} />
    <Route path="/Photograph" element={<Photograph />} />
    <Route path="/Ui_Ux" element={<Ui_Ux />} />
    <Route path="/Userform" element={<UserForm />} />
    <Route path="/offline" element={<UserIntro />} />
  </Routes>
  );
}

export default App;
