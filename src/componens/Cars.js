import React, {Component} from 'react';

import {carService} from "../services/carService";
import {Car} from "./Car";

class Cars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }

    componentDidMount() {
        carService.getAll().then(({data}) => this.setState({cars: data}))
    }

    render() {
        return (
            <div>
                {this.state.cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        );
    }
}

export {Cars};
