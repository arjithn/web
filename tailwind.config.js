const colors = require('./design/colors')

module.exports = {
    purge: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: '544px',
            md: '768px',
            lg: '1012px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: { primary: colors.storm, secondary: colors.orange },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
