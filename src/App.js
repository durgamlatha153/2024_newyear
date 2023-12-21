import './App.css';
import { useState,useEffect } from 'react';
import Confetti from 'react-confetti';
import ConfettiExplosion from 'react-confetti-explosion';

function App() {
  const [nyw,setNyw] = useState('');
  const [lang,setLang] = useState('');
  useEffect(()=>{
    displaytext();
  },[lang])
  const langselection =(e) => {
    setLang(e.target.value);
  }
  const displaytext = () => {
    if (lang === '' || lang === 'English') {
      setNyw('Wish you and your family members a Happy New Year');
    }
    if (lang === 'Hindi') {
      setNyw('आपको और आपके परिवार के सदस्यों को नव वर्ष की हार्दिक शुभकामनाएँ');
    }
    if (lang === 'Telugu') {
      setNyw('మీకు మరియు మీ కుటుంబ సభ్యులకు నూతన సంవత్సర శుభాకాంక్షలు');
    }
  }

  const keyframes = Array.from({ length: 100 + 1 }, (_, i) => `${i}% { background: linear-gradient(${180-i*36/10}deg,rgba(95,150,155,1),rgba(95,456,155,1),rgba(255,255,255,1));}`).join(' ');

  return (
    <div className="App">
      <Confetti/>
      <ConfettiExplosion duration={3000} particleCount={5000} width={1600} force={0.8} colors={['#FFC700','#FF0000','#2E3191','#41BBC7']} height={'200vh'}/>
      <style>
        {`
          @keyframes colorAnimation {
            ${keyframes}
          }
        `}
      </style>
      <div className='div1'>
        <h5 className='t1'>Choose Your Language:</h5>
        <select onChange={(e)=>langselection(e)} className='selectoptions'>
          <option value='English' className='op1'>English</option>
          <option value='Hindi'>हिंदी</option>
          <option value='Telugu'>తెలుగు</option>
        </select>
      </div>
      <p className='wtext'>{nyw}</p>
      <h1 className='year'>2024</h1>
    </div>
  );
}

export default App;
