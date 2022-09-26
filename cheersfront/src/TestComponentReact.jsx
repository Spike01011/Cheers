import React, {Component} from 'react';
import {logDOM} from "@testing-library/react";

class TestComponentReact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    fetchData = async () => {
        let response = await fetch(
            `https://localhost:7021/home/privacy`, {
                mode: "no-cors",
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
        return JSON.stringify(await response.json());
    }

    componentDidMount() {
        fetch(
            "https://localhost:7021/home/privacy", {
                mode: "no-cors",
                method: "GET",
            })
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                this.setState({
                    items: result,
                    DataisLoaded: true
                });
            })
    }

    render() {
        return (
            <div>
                <h2>Ana, de ce nu mergi?</h2>
                {/*<h2>{this.fetchData().name}</h2>*/}
                {/*<h2>{this.fetchData().age}</h2>*/}
                {/*<h2>{this.state.items.name}</h2>*/}
                {/*<h2>{this.state.items.age}</h2>*/}
                {this.state.items.map(elem => <div>
                    <h3>{elem.name}</h3>
                    <h3>{elem.age}</h3>
                </div>)}
            </div>
        );
    }
}

export default TestComponentReact;