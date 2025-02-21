import * as Blockly from 'blockly'

export function parseToolboxFromJson(
  json: any
): Blockly.utils.toolbox.ToolboxDefinition {
  const blocks: Blockly.utils.toolbox.ToolboxItemInfo[] = []
  for (const category of json) {
    const categoryName = Object.keys(category)[0]
    blocks.push({
      kind: 'category',
      name: categoryName,
      contents: category[categoryName].map((block: any) => ({
        kind: 'block',
        type: block.name,
      })),
    })
  }
  return {
    kind: 'categoryToolbox',
    contents: blocks,
  }
}
