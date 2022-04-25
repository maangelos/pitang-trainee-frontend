import { ColorSchemeProvider } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MantineProvider>
        <ColorSchemeProvider>
            <Router />
        </ColorSchemeProvider>
    </MantineProvider>
);

