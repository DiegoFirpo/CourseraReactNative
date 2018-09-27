import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishDetailComponent';
import { View } from 'react-native';
import { DISHES } from '../shared/dishes';

this.state = {
    dishes: DISHES,
    selectedDish: null
};

class Main extends Component {

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId })
    }

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <Menu dishes={this.state.dishes} onPress={(dishId) => this.onDishSelect(dishId)} />
                <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </View>
        );
    }
}

export default Main;