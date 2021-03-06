'use strict'
import * as Blockly from 'blockly/core'

Blockly.Msg.CALCIUM_ADD_TITLE = 'add to %1 by %2'
Blockly.Msg.CALCIUM_ADD_TOOLTIP = 'Adds a value to a variable.'

Blockly.Msg.CALCIUM_ARITHMETIC_ADD = 'add'
Blockly.Msg.CALCIUM_ARITHMETIC_SUBTRACT = 'subtract'
Blockly.Msg.CALCIUM_ARITHMETIC_MULTIPLICATE = 'multiplicate'
Blockly.Msg.CALCIUM_ARITHMETIC_FLOOR_DIVIDE = 'floor divide'
Blockly.Msg.CALCIUM_ARITHMETIC_DIVIDE = 'divide'
Blockly.Msg.CALCIUM_ARITHMETIC_EXPONENTIATE = 'exponentiate'
Blockly.Msg.CALCIUM_ARITHMETIC_REMAIN = 'remain'

Blockly.Msg.CALCIUM_ASSIGN_TITLE = 'assign to %1 from %2'
Blockly.Msg.CALCIUM_ASSIGN_TOOLTIP = 'Assigns data to a variable.'

Blockly.Msg.CALCIUM_ATTRIBUTE_TITLE = "%1 's attribute %2"
Blockly.Msg.CALCIUM_ATTRIBUTE_TOOLTIP = 'Accesses the attribute of an object.'

Blockly.Msg.CALCIUM_BOOLEAN_TRUE = 'Yes'
Blockly.Msg.CALCIUM_BOOLEAN_FALSE = 'No'

Blockly.Msg.CALCIUM_BREAK = 'break this loop'
Blockly.Msg.CALCIUM_CONTINUE = 'continue next loop'

Blockly.Msg.CALCIUM_CALL_TITLE = 'call %1'
Blockly.Msg.CALCIUM_CALL_TOOLTIP = 'Calls a function.'
Blockly.Msg.CALCIUM_CALL_ARG_TITLE = 'argument'
Blockly.Msg.CALCIUM_CALL_ARG_TOOLTIP = 'An argument for the function call.'
Blockly.Msg.CALCIUM_CALL_RETURN_TITLE = '%1 = call %2'
Blockly.Msg.CALCIUM_CALL_RETURN_TOOLTIP =
  'Assigns the result of the function call to a variable.'

Blockly.Msg.CALCIUM_CLASS_TITLE = '%1 class'
Blockly.Msg.CALCIUM_CLASS_TOOLTIP =
  'Specifies the name of a class to be instantiated.'

Blockly.Msg.CALCIUM_CLASS_DEF_TITLE = 'define %1 class %2 inherit %3 %4'
Blockly.Msg.CALCIUM_CLASS_DEF_TOOLTIP = 'Defines a class.'

Blockly.Msg.CALCIUM_DEF_TITLE = 'define %1 function %2 %3 %4'
Blockly.Msg.CALCIUM_DEF_TOOLTIP = 'Defines a function.'
Blockly.Msg.CALCIUM_DEF_METHOD_TITLE = 'define %1 method %2 %3 %4'
Blockly.Msg.CALCIUM_DEF_METHOD_TOOLTIP = 'Defines a method.'
Blockly.Msg.CALCIUM_DEF_PARAM_TITLE = 'parameter %1'
Blockly.Msg.CALCIUM_DEF_PARAM_TOOLTIP = 'A parameter of the function.'

Blockly.Msg.CALCIUM_DICT_TITLE = 'create a dict'
Blockly.Msg.CALCIUM_DICT_TOOLTIP = 'Creates an empty dict.'

Blockly.Msg.CALCIUM_FOR_TITLE = 'repeat %1 from %2 %3 %4'
Blockly.Msg.CALCIUM_FOR_TOOLTIP = 'Repeats by extracting data to a variable.'

Blockly.Msg.CALCIUM_FOR_RANGE_TITLE =
  'repeat for %1 from %2 , to %3 , by %4 %5 %6'
Blockly.Msg.CALCIUM_FOR_RANGE_TOOLTIP =
  'Repeats ranges from the start to the end by the step value.'

Blockly.Msg.CALCIUM_FUNCTION_TITLE = '%1 function'
Blockly.Msg.CALCIUM_FUNCTION_TOOLTIP = 'Specifies the name of a function.'

