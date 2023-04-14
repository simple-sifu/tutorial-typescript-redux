import { ActionTypes } from '../action-types'
import { Action } from '../actions'


interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

// assigning return interface 
const reducer = (
    state: RepositoriesState, 
    action: Action

): RepositoriesState => {


    switch(action.type){
        case ActionTypes.SEARCH_REPO:
            return { loading: true, error: null, data: []};
        case ActionTypes.SEARCH_REPO_SUCCESS:
            // 100% certain that 'action' is SearchRepoSuccessAction
            return { loading: false, error: null, data: action.payload};
        case ActionTypes.SEARCH_REPO_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default: 
            return state;

    }

};

export default reducer;