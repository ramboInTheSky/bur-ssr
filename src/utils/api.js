const api = {
  login: (user, pswd) => {
    return new Promise((resolve, reject) => {
      window.gigya.accounts.login({
        loginID: user,
        password: pswd,
        callback: response => {
          if (response.errorCode === 0) {
            resolve(response);
          } else {
            reject(response);
          }
        }
      });
    });
  },
  logout: () => {
    // destroyAuthCookie();
  }
};

export default api;
