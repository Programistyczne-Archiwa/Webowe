function App() {
  return (
    <div class="container">
      <h2>Liczba kursów: 3</h2>
      <ol>
        <li>Programowanie w C#</li>
        <li>Angular dla początkujacych</li>
        <li>Kurs Django</li>
      </ol>
      <div class="form-group">
        <label for="name-and-username">Imię i nazwisko</label>
        <input type="text" className="form-control" id="name-and-username"/>
      </div>
      <div class="form-group">
        <label for="nr-course">Numer kursu</label>
        <input type="text" className="form-control" id="nr-course"/>
      </div>
      <button type="submit" className="btn btn-primary">Zapisz do kursu</button>
    </div>
  );
}

export default App;
