import {TypesContractsItem} from "./types";

enum TYPES_CONTRACTS_ACTIONS {
  TYPES_CONTRACTS_ACTIONS_ADD_ITEM = "TYPES_CONTRACTS_ACTIONS_ADD_ITEM",
  TYPES_CONTRACTS_ACTIONS_SET_ITEMS = "TYPES_CONTRACTS_ACTIONS_SET_ITEMS",
  TYPES_CONTRACTS_ACTIONS_DELETE_ITEM = "TYPES_CONTRACTS_ACTIONS_DELETE_ITEM",
}

type ActionAddItem = {
  type: TYPES_CONTRACTS_ACTIONS.TYPES_CONTRACTS_ACTIONS_ADD_ITEM,
  payload: {
    name: string,
  },
}

type ActionSetItems = {
  type: TYPES_CONTRACTS_ACTIONS.TYPES_CONTRACTS_ACTIONS_SET_ITEMS,
  payload: TypesContractsItem[],
}

type ActionDeleteItem = {
  type: TYPES_CONTRACTS_ACTIONS.TYPES_CONTRACTS_ACTIONS_DELETE_ITEM,
  payload: {
    id: string,
  },
}

type Action = ActionAddItem | ActionSetItems | ActionDeleteItem

const TypesContractsActionBuilder = {
  addItem: (name: string) => ({
    type: TYPES_CONTRACTS_ACTIONS.TYPES_CONTRACTS_ACTIONS_ADD_ITEM,
    payload: {
      name,
    },
  }),
  setItems: (items: string[]) => ({
    type: TYPES_CONTRACTS_ACTIONS.TYPES_CONTRACTS_ACTIONS_SET_ITEMS,
    payload: items,
  }),
  deleteItem: (id: string) => ({
    type: TYPES_CONTRACTS_ACTIONS.TYPES_CONTRACTS_ACTIONS_DELETE_ITEM,
    payload: {
      id,
    }
  }),
};

export {
  TYPES_CONTRACTS_ACTIONS,
  type Action,
  TypesContractsActionBuilder,
};
