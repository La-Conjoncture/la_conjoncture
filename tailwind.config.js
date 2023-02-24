module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    theme: {
      colors: {
        'cream': '#FCF6F6',
        'black': '#050F08',
        'grey': '#D5D8D6',
        'blue': '#0060D6'
      },
      extend: {
        fontFamily: {
          syne: ['Syne Mono', 'ui-sans-serif']
        },
      },
    },
  },
  plugins: []
}
