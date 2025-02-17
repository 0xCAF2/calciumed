import * as Blockly from 'blockly'
// @ts-ignore
import { BlockDefinition } from 'blockly/core/blocks'

export const pseudoIfName = 'pseudo_if'
export const pseudoIfContainerName = 'pseudo_if_container'
export const pseudoIfElseIfName = 'pseudo_if_else_if'
export const pseudoIfElseName = 'pseudo_if_else'

export const pseudoIfMutatorName = 'pseudo_if_mutator'

export const pseudoIfMutatorMixin: any = {
  saveExtraState(): any {
    return {
      elseIfCount: this.elseIfCount_,
      elseCount: this.elseCount_,
    }
  },
  loadExtraState(state: any) {
    this.elseIfCount_ = state.elseIfCount
    this.elseCount_ = state.elseCount
    this.rebuildShape_()
  },
  compose(containerBlock: Blockly.Block) {
    let clauseBlock: any = containerBlock.nextConnection?.targetBlock()
    this.elseIfCount_ = 0
    this.elseCount_ = 0
    const valueConnections: (Blockly.Block | null)[] = [null]
    const statementConnections: (Blockly.Block | null)[] = [null]
    let elseStatementConnection: any = null

    while (clauseBlock && !clauseBlock.isInsertionMarker()) {
      switch (clauseBlock.type) {
        case pseudoIfElseIfName:
          this.elseIfCount_++
          valueConnections.push(clauseBlock.valueConnection_)
          statementConnections.push(clauseBlock.statementConnection_)
          break
        case pseudoIfElseName:
          this.elseCount_++
          elseStatementConnection = clauseBlock.statementConnection_
          break
        default:
          throw Error('Unknown block type.' + clauseBlock.type)
      }
      clauseBlock =
        clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
    }
    this.updateShape_()
    this.reconnectChildBlocks_(
      valueConnections,
      statementConnections,
      elseStatementConnection
    )
  },
  decompose(workspace: Blockly.Workspace) {
    const containerBlock = workspace.newBlock(
      pseudoIfContainerName
    ) as Blockly.BlockSvg
    containerBlock.initSvg()
    let connection = containerBlock.nextConnection
    for (let i = 1; i < this.elseIfCount_; ++i) {
      const elseIfBlock = workspace.newBlock(
        pseudoIfElseIfName
      ) as Blockly.BlockSvg
      elseIfBlock.initSvg()
      connection.connect(elseIfBlock.previousConnection)
      connection = elseIfBlock.nextConnection
    }
    if (this.elseCount_) {
      const elseBlock = workspace.newBlock(pseudoIfElseName) as Blockly.BlockSvg
      elseBlock.initSvg()
      connection.connect(elseBlock.previousConnection)
    }
    return containerBlock
  },
  rebuildShape_() {
    const valueConnections: (Blockly.Block | null)[] = []
    const statementConnections: (Blockly.Block | null)[] = []
    let elseStatementConnection: any = null

    if (this.getInput('ELSE')) {
      elseStatementConnection =
        this.getInput('ELSE').connection.targetConnection
    }

    let i = 1
    let inputIf: any
    while ((inputIf = this.getInput('IF' + i))) {
      const inputDo = this.getInput('DO' + i)
      valueConnections.push(inputIf.connection.targetConnection)
      statementConnections.push(inputDo.connection.targetConnection)
      i++
    }
    this.updateShape_()
    this.reconnectChildBlocks_(
      valueConnections,
      statementConnections,
      elseStatementConnection
    )
  },
  reconnectChildBlocks_(
    valueConnections: (Blockly.RenderedConnection | null)[],
    statementConnections: (Blockly.RenderedConnection | null)[],
    elseStatementConnection: Blockly.RenderedConnection | null
  ) {
    for (let i = 1; i < this.elseIfCount_; ++i) {
      valueConnections[i]?.reconnect(this, 'IF' + i)
      statementConnections[i]?.reconnect(this, 'DO' + i)
    }
    elseStatementConnection?.reconnect(this, 'ELSE')
  },
  saveConnections(containerBlock: Blockly.Block) {
    let clauseBlock = containerBlock.nextConnection?.targetBlock() as any
    let i = 1
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case pseudoIfElseIfName:
          const inputIf = this.getInput('IF' + i)
          const inputDo = this.getInput('DO' + i)
          clauseBlock.valueConnection_ =
            inputIf && inputIf.connection.targetConnection
          clauseBlock.statementConnection_ =
            inputDo && inputDo.connection.targetConnection
          ++i
          break
        case pseudoIfElseName:
          const elseDo = this.getInput('ELSE')
          clauseBlock.statementConnection_ =
            elseDo && elseDo.connection.targetConnection
          break
        default:
          throw Error('Unknown block type.')
      }
      clauseBlock =
        clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
    }
  },
  /**
   * @this {Blockly.Block}
   */
  updateShape_() {
    // Delete everything
    if (this.getInput('ELSE')) {
      this.removeInput('ELSE')
      this.removeInput('ELSE_LABEL')
    }
    let i = 1
    while (this.getInput('IF' + i)) {
      this.removeInput('IF' + i)
      this.removeInput(':' + i)
      this.removeInput('DO' + i)
      ++i
    }
    // Rebuild block
    for (let i = 1; i < this.elseIfCount_ + 1; ++i) {
      this.appendValueInput('IF' + i)
        .setCheck(['Boolean'])
        .appendField('そうでなくもし')
      this.appendDummyInput(':' + i).appendField('ならば:')
      this.appendStatementInput('DO' + i).appendField('')
    }
    if (this.elseCount_) {
      this.appendDummyInput('ELSE_LABEL').appendField('そうでなければ:')
      this.appendStatementInput('ELSE').appendField('')
    }
  },
}

export const pseudoIfChildBlocks: BlockDefinition[] = [
  {
    type: pseudoIfContainerName,
    message0: 'もし',
    nextStatement: null,
    enableContextMenu: false,
    colour: 210,
    tooltip: '条件を指定します。',
  },
  {
    type: pseudoIfElseIfName,
    message0: 'そうでなくもし',
    previousStatement: null,
    nextStatement: null,
    enableContextMenu: false,
    colour: 210,
    tooltip: '追加の条件を指定します。',
  },
  {
    type: pseudoIfElseName,
    message0: 'そうでなければ',
    previousStatement: null,
    enableContextMenu: false,
    colour: 210,
    tooltip: '条件を満たさなかった場合を指定します。',
  },
]

export const pseudoIfBlock: { [key: string]: BlockDefinition } = {
  [pseudoIfName]: {
    init() {
      this.jsonInit({
        type: pseudoIfName,
        message0: 'もし %1 ならば:',
        args0: [
          {
            type: 'input_value',
            name: 'IF0',
            check: 'Boolean',
          },
        ],
        message1: '%1',
        args1: [
          {
            type: 'input_statement',
            name: 'DO0',
          },
        ],
        previousStatement: null,
        nextStatement: null,
        colour: 210,
        tooltip: '条件によって、実行する文を変えます。',
        mutator: pseudoIfMutatorName,
      })
      this.elseIfCount_ = 0
      this.elseCount_ = 0
    },
  },
}
