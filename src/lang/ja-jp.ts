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
import { CalciumRenderer, calciumRendererName } from '../renderer/renderer'
import {
  pseudoAssignArrayBlock,
  pseudoAssignArrayItemBlocks,
  pseudoAssignArrayItemName,
  pseudoAssignArrayMixin,
  pseudoAssignArrayMutatorName,
} from '../block/ja-jp/array'
import { calciumNumberBlock, pseudoNumberBlock } from '../block/ja-jp/number'
import {
  createCalciumListBlock,
  createCalciumListItemBlocks,
  calciumListItemName,
  calciumListMutatorMixin,
  calciumListMutatorName,
} from '../block/ja-jp/list'
import {
  CALCIUM_DEF_PARAM_MESSAGE,
  CALCIUM_LIST_ITEM_MESSAGE,
} from '../block/ja-jp/constant/messages'
import {
  CALCIUM_DEF_METHOD_TOOLTIP,
  CALCIUM_DEF_PARAM_TOOLTIP,
  CALCIUM_DEF_TOOLTIP,
  CALCIUM_LIST_ITEM_TOOLTIP,
  CALCIUM_LIST_TOOLTIP,
} from '../block/ja-jp/constant/tooltips'
import {
  calciumDefMethodMutatorMixin,
  calciumDefMethodMutatorName,
  calciumDefMutatorMixin,
  calciumDefMutatorName,
  calciumDefParamName,
  createCalciumDefBlock,
  createCalciumDefMethodBlock,
  createCalciumDefParamBlocks,
} from '../block/python/def'

const toolbox: Blockly.utils.toolbox.ToolboxDefinition = {
  kind: 'categoryToolbox',
  contents: [...jaToolbox.categories, ...pythonToolbox.categories],
}

export function buildCalciumEditor(parent: HTMLElement) {
  ;[
    createCalciumDefParamBlocks({
      calciumDefParamMessage: CALCIUM_DEF_PARAM_MESSAGE,
      calciumDefParamTooltip: CALCIUM_DEF_PARAM_TOOLTIP,
    }),
    createCalciumListItemBlocks({
      calciumListItemMessage: CALCIUM_LIST_ITEM_MESSAGE,
      calciumListItemTooltip: CALCIUM_LIST_ITEM_TOOLTIP,
    }),
    pseudoAssignArrayItemBlocks,
    [pseudoForDecrement, pseudoForIncrement],
    pseudoIfChildBlocks,
    pseudoPrintArgBlocks,
    [pseudoWhile],
  ].forEach((blocks) => {
    Blockly.defineBlocksWithJsonArray(blocks)
  })
  ;[
    createCalciumDefBlock({ tooltip: CALCIUM_DEF_TOOLTIP }),
    createCalciumDefMethodBlock({ tooltip: CALCIUM_DEF_METHOD_TOOLTIP }),
    createCalciumListBlock({ tooltip: CALCIUM_LIST_TOOLTIP }),
    calciumNumberBlock,
    pseudoAssignArrayBlock,
    pseudoIf,
    pseudoNumberBlock,
    pseudoPrint,
  ].forEach((block) => {
    Blockly.common.defineBlocks(block)
  })

  Blockly.Extensions.registerMutator(
    calciumDefMutatorName,
    calciumDefMutatorMixin,
    undefined,
    [calciumDefParamName]
  )

  Blockly.Extensions.registerMutator(
    calciumDefMethodMutatorName,
    calciumDefMethodMutatorMixin,
    undefined,
    [calciumDefParamName]
  )

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
