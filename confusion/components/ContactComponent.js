import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                <Card title='Contact Information'>
                    <Text>
                        121, Clear Water Bay Road
                    </Text>
                    <Text></Text>
                    <Text>
                            Clear Water Bay, Kowloon
                    </Text>
                    <Text></Text>
                    <Text>
                            HONG KONG
                    </Text>
                    <Text></Text>
                    <Text>
                            Tel: +852 1234 5678
                    </Text>
                    <Text></Text>
                    <Text>
                            Fax: +852 8765 4321
                    </Text>
                    <Text></Text>
                    <Text>
                            Email:confusion@food.net
                    </Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;