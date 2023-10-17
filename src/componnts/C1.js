import React, { useState } from 'react';

function C1() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');
  const calculateAge = () => {
    const birth = new Date(birthDate);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birth.getFullYear();
    if (
      today.getMonth() < birth.getMonth() ||
      (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
    ) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  };

  return (
    <div>
      <center>
        <b><h1>Age Calculator</h1></b>
        <b><h3>Enter your date of birth</h3></b>
        <input
          type="date"
          placeholder="Enter your Date of birth"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <br /><br />
        <button
          style={{
            background: 'black',
            color: 'white',
            width: '100px',
            height: '40px',
            borderRadius: '10px',
          }}
          onClick={calculateAge}
        >
          Calculate Age
        </button>
        <br />
        <h3 id="i1">{age !== '' ? `Your age is ${age} years.` : ''}</h3>
      </center>
    </div>
  );
}

export default C1;
