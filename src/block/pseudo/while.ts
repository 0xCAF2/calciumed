import * as Blockly from 'blockly'
// @ts-ignore
import { BlockDefinition } from 'blockly/core/blocks'

const PSEUDO_WHILE_NAME = 'pseudo_while'

const pseudoWhile: BlockDefinition = {
  type: PSEUDO_WHILE_NAME,
  message0: '%1 の間繰り返す: %2 %3',
  args0: [
    {
      type: 'input_value',
      name: 'CONDITION',
      check: ['Boolean'],
    },
    {
      type: 'input_dummy',
    },
    {
      type: 'input_statement',
      name: 'DO',
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 210,
  tooltip: '条件を満たす間、繰り返します。',
  helpUrl: '',
}

Blockly.defineBlocksWithJsonArray([pseudoWhile])
