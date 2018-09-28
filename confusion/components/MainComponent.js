import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    DishDetail: { screen: DishDetail }
}, {
    initialRouteName: 'Menu', 
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
            color: '#FFFFFF'
        }
    }
});

const HomeNavigator = createStackNavigator({
    Home: { screen: Home },
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
            color: '#FFFFFF'
        }
    }
});

const AboutNavigator = createStackNavigator({
    About: { screen: About },
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
            color: '#FFFFFF'
        }
    }
});

const ContactNavigator = createStackNavigator({
    Contact: { screen: Contact },
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
            color: '#FFFFFF'
        }
    }
});

const MainNavigator = createDrawerNavigator({
    Home: { 
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    About: { 
        screen: AboutNavigator,
        navigationOptions: {
            title: 'About Us',
            drawerLabel: 'About Us'
        }
    },
    Menu: { 
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        }
    },
    Contact: { 
        screen: ContactNavigator,
        navigationOptions: {
            title: 'Contact Us',
            drawerLabel: 'Contact Us'
        }
    }
}, {
    drawerBackgroundColor: '#D1C4E9'
});

class Main extends Component {

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId })
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
        
    }

    render() {

        return (
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MainNavigator />
                </View>
        );
    }
}

export default Main;