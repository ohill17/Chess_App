import React from 'react';
import { Container, Typography } from '@mui/material';
import Game from './components/Game';

export default function App() {

    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Chess App
            </Typography>
            <Game />
        </Container>
    )

}

