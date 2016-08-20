
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { replaceRoute } from '../../actions/route';

import { Container, Header, Title, Content, View, Text, Button, Icon, InputGroup, Input } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

import { Alert, TextInput } from 'react-native';


import myTheme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
        console.log('constructed');

        this.rows = [
            { text: 'with RN Navigator' },
            { text: 'NB Easy Grid' },
            { text: 'NativeBase' },
            { text: 'CodePush' },
            { text: 'Redux' }
        ]
    }

    replaceRoute(route) {
        Alert.alert(
            'Logout',
            'Do you want to log out?',
            [
                { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => this.props.replaceRoute(route) },
            ]
        )
    }

    submit() {
        Alert.alert(
            'Confirm',
            `This is what you typed:\n ${this.state.text}`
        )
    }

    render() {
        const items = this.rows.map((row, i) => {
            return (
                <Row key={i}>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            {row.text}
                        </Text>
                    </View>
                </Row>
            )
        });
        return (
            <Container theme={myTheme} style={styles.container}>
                <Header>
                    <Button transparent onPress={() => this.replaceRoute('login') }>
                        <Icon name='ios-power' />
                    </Button>

                    <Title>Home</Title>

                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name='ios-menu' />
                    </Button>
                </Header>

                <Content>

                    <Grid style={{ marginTop: 20 }}>
                        <Row>
                            <View style={styles.row}>
                                <Text style={styles.text}>
                                    React Native starter kit
                                </Text>
                            </View>
                        </Row>
                        {items}
                        <Row>
                            <InputGroup style={styles.input}>
                                <Input
                                    onChangeText={(text) => this.setState({ text }) }
                                    placeholder='Some Text Placeholder'
                                    value={this.state.text}
                                    />
                            </InputGroup>
                        </Row>
                        <Row>
                            <TextInput
                                style={{ height: 40, flex: 1, borderColor: 'green', borderWidth: 1 }}
                                onChangeText={(text) => this.setState({ text }) }
                                placeholder='Some Text Placeholder'
                                value={this.state.text}
                                />
                        </Row>
                        <Row>
                            <View>
                                <Button style={styles.btn} onPress={() => this.submit() }>
                                    Submit
                                </Button>
                            </View>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        replaceRoute: (route) => dispatch(replaceRoute(route))
    }
}

export default connect(null, bindAction)(Home);
