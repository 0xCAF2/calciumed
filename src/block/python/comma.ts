import * as Blockly from 'blockly'
// @ts-ignore
import { BlockDefinition } from 'blockly/core/blocks'
import { tooltipManager } from '../../constant-manager'

import { allTypesForCheck } from '../type-check/all-types'

const CALCIUM_COMMA_NAME = 'calcium_comma'

const calciumComma: BlockDefinition = {
  type: CALCIUM_COMMA_NAME,
  message0: '%1, %2',
  args0: [
    {
      type: 'input_value',
      name: 'FIRST',
      check: allTypesForCheck,
    },
    {
      type: 'input_value',
      name: 'SECOND',
      check: allTypesForCheck,
    },
  ],
  output: 'calcium_comma',
  inputsInline: true,
  colour: 120,
  tooltip: tooltipManager.getValue('CALCIUM_COMMA_TOOLTIP'),
  helpUrl: '',
}

Blockly.defineBlocksWithJsonArray([calciumComma])