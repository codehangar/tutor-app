
'use strict';

var React = require('react-native');

var { StyleSheet } = React;

import myTheme from '../../themes/base-theme';

module.exports = StyleSheet.create({
    container: {
        // position: 'absolute',
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0,
        backgroundColor: myTheme.backgroundColor
    },
    row: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        // color: '#fff',
        marginBottom: 15,
        alignItems: 'center'
    },
    input: {
        marginBottom: 20
    },
    btn: {
        marginTop: 20,
        alignSelf: 'center'
    }
});
