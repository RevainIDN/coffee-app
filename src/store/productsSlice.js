import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [],
	filteredProducts: [],
	filterControl: 'all',
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload;
		},
		filterProducts: (state, action) => {
			state.filteredProducts = action.payload;
		},
		setFiltrationControl: (state, acttion) => {
			state.filterControl = acttion.payload;
		}
	},
});

export const { setProducts, filterProducts, setFiltrationControl } = productsSlice.actions;
export default productsSlice.reducer;