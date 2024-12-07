import * as Blockly from 'blockly'
// @ts-ignore
import { BlockDefinition } from 'blockly/core/blocks'
import { allTypesForCheck } from '../type-check/all-types'

export const calciumListName = 'calcium_list'
export const calciumListMutatorName = 'calcium_list_mutator'
export const calciumListItemName = 'calcium_list_item'
const calciumListContainerName = 'calcium_list_container'

export const calciumListMutatorMixin: any = {
  compose(containerBlock: Blockly.Block) {
    let itemBlock: any = containerBlock.getInputTargetBlock('ITEMS')
    const connections: any[] = []
    while (itemBlock && !itemBlock.isInsertionMarker()) {
      connections.push(itemBlock.valueConnection_)
      itemBlock =
        itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
    }
    for (let i = 0; i < this.itemCount_; ++i) {
      const connection = this.getInput('ITEM' + i).connection.targetConnection
      if (connection && connections.indexOf(connection) === -1) {
        connection.disconnect()
      }
    }
    this.itemCount_ = connections.length
    this.updateShape_()
    for (let i = 0; i < this.itemCount_; ++i) {
      connections[i]?.reconnect(this, 'ITEM' + i)
    }
  },
  decompose(workspace: Blockly.Workspace): Blockly.Block {
    const containerBlock = workspace.newBlock(
      calciumListContainerName
    ) as Blockly.BlockSvg
    containerBlock.initSvg()
    let connection = containerBlock.getInput('ITEMS')?.connection
    for (let i = 0; i < this.itemCount_; ++i) {
      const itemBlock = workspace.newBlock(
        calciumListItemName
      ) as Blockly.BlockSvg
      itemBlock.initSvg()
      connection?.connect(itemBlock.previousConnection)
      connection = itemBlock.nextConnection
    }
    return containerBlock
  },
  saveExtraState() {
    return {
      itemCount: this.itemCount_,
    }
  },
  loadExtraState(state: any) {
    this.itemCount_ = state.itemCount
    this.updateShape_()
  },
  updateShape_() {
    if (this.getInput(']')) {
      this.removeInput(']')
    }
    let i = 0
    for (; i < this.itemCount_; ++i) {
      if (!this.getInput('ITEM' + i)) {
        const input = this.appendValueInput('ITEM' + i)
        input.init()
        input.setCheck(allTypesForCheck)
        if (i !== 0) {
          input.appendField(',')
        }
      }
    }
    this.appendDummyInput(']').appendField(']')
    while (this.getInput('ITEM' + i)) {
      this.removeInput('ITEM' + i)
      ++i
    }
  },
  saveConnections(containerBlock: Blockly.Block) {
    let itemBlock: any = containerBlock.getInputTargetBlock('ITEMS')
    let i = 0
    while (itemBlock) {
      const input = this.getInput('ITEM' + i)
      itemBlock.valueConnection_ = input && input.connection.targetConnection
      ++i
      itemBlock =
        itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
    }
  },
}

export const calciumListItemBlocks: BlockDefinition[] = [
  {
    type: calciumListItemName,
    message0: 'リストの要素',
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: 'リストの要素を追加します。',
    helpUrl: '',
  },
  {
    type: calciumListContainerName,
    message0: '%1',
    args0: [
      {
        type: 'input_statement',
        name: 'ITEMS',
      },
    ],
    colour: 120,
    tooltip: '',
    helpUrl: '',
  },
]

export const calciumListBlock: { [key: string]: BlockDefinition } = {
  [calciumListName]: {
    init() {
      this.jsonInit({
        type: calciumListName,
        message0: '[',
        output: 'Array',
        colour: 120,
        tooltip: 'リストを作ります。',
        helpUrl: '',
        mutator: calciumListMutatorName,
      })
      this.itemCount_ = 0
      this.setInputsInline(true)
      this.updateShape_()
    },
  },
}
