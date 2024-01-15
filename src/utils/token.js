export const TOKEN_STORAGE_KEY = {
  AUTH: "auth",
  CSRF: "csrf",
  ROLE: "role",
  NAME: "name"
};

export const getTokens = () => ({
  auth:
    localStorage.getItem(TOKEN_STORAGE_KEY.AUTH) ||
    sessionStorage.getItem(TOKEN_STORAGE_KEY.AUTH),
  refresh:
    localStorage.getItem(TOKEN_STORAGE_KEY.CSRF) ||
    sessionStorage.getItem(TOKEN_STORAGE_KEY.CSRF)
});

export const setTokens = (auth, csrf, persist = true) => {
  if (persist) {
    localStorage.setItem(TOKEN_STORAGE_KEY.AUTH, auth);
    localStorage.setItem(TOKEN_STORAGE_KEY.CSRF, csrf);
  } else {
    sessionStorage.setItem(TOKEN_STORAGE_KEY.AUTH, auth);
    sessionStorage.setItem(TOKEN_STORAGE_KEY.CSRF, csrf);
  }
};

export const getUserRole = () => ({
  role:
    localStorage.getItem(TOKEN_STORAGE_KEY.ROLE) ||
    sessionStorage.getItem(TOKEN_STORAGE_KEY.ROLE)
});

export const setUserRole = (role, persist = true) => {
  if (persist) {
    localStorage.setItem(TOKEN_STORAGE_KEY.ROLE, role);
  } else {
    sessionStorage.setItem(TOKEN_STORAGE_KEY.ROLE, role);
  }
};

export const getUserName = () => ({
  name:
    localStorage.getItem(TOKEN_STORAGE_KEY.NAME) ||
    sessionStorage.getItem(TOKEN_STORAGE_KEY.NAME)
});

export const setUserName = (name, persist = true) => {
  if (persist) {
    localStorage.setItem(TOKEN_STORAGE_KEY.NAME, name);
  } else {
    sessionStorage.setItem(TOKEN_STORAGE_KEY.NAME, name);
  }
};

export const setAuthToken = (auth, persist) => {
  if (persist) {
    localStorage.setItem(TOKEN_STORAGE_KEY.AUTH, auth);
  } else {
    sessionStorage.setItem(TOKEN_STORAGE_KEY.AUTH, auth);
  }
};

export const removeTokens = () => {
  localStorage.removeItem(TOKEN_STORAGE_KEY.AUTH);
  sessionStorage.removeItem(TOKEN_STORAGE_KEY.AUTH);
};

export const removeTokenByKey = key => {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
};
