// This file contains constants used throughout the application.
// It includes the default theme, the default language, and the default locale.
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const StyleItem = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: '9px',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027'
    }),
    transition: theme.transitions.create('box-shadow'),
    '&:hover': {
        boxShadow: theme.shadows[18],
    },
}));

export function Item(props) {
    return (
        <StyleItem elevation={8} {...props} >
            {props.children}
        </StyleItem>
    );
}

export function ImageItem(props) {
    return (
        <ImageStyleItem elevation={14} {...props}>
            {props.children}
        </ImageStyleItem>
    );
}

const ImageStyleItem = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    borderRadius: '9px',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
    transition: theme.transitions.create('box-shadow'),
    '&:hover': {
        boxShadow: theme.shadows[24],
    },
}));