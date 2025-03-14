class ConstantManager {
  private values!: ConstantValues
  setValues(values: ConstantValues) {
    this.values = values
  }
  getValue(key: string): string {
    return this.values[key] ?? ''
  }
}

export const messageManager = new ConstantManager()
export const tooltipManager = new ConstantManager()

export type ConstantValues = {
  [key: string]: string
}
