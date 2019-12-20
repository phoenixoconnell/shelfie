import React, { Component } from "react";

export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        };

        this.handleCancel = this.handleCancel.bind(this);
        
    }


    handleNameChange(value) {
        this.setState({ name: value });
    }

    handlePriceChange(value) {
        this.setState({ price: value });
    }

    handleImgChange(value) {
        this.setState({ imgurl: value});
    }

    handleCancel() {
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        });
    }
    
    render() {
        return (
            <div>
                <input onChange={e => this.handleImgChange(e.target.value)} type="text" />
                <input onChange={e => this.handleNameChange(e.target.value)} type="text" />
                <input onChange={e => this.handlePriceChange(e.target.value)} type="text" />
                <button onClick={this.handleCancel}>Cancel</button>
                <button>Add to Inventory</button>
                </div>
        );
    }
}