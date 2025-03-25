import * as Blockly from 'blockly'
// @ts-ignore
import { BlockDefinition } from 'blockly/core/blocks'
import { allTypesForCheck } from '../type-check/all-types'

const PSEUDO_ARRAY_ASSIGNMENT_NAME = 'pseudo_array_assignment'
const PSEUDO_ARRAY_ASSIGNMENT_MUTATOR_NAME = 'pseudo_array_assignment_mutator'
const PSEUDO_ARRAY_ASSIGNMENT_ITEM_NAME = 'pseudo_array_assignment_item'
const PSEUDO_ARRAY_ASSIGNMENT_ITEM_CONTAINER_NAME =
  'pseudo_array_assignment_item_container'

const pseudoAssignArrayMixin: any = {
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
  decompose(workspace: Blockly.Workspace): Blockly.Block {
    let containerBlock = workspace.newBlock(
      PSEUDO_ARRAY_ASSIGNMENT_ITEM_CONTAINER_NAME
    ) as Blockly.BlockSvg
    containerBlock.initSvg()
    let connection = containerBlock.getInput('ITEMS')?.connection
    for (let i = 0; i < this.itemCount_; ++i) {
      const itemBlock = workspace.newBlock(
        PSEUDO_ARRAY_ASSIGNMENT_ITEM_NAME
      ) as Blockly.BlockSvg
      itemBlock.initSvg()
      connection?.connect(itemBlock.previousConnection)
      connection = itemBlock.nextConnection
    }
    return containerBlock
  },
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

Blockly.Extensions.registerMutator(
  PSEUDO_ARRAY_ASSIGNMENT_MUTATOR_NAME,
  pseudoAssignArrayMixin,
  undefined,
  [PSEUDO_ARRAY_ASSIGNMENT_ITEM_NAME]
)

const pseudoAssignArrayItemBlocks: { [key: string]: BlockDefinition }[] = [
  {
    type: PSEUDO_ARRAY_ASSIGNMENT_ITEM_CONTAINER_NAME,
    message0: '%1',
    args0: [
      {
        type: 'input_statement',
        name: 'ITEMS',
      },
    ],
    colour: 210,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: PSEUDO_ARRAY_ASSIGNMENT_ITEM_NAME,
    message0: '要素を追加',
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 210,
    tooltip: '要素を追加して、配列の大きさを変えます。',
    helpUrl: '',
  },
]

Blockly.defineBlocksWithJsonArray(pseudoAssignArrayItemBlocks)

const pseudoAssignArrayBlock: { [key: string]: BlockDefinition } = {
  [PSEUDO_ARRAY_ASSIGNMENT_NAME]: {
    init() {
      this.jsonInit({
        type: PSEUDO_ARRAY_ASSIGNMENT_NAME,
        message0: '%1 = [',
        args0: [
          {
            type: 'input_value',
            name: 'VAR',
            check: ['calcium_variable'],
          },
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: 210,
        tooltip: '配列を作成します。',
        helpUrl: '',
        mutator: PSEUDO_ARRAY_ASSIGNMENT_MUTATOR_NAME,
      })
      this.itemCount_ = 5
      this.updateShape_()
    },
  },
}

Blockly.common.defineBlocks(pseudoAssignArrayBlock)
