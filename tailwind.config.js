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
    colors: {
      'cream': '#FCF6F6',
      'black': '#050F08',
      'grey': '#D5D8D6',
      'blue': '#0060D6',
      'ocre': '#852E25',
      'purple': '#534B9C'
    },
    extend: {
      fontFamily: {
        display: ['Syne Mono', 'ui-sans-serif'],
        body: ['Satoshi', 'ui-sans-serif'],
      },
      blur: {
        xs: '2px',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  safelist: [
    'blur-xs'
  ]
}
