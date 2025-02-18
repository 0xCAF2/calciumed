import * as Blockly from 'blockly'
// @ts-ignore
import { BlockDefinition } from 'blockly/core/blocks'
import { allTypesForCheck } from '../type-check/all-types'

export const pseudoPrintName = 'pseudo_print'
export const pseudoPrintArgName = 'pseudo_print_arg'
export const pseudoPrintMutatorName = 'pseudo_print_mutator'
const pseudoPrintArgsContainerName = 'pseudo_print_args_container'

export const pseudoPrintMutatorMixin: any = {
  compose(containerBlock: Blockly.Block) {
    let itemBlock: any = containerBlock.getInputTargetBlock('ARGS')
    const connections: any[] = []
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_)
      itemBlock =
        itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
    }
    for (let i = 0; i < this.countOfArguments; ++i) {
      const connection = this.getInput('ARG' + i).connection.targetConnection
      if (connection && connections.indexOf(connection) === -1) {
        connection.disconnect()
      }
    }
    this.countOfArguments = connections.length
    this.updateShape()
    for (let i = 0; i < this.countOfArguments; ++i) {
      connections[i]?.reconnect(this, 'ARG' + i)
    }
  },
  decompose(workspace: Blockly.Workspace): Blockly.Block {
    const containerBlock = workspace.newBlock(
      pseudoPrintArgsContainerName
    ) as Blockly.BlockSvg
    containerBlock.initSvg()
    let connection = containerBlock.getInput('ARGS')?.connection
    for (let i = 0; i < this.countOfArguments; ++i) {
      const itemBlock = workspace.newBlock(
        pseudoPrintArgName
      ) as Blockly.BlockSvg
      itemBlock.initSvg()
      connection?.connect(itemBlock.previousConnection)
      connection = itemBlock.nextConnection
    }
    return containerBlock
  },
  saveExtraState() {
    return {
      countOfArguments: this.countOfArguments,
    }
  },
  loadExtraState(state: any) {
    this.countOfArguments = state.countOfArguments
    this.updateShape()
  },
  updateShape() {
    if (this.getInput(')')) {
      this.removeInput(')')
    }
    let i = 0
    for (; i < this.countOfArguments; ++i) {
      if (!this.getInput('ARG' + i)) {
        const input = this.appendValueInput('ARG' + i)
        input.init()
        input.setCheck(allTypesForCheck)
        if (i !== 0) {
          input.appendField(',')
        }
      }
    }
    this.appendDummyInput(')').appendField(')')
    while (this.getInput('ARG' + i)) {
      this.removeInput('ARG' + i)
      ++i
    }
  },
  saveConnections(containerBlock: Blockly.Block) {
    let itemBlock: any = containerBlock.getInputTargetBlock('ARGS')
    let i = 0
    while (itemBlock) {
      const input = this.getInput('ARG' + i)
      itemBlock.valueConnection_ = input && input.connection.targetConnection
      ++i
      itemBlock =
        itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
    }
  },
}

export const pseudoPrintArgBlocks: BlockDefinition[] = [
  {
    type: pseudoPrintArgName,
    message0: '引数を追加',
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 210,
    tooltip: '表示する引数を追加します。',
    helpUrl: '',
  },
  {
    type: pseudoPrintArgsContainerName,
    message0: '%1',
    args0: [
      {
        type: 'input_statement',
        name: 'ARGS',
      },
    ],
    colour: 210,
    tooltip: '',
    helpUrl: '',
  },
]

export const pseudoPrintBlock: { [key: string]: BlockDefinition } = {
  [pseudoPrintName]: {
    init() {
      this.jsonInit({
        type: pseudoPrintName,
        message0: '表示する (',
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: 210,
        tooltip: '指定した内容を表示します。',
        helpUrl: '',
        mutator: pseudoPrintMutatorName,
      })
      this.countOfArguments = 1
      this.updateShape()
    },
  },
}
