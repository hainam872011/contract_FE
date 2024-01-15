export const isSupported = !!(
  navigator.credentials.preventSilentAccess && window.PasswordCredential
);
export async function login(loginFn) {
  let result;

  try {
    const credential = await navigator.credentials.get({ password: true });
    if (credential instanceof PasswordCredential) {
      result = loginFn(credential.id, credential.password);
    }
  } catch {
    result = null;
  }
  return result;
}
export function saveCredentials(user, password) {
  let result;
  if (isSupported) {
    const cred = new PasswordCredential({
      iconURL: user.avatar ? user.avatar.url : undefined,
      id: user.email,
      name: user.firstName ? `${user.firstName} ${user.lastName}` : undefined,
      password
    });
    try {
      result = navigator.credentials.store(cred);
    } catch {
      result = null;
    }
  } else {
    result = null;
  }
  return result;
}
