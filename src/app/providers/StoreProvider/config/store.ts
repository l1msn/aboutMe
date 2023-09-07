import {
    CombinedState,
    configureStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import IStateSchema from '../types/IStateSchema';
import { createReducerManager } from './reducerManager';

function createReduxStore(
    initialState?: IStateSchema,
    asyncReducers?: ReducersMapObject<IStateSchema>,
) {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

const store = createReduxStore();

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

export default createReduxStore;
export type { RootState, AppDispatch };
