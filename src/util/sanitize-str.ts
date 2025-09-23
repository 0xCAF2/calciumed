export function sanitizeStr(s: string): string {
  // sanitize value: remove unescaped double quotes, keep escaped ones like \"
  let out = ""
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (ch === '"') {
      // count preceding consecutive backslashes
      let j = i - 1
      let bs = 0
      while (j >= 0 && s[j] === "\\") {
        bs++
        j--
      }
      // if odd number of backslashes, the quote is escaped -> keep it
      if (bs % 2 === 1) {
        out += '"'
      } else {
        // skip unescaped quote
      }
    } else {
      out += ch
    }
  }
  return out
}
