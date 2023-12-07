import { Action, TYPES_CONTRACTS_ACTIONS } from "./actions";
import { TypesContractsItem } from "./types";

const defaultData: TypesContractsItem[] = [
  {
    id: "ГПХ",
    name: "ГПХ"
  },
  {
    id: "Основной",
    name: "Основной"
  },
  {
    id: "Совместитель",
    name: "Совместитель"
  }
];

const typesContractsReducer = (state: TypesContractsItem[] = defaultData, action: Action) => {
  switch (action.type) {
    case TYPES_CONTRACTS_ACTIONS.TYPES_CONTRACTS_ACTIONS_SET_ITEMS:
      return [...action.payload];
    default:
      return state;
  }
};

export { typesContractsReducer };
