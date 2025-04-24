module.exports = {
  plugins: [
    require('tailwindcss'),
    
    require('autoprefixer'),
    
    require('@fullhuman/postcss-purgecss')({
      content: ['./pages/**/*.js', './components/**/*.js'], 
      safelist: [], // Add any CSS classes you want to preserve here
    }),
    
    require('cssnano')({ preset: 'default' }),
  ],
};
