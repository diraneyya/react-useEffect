import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

const rootDOM = document.getElementById('root');
const appRoot = ReactDOM.createRoot(rootDOM);

function App (){
    let [rates, setRates] = React.useState({});
    
    function fetchData() {
        axios.get('https://api.exchangerate.host/latest?base=UAH')
        .then(response => {
            setRates(response.data.rates);
        })
        .catch(error => {
            console.error(error);
        });
    }

    React.useEffect(fetchData, []);

    return Object.keys(rates).map(e => 
        <h1>One hryvna is equal to { rates[e].toFixed(2) } of {e}</h1>
    );
}


appRoot.render( [
    <App />,
    <App />
]
);

