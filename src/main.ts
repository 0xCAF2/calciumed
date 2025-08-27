// Detect the user's preferred language
const userLanguage =
  navigator.language || (navigator.languages && navigator.languages[0])

// TODO: remove here ====
const codeArea = document.createElement("textarea")
codeArea.style.width = "100%"
codeArea.style.height = "160px"
codeArea.style.marginTop = "24px"
codeArea.style.fontFamily = "Courier New"
// TODO: remove here ====

if (codeArea instanceof HTMLElement) {
  if (userLanguage === "ja-JP" || userLanguage === "ja") {
    const ja = await import("./lang/ja-jp")
    const workspace = await ja.buildCalciumEditor(
      document.body,
      "calc(100% - 160px)"
    )
    document.body.appendChild(codeArea)

    const generator = await import("./generator")
    workspace.addChangeListener(() => {
      codeArea.value = generator.calciumGenerator.workspaceToCode(workspace)
    })
  } else {
    await import("./lang/en-us")
  }
}
