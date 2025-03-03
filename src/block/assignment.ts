import * as Blockly from 'blockly'
// @ts-ignore
import { BlockDefinition } from 'blockly/core/blocks'
import { allTypesForCheck } from '../block/type-check/all-types'
import { tooltipManager } from '../constant-manager'

export const CALCIUM_ASSIGNMENT_NAME = 'calcium_assignment'

const calciumAssignmentBlock: { [key: string]: BlockDefinition } = {
  [CALCIUM_ASSIGNMENT_NAME]: {
    init() {
      this.jsonInit({
        type: CALCIUM_ASSIGNMENT_NAME,
        message0: '%1 = %2',
        args0: [
          {
            type: 'input_value',
            name: 'REF',
            check: [
              'calcium_variable',
              'calcium_attribute',
              'calcium_subscription',
              'calcium_comma',
            ],
          },
          {
            type: 'input_value',
            name: 'VALUE',
            check: allTypesForCheck,
          },
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: 210,
        tooltip: tooltipManager.getValue('CALCIUM_ASSIGNMENT_TOOLTIP'),
        helpUrl: '',
      })
    },
  },
}

Blockly.common.defineBlocks(calciumAssignmentBlock)
