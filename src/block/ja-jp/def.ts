import * as Blockly from 'blockly'
// @ts-ignore
import { BlockDefinition } from 'blockly/core/blocks'

export const calciumDefName = 'calcium_def'
export const calciumDefMutatorName = 'calcium_def_mutator'
export const calciumDefParamName = 'calcium_def_param'
const calciumDefParamsContainerName = 'calcium_def_params_container'

export const calciumDefMethodName = 'calcium_def_method'
export const calciumDefMethodMutatorName = 'calcium_def_method_mutator'

export function createCalciumDefBlock({ tooltip }: { tooltip: string }): {
  [key: string]: BlockDefinition
} {
  return {
    [calciumDefName]: {
      init() {
        this.jsonInit({
          type: calciumDefName,
          message0: 'def %1 ( %2 ): %3 %4',
          args0: [
            {
              type: 'field_input',
              name: 'NAME',
              text: 'f',
            },
            {
              type: 'field_label_serializable',
              name: 'LABELS',
              text: '',
            },
            {
              type: 'input_dummy',
            },
            {
              type: 'input_statement',
              name: 'STMTS',
            },
          ],
          previousStatement: null,
          nextStatement: null,
          colour: 240,
          tooltip,
          helpUrl: '',
          mutator: calciumDefMutatorName,
        })
        this.countOfParameters = 0
        this.updateShape()
      },
    },
  }
}

export const calciumDefMutatorMixin: any = {
  compose(containerBlock: Blockly.Block) {
    let itemBlock: any = containerBlock.getInputTargetBlock('PARAMS')
    const connections: any[] = []
    this.parameters = []
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_)
      this.parameters.push(itemBlock.getFieldValue('PARAM'))
      itemBlock =
        itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
    }
    this.countOfParameters = connections.length
    this.updateShape()
  },
  decompose(workspace: Blockly.Workspace) {
    const containerBlock = workspace.newBlock(
      calciumDefParamsContainerName
    ) as Blockly.BlockSvg
    containerBlock.initSvg()
    let connection: any = containerBlock.getInput('PARAMS')?.connection
    for (let i = 0; i < this.countOfParameters; ++i) {
      const itemBlock = workspace.newBlock(
        calciumDefParamName
      ) as Blockly.BlockSvg
      itemBlock.initSvg()
      itemBlock.setFieldValue(this.parameters[i], 'PARAM')
      connection.connect(itemBlock.previousConnection)
      connection = itemBlock.nextConnection
    }
    return containerBlock
  },
  saveExtraState() {
    return {
      countOfParameters: this.countOfParameters,
      parameters: this.parameters,
    }
  },
  loadExtraState(state: any) {
    this.countOfParameters = state.countOfParameters
    this.parameters = state.parameters
    this.updateShape()
  },
  updateShape() {
    if (this.parameters) {
      let labelStr = ''
      if (this.countOfParameters > 0) {
        labelStr = this.parameters.join(', ')
      }
      Blockly.Events.disable()
      try {
        this.setFieldValue(labelStr, 'LABELS')
      } finally {
        Blockly.Events.enable()
      }
    }
  },
}

export function createCalciumDefParamBlocks({
  calciumDefParamMessage,
  calciumDefParamTooltip,
}: {
  calciumDefParamMessage: string
  calciumDefParamTooltip: string
}): BlockDefinition[] {
  return [
    {
      type: calciumDefParamName,
      message0: calciumDefParamMessage,
      args0: [
        {
          type: 'field_input',
          name: 'PARAM',
          text: 'a',
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: calciumDefParamTooltip,
      helpUrl: '',
    },
    {
      type: calciumDefParamsContainerName,
      message0: '%1',
      args0: [
        {
          type: 'input_statement',
          name: 'PARAMS',
        },
      ],
      colour: 240,
      tooltip: '',
      helpUrl: '',
    },
  ]
}

export const calciumDefMethodMutatorMixin: any = {
  compose: calciumDefMutatorMixin.compose,
  decompose: calciumDefMutatorMixin.decompose,
  saveExtraState: calciumDefMutatorMixin.saveExtraState,
  loadExtraState: calciumDefMutatorMixin.loadExtraState,
  updateShape() {
    let labelStr = ''
    if (this.countOfParameters > 0) {
      if (this.parameters) {
        labelStr = `(self, ${this.parameters.join(', ')}):`
      }
    } else {
      labelStr = '(self):'
    }
    Blockly.Events.disable()
    try {
      this.setFieldValue(labelStr, 'LABELS')
    } finally {
      Blockly.Events.enable()
    }
  },
}

export function createCalciumDefMethodBlock({ tooltip }: { tooltip: string }): {
  [key: string]: BlockDefinition
} {
  return {
    [calciumDefMethodName]: {
      init() {
        this.jsonInit({
          type: calciumDefMethodName,
          message0: 'def %1 %2 %3 %4',
          args0: [
            {
              type: 'field_input',
              name: 'NAME',
              text: '__init__',
            },
            {
              type: 'field_label_serializable',
              name: 'LABELS',
              text: '',
            },
            {
              type: 'input_dummy',
            },
            {
              type: 'input_statement',
              name: 'STMTS',
            },
          ],
          previousStatement: null,
          nextStatement: null,
          colour: 240,
          tooltip,
          helpUrl: '',
          mutator: calciumDefMethodMutatorName,
        })
        this.countOfParameters = 0
        this.updateShape()
      },
    },
  }
}
