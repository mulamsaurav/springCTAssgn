import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface EmployeeType {
  name: string;
  age: string;
  address: string;
  city: string;
}
export interface Employees {
  employees: EmployeeType[];
}

const initialState: Employees = {
  employees: [],
};
export const EmployeeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    saveEmployee: (state, action: PayloadAction<EmployeeType>) => {
      state.employees = [...state.employees, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {saveEmployee} = EmployeeSlice.actions;

export default EmployeeSlice.reducer;
