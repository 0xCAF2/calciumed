// Detect the user's preferred language
const userLanguage =
  navigator.language || (navigator.languages && navigator.languages[0])

if (userLanguage === 'ja-JP') {
  const ja = await import('./lang/ja-jp')
  ja.buildCalciumEditor(document.body)
} else {
  await import('./lang/en-us')
}
