import {TypesContractsItem} from "./types";

enum TYPES_CONTRACTS_ACTIONS {
  TYPES_CONTRACTS_ACTIONS_SET_ITEMS = "TYPES_CONTRACTS_ACTIONS_SET_ITEMS",
}

type ActionSetItems = {
  type: TYPES_CONTRACTS_ACTIONS.TYPES_CONTRACTS_ACTIONS_SET_ITEMS,
  payload: TypesContractsItem[],
}

type Action = ActionSetItems

const TypesContractsActionBuilder = {
  setItems: (items: string[]) => ({
    type: TYPES_CONTRACTS_ACTIONS.TYPES_CONTRACTS_ACTIONS_SET_ITEMS,
    payload: items,
  }),
};

export {
  TYPES_CONTRACTS_ACTIONS,
  type Action,
  TypesContractsActionBuilder,
};
