import './App.css';
import logo from"./assets/images/175b85183ecedb529e14.jpg"

const App  = () => {
    return (
        <div id="App">
        <div className="App-header">
            <img src={ logo } alt="logo-image"></img>
            <h1>School dashboard</h1>
        </div>

        <div className="App-body">
            <p>Login to access the full dashboard</p>
        </div>

        <div className="App-footer">
            <p>Copyright 2020 - ALX</p>
        </div>
        </div>
    )
}


export default App