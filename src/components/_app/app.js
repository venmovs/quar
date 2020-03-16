import React, {Component} from 'react';
import './app.css';
import Header from "../_header";
import FoodList from "../_food-list";


export default class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Мезе', important: false, id: 1},
                {label: 'Кюфта', important: false, id: 2},
                {label: 'Хачапури', important: false, id: 4}
          /*      {label: 'Хачапури', important: false, id: 5},
                {label: 'Хачапури', important: false, id: 6},
                {label: 'Хачапури', important: false, id: 7}*/
            ]
        };
        this.onItemClick = this.onItemClick.bind(this);
    }


    onItemClick(id) {

        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];


            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }

    render() {
        return (
            <div className="app">
                <Header
                    data={this.state.data}
                    onItemClick={this.onItemClick}/>
                <FoodList/>
            </div>
        )
    }
}






