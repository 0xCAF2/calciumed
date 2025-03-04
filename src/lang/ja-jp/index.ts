import * as Blockly from 'blockly'
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
  pseudoPrintBlock as pseudoPrint,
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
import {
  calciumListItemName,
  calciumListMutatorMixin,
  calciumListMutatorName,
} from '../../block/list'
import { calciumNumberBlock } from '../../block/python/number'

import '../../block/assignment'
import '../../block/compound-assignment'

import '../../block/pseudo/number'
import '../../block/pseudo/print'

import * as Lang from 'blockly/msg/ja'

// @ts-ignore
Blockly.setLocale(Lang)

import './message'
import './tooltip'
import { buildEditor } from '../../editor'

export function buildCalciumEditor(parent: HTMLElement) {
  ;[
    pseudoAssignArrayItemBlocks,
    [pseudoForDecrement, pseudoForIncrement],
    pseudoIfChildBlocks,
    pseudoPrintArgBlocks,
    [pseudoWhile],
  ].forEach((blocks) => {
    Blockly.defineBlocksWithJsonArray(blocks)
  })
  ;[calciumNumberBlock, pseudoAssignArrayBlock, pseudoIf, pseudoPrint].forEach(
    (block) => {
      Blockly.common.defineBlocks(block)
    }
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
