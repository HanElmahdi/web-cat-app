export enum DataStateEnum {
    LOADING,
    LOADED,
    ERROR,
}

export interface AppDataState<T> {
    dataState?: DataStateEnum,
    data?:T,
    errorMessage?:string
}

export enum ProductActionsTypes {
    GET_ALL_PRODUCTS= "[Product] Get All products",
    GET_SELECTED_PRODUCTS= "[Product] Get Selected products",
    GET_AVAILABLE_PRODUCTS= "[Product] Get Available products",
    SEARCH_PRODUCT= "[Product] Search products",
    NEW_PRODUCT= "[Product] New Product",
    SELECT_PRODUCT= "[Product] Select Product",
    EDIT_PRODUCT= "[Product] Edit Product",
    DELETE_PRODUCT= "[Product] Delete Product",
}

export interface ActionEvent {
    type:ProductActionsTypes,
    payload?:any
}