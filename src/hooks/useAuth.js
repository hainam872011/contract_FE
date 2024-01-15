import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from ".";
import { loginAuth, setUser } from "../store/slices/userSlice";
import { removeTokens } from "../utils";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [isSendForgotPassword, setIsSendForgotPassword] = useState(false);
  const [isSendResetPassword, setIsSendResetPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { user, clientUser } = useAppSelector(state => state.user);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const login = async (values, actions) => {
    setLoading(true);
    try {
      const res = await dispatch(loginAuth(values));
      const { errors, data = {} } = res.payload;
      if (errors && Object.keys(errors).length) {
        actions.setErrors(errors);
      }
      if (data.confirm_code) {
        navigate("/confirm-passcode");
      }
      actions.setSubmitting(false);
      Promise.resolve();
    } finally {
      setLoading(false);
    }
  };

  // clean up
  useEffect(
    () => () => {
      setLoading(false);
    },
    []
  );

  const logout = async () => {
    removeTokens();
    dispatch(setUser(null));
  };

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const handleMouseDownConfirmPassword = event => {
    event.preventDefault();
  };

  return {
    isAuthenticated: !!user,
    user,
    login,
    loading,
    logout,
    handleClickShowPassword,
    handleMouseDownPassword,
    showPassword,
    isSendForgotPassword,
    setIsSendForgotPassword,
    isSendResetPassword,
    setIsSendResetPassword,
    handleClickShowConfirmPassword,
    handleMouseDownConfirmPassword,
    clientUser
  };
};

export default useAuth;
