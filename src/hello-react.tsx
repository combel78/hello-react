import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Typography, CssBaseline } from '@material-ui/core';

const useStyles = makeStyles(() =>
    createStyles({
    root: {
        maxWidth: 500,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#e6e2d3',
        textAlign: 'center',
    }
})
);

const HelloReact = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h2">
                Hello React!
            </Typography>
        </div>
    );
}

ReactDOM.render(
    <React.Fragment>
        <CssBaseline />
        <HelloReact />
    </React.Fragment>,
    document.querySelector('#root')
);