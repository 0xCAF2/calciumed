import * as Blockly from 'blockly'
import { buildEditor } from '../editor/blockly-editor'
import * as jaToolbox from '../toolbox/ja-jp'
import * as pythonToolbox from '../toolbox/python'
import {
  pseudoIfBlock,
  pseudoIfChildBlocks,
  pseudoIfMutatorName,
  pseudoIfMutatorMixin,
  pseudoIfElseIfName,
  pseudoIfElseName,
} from '../block/ja-jp/if'

const toolbox: Blockly.utils.toolbox.ToolboxDefinition = {
  kind: 'categoryToolbox',
  contents: [...jaToolbox.categories, ...pythonToolbox.categories],
}

export function buildCalciumEditor(parent: HTMLElement) {
  // if blocks
  Blockly.defineBlocksWithJsonArray(pseudoIfChildBlocks)
  Blockly.Extensions.registerMutator(
    pseudoIfMutatorName,
    pseudoIfMutatorMixin,
    undefined,
    [pseudoIfElseIfName, pseudoIfElseName]
  )
  Blockly.common.defineBlocks(pseudoIfBlock)

  buildEditor({ parent, options: { toolbox } })
}
