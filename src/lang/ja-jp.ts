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
import { calciumNumberBlock, pseudoNumberBlock } from '../block/ja-jp/number'
import {
  calciumListBlock,
  calciumListItemBlocks,
  calciumListItemName,
  calciumListMutatorMixin,
  calciumListMutatorName,
} from '../block/ja-jp/list'

const toolbox: Blockly.utils.toolbox.ToolboxDefinition = {
  kind: 'categoryToolbox',
  contents: [...jaToolbox.categories, ...pythonToolbox.categories],
}

export function buildCalciumEditor(parent: HTMLElement) {
  ;[
    calciumListItemBlocks,
    pseudoAssignArrayItemBlocks,
    [pseudoForDecrement, pseudoForIncrement],
    pseudoIfChildBlocks,
    pseudoPrintArgBlocks,
    [pseudoWhile],
  ].forEach((blocks) => {
    Blockly.defineBlocksWithJsonArray(blocks)
  })
  ;[
    calciumListBlock,
    calciumNumberBlock,
    pseudoAssignArrayBlock,
    pseudoIf,
    pseudoNumberBlock,
    pseudoPrint,
  ].forEach((block) => {
    Blockly.common.defineBlocks(block)
  })

  Blockly.Extensions.registerMutator(
    calciumListMutatorName,
    calciumListMutatorMixin,
    undefined,
    [calciumListItemName]
  )

  Blockly.Extensions.registerMutator(
    pseudoAssignArrayMutatorName,
    pseudoAssignArrayMixin,
    undefined,
    [pseudoAssignArrayItemName]
  )

  Blockly.Extensions.registerMutator(
    pseudoIfMutatorName,
    pseudoIfMutatorMixin,
    undefined,
    [pseudoIfElseIfName, pseudoIfElseName]
  )

  Blockly.Extensions.registerMutator(
    pseudoPrintMutatorName,
    pseudoPrintMutatorMixin,
    undefined,
    [pseudoPrintArgName]
  )

  // renderer
  Blockly.blockRendering.register(calciumRendererName, CalciumRenderer)

  buildEditor({ parent, options: { renderer: calciumRendererName, toolbox } })
}