Blockly.Msg.CALCIUM_IF_TITLE = 'if %1:'
Blockly.Msg.CALCIUM_IF_TOOLTIP =
  'Checks the condition and decides whether to execute.'
Blockly.Msg.CALCIUM_IF_IF_TITLE = 'if'
Blockly.Msg.CALCIUM_IF_IF_TOOLTIP = 'The first condition.'
Blockly.Msg.CALCIUM_IF_ELSEIF_TITLE = 'else if'
Blockly.Msg.CALCIUM_IF_ELSEIF_TOOLTIP = 'The condition of the second or later.'
Blockly.Msg.CALCIUM_IF_ELSE_TITLE = 'else'
Blockly.Msg.CALCIUM_IF_ELSE_TOOLTIP = 'Excutes when any condition has been met.'

Blockly.Msg.CALCIUM_IMPORT_TITLE = 'import %1'
Blockly.Msg.CALCIUM_IMPORT_TOOLTIP = 'Uses libraries or modules.'

Blockly.Msg.CALCIUM_LIST_TITLE = 'create a list'
Blockly.Msg.CALCIUM_LIST_TOOLTIP = 'Creates a list.'
Blockly.Msg.CALCIUM_LIST_ITEM_TITLE = 'element'
Blockly.Msg.CALCIUM_LIST_ITEM_TOOLTIP = 'The element of a list.'

Blockly.Msg.CALCIUM_LOGICAL_AND = 'and'
Blockly.Msg.CALCIUM_LOGICAL_OR = 'or'

Blockly.Msg.CALCIUM_METHOD_TITLE = "%1 's %2 method"
Blockly.Msg.CALCIUM_METHOD_TOOLTIP = 'Specifies the name of a method.'

Blockly.Msg.CALCIUM_NOT_TITLE = 'not %1'
Blockly.Msg.CALCIUM_NOT_TOOLTIP = 'Negates a logical value.'

Blockly.Msg.CALCIUM_PRINT_TITLE = 'print %1'
Blockly.Msg.CALCIUM_PRINT_TOOLTIP = 'Outputs values as strings.'

Blockly.Msg.CALCIUM_RELATIONAL_EQUAL = 'equal'
Blockly.Msg.CALCIUM_RELATIONAL_NOT_EQUAL = 'not equal'
Blockly.Msg.CALCIUM_RELATIONAL_LESS_THAN = '<'
Blockly.Msg.CALCIUM_RELATIONAL_LESS_THAN_OR_EQUAL = '???'
Blockly.Msg.CALCIUM_RELATIONAL_GREATER_THAN = '>'
Blockly.Msg.CALCIUM_RELATIONAL_GREATER_THAN_OR_EQUAL = '???'
Blockly.Msg.CALCIUM_RELATIONAL_IN = 'contained in'
Blockly.Msg.CALCIUM_RELATIONAL_NOT_IN = 'not contained in'

Blockly.Msg.CALCIUM_RETURN_TITLE = 'return %1 from this function'
Blockly.Msg.CALCIUM_RETURN_TOOLTIP = 'Returns a value and ends a function call.'

Blockly.Msg.CALCIUM_SLICE_TITLE = 'slice %1 : %2'
Blockly.Msg.CALCIUM_SLICE_TOOLTIP = 'Uses slicing of a list.'

Blockly.Msg.CALCIUM_STR_TITLE = 'string "%1"'
Blockly.Msg.CALCIUM_STR_TOOLTIP = 'A string value.'

Blockly.Msg.CALCIUM_SUBSCRIPT_TITLE = "%1 's element [ %2 ]"
Blockly.Msg.CALCIUM_SUBSCRIPT_TOOLTIP = 'Accesses an element of data.'

Blockly.Msg.CALCIUM_UI_OPEN = 'Open'
Blockly.Msg.CALCIUM_UI_RUN = 'Execute Program'
Blockly.Msg.CALCIUM_UI_SAVE = 'Save'

Blockly.Msg.CALCIUM_VARIABLE_TITLE = 'variable %1'
Blockly.Msg.CALCIUM_VARIABLE_TOOLTIP = 'Specifies the name of a variable.'

Blockly.Msg.CALCIUM_WHILE_TITLE = 'while %1 %2 repeat %3'
Blockly.Msg.CALCIUM_WHILE_TOOLTIP = 'Repeats while the condition meets.'
