import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../index.css'


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posesNumber: 5
        };
    }


    handleChange(event) {
        this.setState({ posesNumber: event.target.value })
    }

    dropdownMenu() {
        return (
            <select name='posesNumber' onChange={(event) => this.handleChange(event)} value={this.state.posesNumber}>
                <option value="5">five poses</option>
                <option value="10">ten poses</option>
                <option value="15">fifteen poses</option>
            </select>
        )
    }

    goButton() {
        return (
            <Link to={{
                pathname: "/poses",
                search: "?number=" + this.state.posesNumber,
            }}>
                <button type="button">
                    Show
                </button>
            </Link>
        )
    }

    render() {
        return (
            <div className={'menu'}>
                <span>I want</span>
                {this.dropdownMenu()}
                {this.goButton()}
            </div>
        );
    }
}

export default Menu;
