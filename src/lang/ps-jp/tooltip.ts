import { ConstantValues, tooltipManager } from "../../constant-manager";

const PSEUDO_ARRAY_TOOLTIP = "配列の要素を1つだけ指定します。";
const PSEUDO_ARRAY_SLICE_TOOLTIP = "配列の範囲を決めて、要素を指定します。";
const PSEUDO_NUMBER_TOOLTIP = "数値を表します。";
const PSEUDO_STR_TOOLTIP = "文字列を表します。";
const PSEUDO_VARIABLE_TOOLTIP = "変数の名前を表します。";

const tooltips: ConstantValues = {
  PSEUDO_ARRAY_TOOLTIP,
  PSEUDO_ARRAY_SLICE_TOOLTIP,
  PSEUDO_NUMBER_TOOLTIP,
  PSEUDO_STR_TOOLTIP,
  PSEUDO_VARIABLE_TOOLTIP,
};

tooltipManager.addValues(tooltips);
