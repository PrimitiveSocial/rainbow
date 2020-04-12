module.exports = {
    theme: {
        // Customize top, left, bottom and right @example: top-1 right-2
        inset: {
            '0': 0,
            '1': '.5rem',
            '2': '1rem',
            '3': '1.5rem',
            '4': '2rem',
            'auto': 'auto',
            '-2': '-1rem', // usage: -top-2 or -right-2
            '-4': '-2rem',
            '-8' : '-3rem',
        },

        // Customize max-width @example: max-w-1/4
        maxWidth: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
        },

        // Customize max-height @example: min-h-1/4
        minHeight: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
        },

        // Customize font families
        fontFamily: {
            'roboto': ['Roboto', 'sans-serif'],
            'lato': ['Lato', 'sans-serif'],
        },
    },
    variants: {},
    plugins: []
};
