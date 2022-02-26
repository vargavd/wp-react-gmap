import { combineReducers } from "redux";
import { ActionType, TaxonomyAAction, TaxonomyBAction, TaxonomyCAction, TaxonomyDAction } from "./actions";


// --- REDUCERS ---
const taxonomyAFilterReducer = (state: string[] = [], action: TaxonomyAAction): string[] => {
  switch (action.type) {
    case ActionType.ADD_TAXONOMY_A_FILTER:
      return [...state, action.payload];
    case ActionType.REMOVE_TAXONOMY_A_FILTER:
      return state.filter(term => term !== action.payload);

    default:
      return state;
  }
}
const taxonomyBFilterReducer = (state: string[] = [], action: TaxonomyBAction): string[] => {
  switch (action.type) {
    case ActionType.ADD_TAXONOMY_B_FILTER:
      return [...state, action.payload];
    case ActionType.REMOVE_TAXONOMY_B_FILTER:
      return state.filter(term => term !== action.payload);

    default:
      return state;
  }
}
const taxonomyCFilterReducer = (state: string[] = [], action: TaxonomyCAction): string[] => {
  switch (action.type) {
    case ActionType.ADD_TAXONOMY_C_FILTER:
      return [...state, action.payload];
    case ActionType.REMOVE_TAXONOMY_C_FILTER:
      return state.filter(term => term !== action.payload);

    default:
      return state;
  }
}
const taxonomyDFilterReducer = (state: string[] = [], action: TaxonomyDAction): string[] => {
  switch (action.type) {
    case ActionType.ADD_TAXONOMY_D_FILTER:
      return [...state, action.payload];
    case ActionType.REMOVE_TAXONOMY_D_FILTER:
      return state.filter(term => term !== action.payload);

    default:
      return state;
  }
}


const reducers = combineReducers({
  taxonomyAFilters: taxonomyAFilterReducer,
  taxonomyBFilters: taxonomyBFilterReducer,
  taxonomyCFilters: taxonomyCFilterReducer,
  taxonomyDFilters: taxonomyDFilterReducer
});

export default reducers;
