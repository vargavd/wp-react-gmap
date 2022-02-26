
// --- ACTION TYPE DEFINITIONS ---
export enum ActionType {
  ADD_TAXONOMY_A_FILTER = 'ADD_TAXONOMY_A_FILTER',
  ADD_TAXONOMY_B_FILTER = 'ADD_TAXONOMY_B_FILTER',
  ADD_TAXONOMY_C_FILTER = 'ADD_TAXONOMY_C_FILTER',
  ADD_TAXONOMY_D_FILTER = 'ADD_TAXONOMY_D_FILTER',
  REMOVE_TAXONOMY_A_FILTER = 'REMOVE_TAXONOMY_A_FILTER',
  REMOVE_TAXONOMY_B_FILTER = 'REMOVE_TAXONOMY_B_FILTER',
  REMOVE_TAXONOMY_C_FILTER = 'REMOVE_TAXONOMY_C_FILTER',
  REMOVE_TAXONOMY_D_FILTER = 'REMOVE_TAXONOMY_D_FILTER'
}


// --- ACTUAL TYPES OF ACTIONS ---
interface AddTaxonomyAFilterAction {
  type: ActionType.ADD_TAXONOMY_A_FILTER,
  payload: string
}
interface AddTaxonomyBFilterAction {
  type: ActionType.ADD_TAXONOMY_B_FILTER,
  payload: string
}
interface AddTaxonomyCFilterAction {
  type: ActionType.ADD_TAXONOMY_C_FILTER,
  payload: string
}
interface AddTaxonomyDFilterAction {
  type: ActionType.ADD_TAXONOMY_D_FILTER,
  payload: string
}
interface RemoveTaxonomyAFilterAction {
  type: ActionType.REMOVE_TAXONOMY_A_FILTER,
  payload: string
}
interface RemoveTaxonomyBFilterAction {
  type: ActionType.REMOVE_TAXONOMY_B_FILTER,
  payload: string
}
interface RemoveTaxonomyCFilterAction {
  type: ActionType.REMOVE_TAXONOMY_C_FILTER,
  payload: string
}
interface RemoveTaxonomyDFilterAction {
  type: ActionType.REMOVE_TAXONOMY_D_FILTER,
  payload: string
}

export type TaxonomyAAction = AddTaxonomyAFilterAction | RemoveTaxonomyAFilterAction;
export type TaxonomyBAction = AddTaxonomyBFilterAction | RemoveTaxonomyBFilterAction;
export type TaxonomyCAction = AddTaxonomyCFilterAction | RemoveTaxonomyCFilterAction;
export type TaxonomyDAction = AddTaxonomyDFilterAction | RemoveTaxonomyDFilterAction;


// -- ACTION CREATORS ---
export const addTaxonomyAFilter = (term: string):AddTaxonomyAFilterAction => {
  return {
    type: ActionType.ADD_TAXONOMY_A_FILTER,
    payload: term
  };
}
export const addTaxonomyBFilter = (term: string):AddTaxonomyBFilterAction => {
  return {
    type: ActionType.ADD_TAXONOMY_B_FILTER,
    payload: term
  };
}
export const addTaxonomyCFilter = (term: string):AddTaxonomyCFilterAction => {
  return {
    type: ActionType.ADD_TAXONOMY_C_FILTER,
    payload: term
  };
}
export const addTaxonomyDFilter = (term: string):AddTaxonomyDFilterAction => {
  return {
    type: ActionType.ADD_TAXONOMY_D_FILTER,
    payload: term
  };
}

export const removeTaxonomyAFilter = (term: string):RemoveTaxonomyAFilterAction => {
  return {
    type: ActionType.REMOVE_TAXONOMY_A_FILTER,
    payload: term
  };
}
export const removeTaxonomyBFilter = (term: string):RemoveTaxonomyBFilterAction => {
  return {
    type: ActionType.REMOVE_TAXONOMY_B_FILTER,
    payload: term
  };
}
export const removeTaxonomyCFilter = (term: string):RemoveTaxonomyCFilterAction => {
  return {
    type: ActionType.REMOVE_TAXONOMY_C_FILTER,
    payload: term
  };
}
export const removeTaxonomyDFilter = (term: string):RemoveTaxonomyDFilterAction => {
  return {
    type: ActionType.REMOVE_TAXONOMY_D_FILTER,
    payload: term
  };
}
