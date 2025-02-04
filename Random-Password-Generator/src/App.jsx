import { useState } from 'react';

import { UpperCase, LowerCase, SpecialChar, Numbers } from './data/password.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  let [upperCase, setUpperCase] = useState(false);
  let [lowerCase, setLowerCase] = useState(false);
  let [numbers, setNumbers] = useState(false);
  let [specialChar, setSpecialChar] = useState(false);
  let [passwordLength, setPasswordLength] = useState(10);
  let [password, setPassword] = useState('');

  let createPassword = () => {

    let allowedChars = '';
    let temp = '';
    if (upperCase || lowerCase || numbers || specialChar) {
      if (upperCase) {
        allowedChars += UpperCase;
      }
      if (lowerCase) {
        allowedChars += LowerCase;
      }
      if (numbers) {
        allowedChars += Numbers;
      }
      if (specialChar) {
        allowedChars += SpecialChar;
      }
      for (let i = 0; i < passwordLength; i++) {
        temp += allowedChars.charAt(Math.random() * allowedChars.length)

      }
      setPassword(temp);
      toast.success('Password Generated Successfully');
    }

    else {
      toast.error('Please select atleast one option');
    }

  }
  let copyPass = () => {
    navigator.clipboard.writeText(password);
    toast.info('Password Copied');
  }
  return (

    <div className='container'>
      <ToastContainer
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <h2>Password Generator</h2>
      <div className='display'>
        <input type="text" readOnly value={password} />
        <button onClick={copyPass}>Copy</button>
      </div>

      <div className='passwordLength'>
        <label>Password Length</label>
        <input type="number" max={20} min={10} value={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} />
      </div>
      <div className='check'>
        <label>UpperCase</label>
        <input type="checkbox" checked={upperCase} onChange={() => setUpperCase(!upperCase)} />
      </div>

      <div className='check'>
        <label>LowerCase</label>
        <input type="checkbox" checked={lowerCase}
          onChange={() => setLowerCase(!lowerCase)} />
      </div>

      <div className='check'>
        <label>Numbers</label>
        <input type="checkbox" checked={numbers}
          onChange={() => setNumbers(!numbers)} />
      </div>
      <div className='check'>
        <label>Special Characters</label>
        <input type="checkbox" checked={specialChar}
          onChange={() => setSpecialChar(!specialChar)} />
      </div>
      <button className='btn' onClick={createPassword}>Press To Generate</button>
    </div>
  )
}

export default App
