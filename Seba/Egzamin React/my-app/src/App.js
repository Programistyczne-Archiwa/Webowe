import React, { useState } from 'react';

function App() {

  var kursy = ["Programowanie w C#", "Angular dla początkujących", "Kurs Django"]

  const [nameAndUsername, setNameAndUsername] = useState('')
  const [nrCourse, setNrCourse] = useState('')

  const nameAndUsernameChange = event => {
    setNameAndUsername(event.target.value)
  }
  const nrCourseChange = event => {
    setNrCourse(event.target.value)
  }

  function consoleOutput() {
    console.log(nameAndUsername)
    if (nrCourse > 0 && nrCourse - 1 < kursy.length && nrCourse != '') {
      console.log(kursy[nrCourse - 1])
    }
    else
    {
      console.log("Nieprawidłowy numer kursu")
    }
  }

  return (
    <div className="container">
      <h2>Liczba kursów: 3</h2>
      <ol>
        {kursy.map(function (value, key){
          return <li key={key}>{value}</li>
        })}
      </ol>
      <div className="form-group">
        <label htmlFor="name-and-username">Imię i nazwisko</label>
        <input type="text" className="form-control" id="name-and-username" value={nameAndUsername} onChange={nameAndUsernameChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="nr-course">Numer kursu</label>
        <input type="text" className="form-control" id="nr-course" value={nrCourse} onChange={nrCourseChange}/>
      </div>
      <button type="submit" className="btn btn-primary" onClick={consoleOutput}>Zapisz do kursu</button>
    </div>
  );
}

export default App;
