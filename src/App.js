import {useState} from 'react'
import axios from 'axios'
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import Popup from "./components/Popup/PopUp";


function App() {
    const [state, setState] = useState({
        s: '',
        results: [],
        selected: {},
        error: '',
    });

    const apiUrl = 'http://www.omdbapi.com/?apikey=86a8b6f9&'

    const handleInput = e => {
        let s = e.target.value;

        setState(prevState => {
            return {...prevState, s: s}
        });
    }

    const search = e => {
        if (e.key === 'Enter' && state.s !=='') {
            axios(apiUrl + '&s=' + state.s).then(({data}) => {
                let results = data.Search;
                if (results) {
                    setState(prevState => {
                        return {...prevState, results: results, error: ''}
                    })
                }else{
                    setState(prevState => {
                        return {...prevState, error: 'No movies found by your request.'}
                    })
                }
            })
        }
    }

    const openPopup = id => {
        axios(apiUrl + '&i=' + id).then(({data}) => {
            let result = data;
            setState(prevState => {
                return {...prevState, selected: result}
            })
        })
    }

    const closePopup = () => {
        setState(prevState => {
            return {...prevState, selected: {}}
        })
    }


    return (
        <div className="App">
            <header>
                <h1>Movie DataBase</h1>
            </header>
            <main>
                <Search handleInput={handleInput} search={search}/>

                {(state.error === '')?
                    (<Results results={state.results} openPopup={openPopup}/>)
                    :<div className= 'error'>{state.error}</div>}

                {typeof state.selected.Title != 'undefined' ? (
                    <Popup selected={state.selected} closePopup={closePopup}/>) : false}

            </main>
        </div>
    );
}

export default App;
