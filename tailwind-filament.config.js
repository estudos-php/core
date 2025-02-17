const colors = require("tailwindcss/colors");
module.exports = {
    darkMode: 'class',
    content: [
        './resources/views/**/*.blade.php',
        '../wind/resources/views/filament/**/*.blade.php',
        '../sky/resources/views/filament/**/*.blade.php',
        '../sky/src/Models/PostStatus.php',
        '../bolt/resources/views/filament/**/*.blade.php',
        '../bolt/src/filament/**/*.php',
        '../thunder/resources/views/**/*.blade.php',
        '../thunder/src/Models/TicketsStatus.php',
        './vendor/filament/**/*.blade.php',
    ],
    theme: {
        extend: {
            colors: {
                gray: colors.stone,
                primary: colors.emerald,
                green: colors.green,
                secondary: colors.yellow,
                danger: colors.rose,
                success: colors.green,
                warning: colors.yellow,
                info: colors.blue,
                emerald: {
                    50: "#d1fae5",
                    100: "#a7f3d0",
                    200: "#6ee7b7",
                    300: "#34d399",
                    400: "#10b981",
                    600: "#059669",
                    500: "#059669",
                    700: "#047857",
                    800: "#065f46",
                    900: "#064e3b",
                },
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('tailwindcss-debug-screens'),
    ],
};
