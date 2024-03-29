import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <div>
                    <h1>Welcome to my app</h1>
                    <MyButton/>
                </div>
            </header>
        </div>
    );

    function MyButton() {
        return (
            <button>
                Button
            </button>
        );
    }


}

export default App;
