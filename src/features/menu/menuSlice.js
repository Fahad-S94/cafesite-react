import { MENU } from '../../app/shared/MENU'
import { createSlice } from '@reduxjs/toolkit';
// import { baseUrl } from '../../app/shared/baseUrl';
import { CAROUSEL } from '../../app/shared/CAROUSEL';

const initialState = {
    menuArray: MENU
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {}

})

export const menuReducer = menuSlice.reducer

export const selectAllMenu = (state) => {
    return state.menu.menuArray;
}

export const selectMenuByCategory = (state) => {
    return state.menu.menuArray.filter(
            (menu) => menu.category
    );
};

