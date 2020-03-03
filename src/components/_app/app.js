import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Header from "../_header";
import FoodList from "../_food-list";


const App = () => {
    return (
        <div className="app">
            <Header />
            <FoodList />
        </div>
    )
};


ReactDOM.render(<App/>, document.getElementById("root"));

export default App;



