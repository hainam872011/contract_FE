import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  remove,
  getAll,
  edit,
  getById,
  create,
  API_PATH
} from "../../services/customer";
import common from "../../constants/common";

const initialState = {
  list: [],
  current: null
};

export const getCustomerList = createAsyncThunk(
  `${API_PATH}/${common.list}`,
  async () => {
    const { data } = await getAll();
    return data;
  }
);

export const getCustomerDetail = createAsyncThunk(
  `${API_PATH}/${common.detail}`,
  async id => {
    const { data } = await getById(id);
    return data;
  }
);

export const createCustomer = createAsyncThunk(
  `${API_PATH}/${common.create}`,
  async customer => {
    await create(customer);
  }
);

export const editCustomer = createAsyncThunk(
  `${API_PATH}/${common.edit}`,
  async customer => {
    await edit(customer);
  }
);

export const deleteCustomer = createAsyncThunk(
  `${API_PATH}/${common.delete}`,
  async id => {
    await remove(id);
  }
);

export const customerSlice = createSlice({
  name: API_PATH,
  initialState,
  reducers: {
    setList: (state, { payload }) => {
      state.list = payload;
    },
    setCurrent: (state, { payload }) => {
      state.current = payload;
    }
  },
  extraReducers: {
    [getCustomerList.fulfilled]: (state, { payload }) => {
      state.list = payload;
    },
    [getCustomerDetail.fulfilled]: (state, { payload }) => {
      state.current = payload;
    }
  }
});

export const { setList, setCurrent } = customerSlice.actions;

export default customerSlice.reducer;
