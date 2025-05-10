import { calciumGenerator } from '.'

const self = calciumGenerator

calciumGenerator.forBlock['calcium_def'] = (block) => {
  const funcName = block.getField('NAME')?.getText() ?? 'f'
  self.shiftIndent(1)
  const stmts =
    self.statementToCode(block, 'STMTS') ||
    JSON.stringify([self.indent, [], 'pass']) + ','
  self.shiftIndent(-1)
  const params: any = Reflect.get(block, 'parameters') ?? []
  return (
    JSON.stringify([self.indent, [], 'def', funcName, params]) + ',' + stmts
  )
}
