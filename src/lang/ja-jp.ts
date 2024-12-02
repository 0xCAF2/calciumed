import * as Blockly from 'blockly'
import { buildEditor } from '../editor/blockly-editor'
import * as jaToolbox from '../toolbox/ja-jp'
import * as pythonToolbox from '../toolbox/python'
import {
  pseudoIfBlock as pseudoIf,
  pseudoIfChildBlocks,
  pseudoIfMutatorName,
  pseudoIfMutatorMixin,
  pseudoIfElseIfName,
  pseudoIfElseName,
} from '../block/ja-jp/if'
import { pseudoForIncrement, pseudoForDecrement } from '../block/ja-jp/for'
import { pseudoWhile } from '../block/ja-jp/while'
import {
  pseudoPrintArgBlocks,
  pseudoPrintArgName,
  pseudoPrintBlock as pseudoPrint,
  pseudoPrintMutatorMixin,
  pseudoPrintMutatorName,
} from '../block/ja-jp/print'
import {
  CalciumRenderer,
  calciumRendererName,
} from '../block/renderer/renderer'
import {
  pseudoAssignArrayBlock,
  pseudoAssignArrayItemBlocks,
  pseudoAssignArrayItemName,
  pseudoAssignArrayMixin,
  pseudoAssignArrayMutatorName,
} from '../block/ja-jp/array'

const toolbox: Blockly.utils.toolbox.ToolboxDefinition = {
  kind: 'categoryToolbox',
  contents: [...jaToolbox.categories, ...pythonToolbox.categories],
}

export function buildCalciumEditor(parent: HTMLElement) {
  // array blocks
  Blockly.defineBlocksWithJsonArray(pseudoAssignArrayItemBlocks)
  Blockly.Extensions.registerMutator(
    pseudoAssignArrayMutatorName,
    pseudoAssignArrayMixin,
    undefined,
    [pseudoAssignArrayItemName]
  )
  Blockly.common.defineBlocks(pseudoAssignArrayBlock)

  // for blocks
  Blockly.defineBlocksWithJsonArray([pseudoForIncrement, pseudoForDecrement])

  // if blocks
  Blockly.defineBlocksWithJsonArray(pseudoIfChildBlocks)
  Blockly.Extensions.registerMutator(
    pseudoIfMutatorName,
    pseudoIfMutatorMixin,
    undefined,
    [pseudoIfElseIfName, pseudoIfElseName]
  )
  Blockly.common.defineBlocks(pseudoIf)

  // print block
  Blockly.defineBlocksWithJsonArray(pseudoPrintArgBlocks)
  Blockly.Extensions.registerMutator(
    pseudoPrintMutatorName,
    pseudoPrintMutatorMixin,
    undefined,
    [pseudoPrintArgName]
  )
  Blockly.common.defineBlocks(pseudoPrint)

  // while blocks
  Blockly.defineBlocksWithJsonArray([pseudoWhile])

  Blockly.blockRendering.register(calciumRendererName, CalciumRenderer)

  buildEditor({ parent, options: { renderer: calciumRendererName, toolbox } })
}
