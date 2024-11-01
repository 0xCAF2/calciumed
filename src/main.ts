// Detect the user's preferred language
const userLanguage =
  navigator.language || (navigator.languages && navigator.languages[0])

if (userLanguage === 'ja-JP') {
  await import('./lang/ja-jp')
} else {
  await import('./lang/en-us')
}
