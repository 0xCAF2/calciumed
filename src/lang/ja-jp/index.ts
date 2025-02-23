import * as Blockly from 'blockly'
import { buildEditor } from '../../editor'
import {
  pseudoIfBlock as pseudoIf,
  pseudoIfChildBlocks,
  pseudoIfMutatorName,
  pseudoIfMutatorMixin,
  pseudoIfElseIfName,
  pseudoIfElseName,
} from '../../block/pseudo/if'
import { pseudoForIncrement, pseudoForDecrement } from '../../block/pseudo/for'
import { pseudoWhile } from '../../block/pseudo/while'
import {
  pseudoPrintArgBlocks,
  pseudoPrintArgName,
  pseudoPrintBlock as pseudoPrint,
  pseudoPrintMutatorMixin,
  pseudoPrintMutatorName,
} from '../../block/pseudo/print'
import {
  CalciumRenderer,
  calciumRendererName,
} from '../../editor/calcium-renderer'
import {
  pseudoAssignArrayBlock,
  pseudoAssignArrayItemBlocks,
  pseudoAssignArrayItemName,
  pseudoAssignArrayMixin,
  pseudoAssignArrayMutatorName,
} from '../../block/pseudo/array'
import { pseudoNumberBlock } from '../../block/pseudo/number'
import {
  createCalciumListBlock,
  createCalciumListItemBlocks,
  calciumListItemName,
  calciumListMutatorMixin,
  calciumListMutatorName,
} from '../../block/list'
import { CALCIUM_DEF_PARAM_MESSAGE, CALCIUM_LIST_ITEM_MESSAGE } from './message'
import {
  CALCIUM_ASSIGNMENT_TOOLTIP,
  CALCIUM_DEF_METHOD_TOOLTIP,
  CALCIUM_DEF_PARAM_TOOLTIP,
  CALCIUM_DEF_TOOLTIP,
  CALCIUM_LIST_ITEM_TOOLTIP,
  CALCIUM_LIST_TOOLTIP,
} from './tooltip'
import {
  calciumDefMethodMutatorMixin,
  calciumDefMethodMutatorName,
  calciumDefMutatorMixin,
  calciumDefMutatorName,
  calciumDefParamName,
  createCalciumDefBlock,
  createCalciumDefMethodBlock,
  createCalciumDefParamBlocks,
} from '../../block/python/def'
import { createCalciumCompoundAssignmentBlock } from '../../block/assignment'
import { calciumNumberBlock } from '../../block/python/number'

import '../../block/assignment'

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
    createCalciumCompoundAssignmentBlock({
      tooltip: CALCIUM_ASSIGNMENT_TOOLTIP,
    }),
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

  buildEditor({
    parent,
    options: {
      renderer: calciumRendererName,
      toolboxUrl: 'toolbox_ja-jp.json',
    },
  })
}
