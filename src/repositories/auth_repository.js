import Api from "./api";


export const loginService = (credentials, propsHistory) => {
  const api = new Api();
  return api
    .postLoginData(`login`, credentials)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const signUpService = (credentials) => {
  const api = new Api();
  let signupUrl = "register";
  return api
    .postLoginData(signupUrl, credentials)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
