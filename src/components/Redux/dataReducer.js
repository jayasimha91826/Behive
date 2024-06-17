import { createSlice } from '@reduxjs/toolkit';
import { spaceList } from '../../data';
import { chooseList } from '../../choose';

const initialState = {
  chooseList:chooseList,
  spaceList:spaceList,
};

export const dataSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getspaceList:() => {

    }
  },
});

export const { increment, decrement } = dataSlice.actions;

export default dataSlice.reducer;
