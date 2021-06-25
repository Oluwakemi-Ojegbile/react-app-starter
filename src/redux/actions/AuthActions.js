import Actions from "../Types";

// SET CURRENT USER
export const setCurrentUser = () => ({
  type: Actions.SET_CURRENT_USER,
});

// // LOG IN USER
// export const userLoginStart = () => ({
//   type: Actions.USER_LOGIN_START,
// });

// export const userLoginSuccess = (payload) => ({
//   type: Actions.USER_LOGIN_SUCCESS,
//   payload,
// });

// export const userLoginFailure = (payload) => ({
//   type: Actions.USER_LOGIN_FAILURE,
//   payload,
// });

// export const userLogin = (payload, history) => async (dispatch) => {
//   const API = Instance.customAxiosInstance();

//   dispatch(userLoginStart());
//   API.post("users/login", payload).then((response) => {
//     const { data, ok } = response;
//     if (ok) {
//       dispatch(userLoginSuccess(data && data.data));
//       let adminAuth = data && data.data && data.data.twoFactorAuth;
//       if (adminAuth === true) {
//         history.push("/verify");
//       } else {
//         responseHandler(response);
//         Storage.set("user-access-token", data && data.data && data.data.token);
//         const decoded = jwt_decode(data && data.data && data.data.token);
//         Storage.set("decoded-data", JSON.stringify(decoded));
//         history.push("/dashboard");
//       }
//     } else {
//       responseHandler(response);
//       dispatch(userLoginFailure(data));
//     }
//   });
// };

