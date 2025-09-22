import * as Blockly from 'blockly'
// @ts-ignore
import { BlockDefinition } from 'blockly/core/blocks'
import { tooltipManager } from '../../constant-manager'

const PSEUDO_STR_NAME = 'pseudo_str'

const pseudoStr: BlockDefinition = {
  type: PSEUDO_STR_NAME,
  message0: '"%1"',
  args0: [
    {
      type: 'field_input',
      name: 'STR',
      text: '文字列',
    },
  ],
  inputsInline: true,
  output: 'String',
  colour: 210,
  tooltip: tooltipManager.getValue('PSEUDO_STR_TOOLTIP'),
  helpUrl: '',
}

Blockly.defineBlocksWithJsonArray([pseudoStr])
