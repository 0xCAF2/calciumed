// Detect the user's preferred language
const userLanguage =
  navigator.language || (navigator.languages && navigator.languages[0])

const IS_DEBUG = false

if (!IS_DEBUG) {
  const worker = new Worker("worker.js")
  worker.onmessage = (event) => {
    const message = event.data
    if (message.loaded) {
      runButton.disabled = false
    } else if (message.output || message.output === "") {
      outputArea.value += message.output
      outputArea.value += "\n"
    } else if (message.error) {
      outputArea.value += message.error.toString()
      outputArea.value = `${
        message.line
      } 行目でエラーが発生しました： ${message.error.toString()}`
    } else if (message.input || message.input === "") {
      const input = window.prompt(message.input)
      worker.postMessage({ input: input ?? "" })
    }
  }

  var runButton = document.createElement("button")
  runButton.textContent = "Run"
  runButton.style.height = "40px"
  runButton.style.padding = "8px 16px"
  runButton.disabled = true
  document.body.appendChild(runButton)
  runButton.onclick = async () => {
    worker.postMessage({ code: codeArea.value })
  }
}

var codeArea = document.createElement("textarea")
codeArea.style.width = "50%"
codeArea.style.height = "160px"
codeArea.style.fontFamily = "Courier New"

var outputArea = document.createElement("textarea")
outputArea.style.width = "50%"
outputArea.style.height = "160px"
outputArea.style.fontFamily = "Courier New"
outputArea.style.backgroundColor = "#000000"
outputArea.style.color = "#ffffff"
outputArea.style.marginLeft = "8px"
outputArea.readOnly = true

if (userLanguage === "ja-JP" || userLanguage === "ja") {
  await import("./lang/ps-jp")
  await import("./block/pseudo")
  const ja = await import("./lang/ja-jp")
  const workspace = await ja.buildCalciumEditor(
    document.body,
    "calc(100% - 200px)"
  )
  const div = document.createElement("div")
  div.style.display = "flex"
  div.style.flexDirection = "row"
  div.style.alignItems = "flex-start"
  div.style.marginTop = "8px"
  document.body.appendChild(div)
  div.appendChild(codeArea)
  div.appendChild(outputArea)

  const generator = await import("./generator")
  await import("./generator/pseudo")
  workspace.addChangeListener(() => {
    codeArea.value = generator.calciumGenerator.workspaceToCode(workspace)
  })
} else {
  await import("./lang/en-us")
}
