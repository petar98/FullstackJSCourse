import React from 'react';

export const themes = {
    light: {
        name: 'Light Theme',
        foreground: '#000000',
        background: '#eeeeee'
    },
    dark: {
        name: 'Dark Theme',
        foreground: '#ffffff',
        background: '#222222'
    }
};

export const ThemeContext = React.createContext(themes.light);
ThemeContext.displayName = 'ThemeContext';