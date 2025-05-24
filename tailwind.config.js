/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: 'tw-',
    important: false,
    content: ['./*.html', './*.js', './css/**/*.css'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#1e22ce',
                secondary: '#080808',
                outlineColor: '#1F2123',
            },
            animation: {
                'reveal-up': 'revealUp 0.5s ease-out forwards',
                'fade-in': 'fadeIn 0.3s ease-out forwards',
                'scale-in': 'scaleIn 0.3s ease-out forwards',
                'lightbox-in':
                    'lightboxIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                'lightbox-out':
                    'lightboxOut 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
            },
            keyframes: {
                revealUp: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                lightboxIn: {
                    '0%': {
                        transform: 'scale(0.7) translateY(20px)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'scale(1) translateY(0)',
                        opacity: '1',
                    },
                },
                lightboxOut: {
                    '0%': { transform: 'scale(1) translateY(0)', opacity: '1' },
                    '100%': {
                        transform: 'scale(0.7) translateY(20px)',
                        opacity: '0',
                    },
                },
            },
        },
    },
    plugins: [],
};
