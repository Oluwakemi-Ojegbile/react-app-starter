import { clearStorage } from "../../routes/PrivateRoute";
import Alert from "./Alert";

const responseHandler = (response) => {
  const { data, problem, ok, status } = response;
  let res;

  if (ok || status === 200 || status === 201) {
    res = data;
    Alert("success", res);
  } else {
    if (status === 500) {
      res = (data && data.error_message) || (data && data.message) || data;
      if (
        (res && res.toLowerCase() === "jwt expired") ||
        (res && res.toLowerCase() === "jwt malformed")
      ) {
        Alert("error", "Session Expired!");
        clearStorage();
      } else {
        Alert("error", "Server Error! Kindly try again.");
      }
    }
    if (problem === "NETWORK_ERROR") {
      res = "Network Error! Kindly try again.";
      Alert("warning", res);
    }
    if (problem === "CLIENT_ERROR") {
      res = data;
      Alert("error", res);
    }
  }
  return res;
};

export default responseHandler;
