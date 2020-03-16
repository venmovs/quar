import React, {Component} from 'react';
import './header.css';


export default class Header extends Component {
    render() {

        const {data, onItemClick} = this.props;


        const elements = data.map((item) => {
            let classNames = 'menu_item'; /*создаем переменную с названием класса чтобы ее можно было менять*/

            if (item.important) {
                classNames += ' choose';
            }
            return (
                    <div
                        key = {item.id}
                        className={classNames}
                        onClick={() => onItemClick(item.id)}
                    >{item.label}</div>
            )
        }); // проходим по всему объекту в App state и берем нужные нам значения для меню айтема

        return (
            <div className="header">
                <div className="menu">
                    <div className="burger"/>
                </div>
                <div className="menu_list">Основное меню</div>
                <div className="menu_list__yellow_bg">
                    {elements}
                </div>
            </div>
        );
    }
}


