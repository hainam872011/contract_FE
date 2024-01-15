import { useState } from "react";
import { useAppDispatch, useAppSelector } from ".";
import {
  createCustomer,
  deleteCustomer,
  editCustomer,
  getCustomerDetail,
  getCustomerList
} from "../store/slices/customerSlice";

const useCustomer = id => {
  const [loading, setLoading] = useState(false);
  const { list, current } = useAppSelector(state => state.customer);
  const dispatch = useAppDispatch();

  const getList = async () => {
    setLoading(true);
    try {
      await dispatch(getCustomerList());
      Promise.resolve();
    } finally {
      setLoading(false);
    }
  };

  const getDetail = async () => {
    if (!id) return;
    setLoading(true);
    try {
      await dispatch(getCustomerDetail(id));
      Promise.resolve();
    } finally {
      setLoading(false);
    }
  };

  const create = async customer => {
    setLoading(true);
    try {
      await dispatch(createCustomer(customer));
      Promise.resolve();
    } finally {
      setLoading(false);
    }
  };

  const edit = async customer => {
    setLoading(true);
    try {
      await dispatch(editCustomer(customer));
      Promise.resolve();
    } finally {
      setLoading(false);
    }
  };

  const remove = async customerId => {
    const customerId1 = customerId || id;
    if (!customerId1) return;
    setLoading(true);
    try {
      await dispatch(deleteCustomer(customerId1));
      Promise.resolve();
    } finally {
      setLoading(false);
    }
  };

  return {
    list,
    current,
    loading,
    getList,
    getDetail,
    create,
    remove,
    edit
  };
};

export default useCustomer;
