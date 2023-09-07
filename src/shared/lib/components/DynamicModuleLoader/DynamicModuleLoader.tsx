import React, { JSX, useEffect } from 'react';
import { useStore } from 'react-redux';
import {
    IReduxStoreWithManager,
    IStateSchema,
    StateSchemaKey,
} from '@/app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';
import useAppDispatch from '../../hooks/useAppDispatch/useAppDispatch';

type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<IStateSchema[name]>>;
};

interface IDynamicModuleLoaderProps {
    children?: React.ReactNode;
    reducers?: ReducersList;
    removeAfterAmount?: boolean;
}

const DynamicModuleLoader: React.FC<IDynamicModuleLoaderProps> = (
    props: IDynamicModuleLoaderProps,
): JSX.Element => {
    const { children, removeAfterAmount = true, reducers = {} } = props;

    const dispatch = useAppDispatch();

    const store = useStore() as IReduxStoreWithManager;

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey];
            if (!mounted) {
                // @ts-ignore
                store.reducerManager.add(name as keyof IStateSchema, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterAmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as keyof IStateSchema);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return <>{children}</>;
};

export { DynamicModuleLoader, type ReducersList };
