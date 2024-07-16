import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
        This is react app it will be deployed automatically to MySWA via ci/cd.
   
        <a href="/.auth/me">Me</a>&nbsp;|&nbsp;
        <a href="/.auth/logout">Log out</a>
        
      </header>
    </div>
  );
}

export default App;
