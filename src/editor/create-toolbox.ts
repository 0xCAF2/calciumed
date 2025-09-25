import * as Blockly from "blockly"
import { pythonCategories } from "./python-categories"

export function createToolbox(
  categories: CategoryDefinition[]
): Blockly.utils.toolbox.ToolboxDefinition {
  const blocks: Blockly.utils.toolbox.ToolboxItemInfo[] = []
  for (const category of categories) {
    const categoryName = Object.keys(category)[0]
    blocks.push({
      kind: "category",
      name: categoryName,
      contents: category[categoryName].map((blockName: BlockType) => ({
        kind: "block",
        type: blockName,
      })),
    })
  }
  return {
    kind: "categoryToolbox",
    contents: blocks.concat(pythonCategories),
  }
}

type BlockType = string

type CategoryDefinition = {
  [key: string]: BlockType[]
}
