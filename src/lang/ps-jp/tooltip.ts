import { ConstantValues, tooltipManager } from "../../constant-manager";

const PSEUDO_NUMBER_TOOLTIP = "数値を表します。";
const PSEUDO_VARIABLE_TOOLTIP = "変数の名前を表します。";

const tooltips: ConstantValues = {
  PSEUDO_NUMBER_TOOLTIP,
  PSEUDO_VARIABLE_TOOLTIP,
};

tooltipManager.addValues(tooltips);
