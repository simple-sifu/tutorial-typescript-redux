import { ActionTypes } from '../action-types';

export type Action = 
    | SearchRepoAction 
    | SearchRepoSuccessAction 
    | SearchRepoErrorAction

interface SearchRepoAction {
    type: ActionTypes.SEARCH_REPO;
}

interface SearchRepoSuccessAction {
    type: ActionTypes.SEARCH_REPO_SUCCESS;
    payload: string[];
}

interface SearchRepoErrorAction {
    type: ActionTypes.SEARCH_REPO_ERROR;
    payload: string;
}

