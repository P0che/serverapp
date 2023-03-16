import { DataState } from "../enum/data-state.enum";

export interface AppState<T>{
    dataState: DataState;
    appData?: T;
    error?: string;
}

//permet que le type de appData soit le type passé en interface