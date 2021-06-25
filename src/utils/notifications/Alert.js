import { NotificationManager } from "react-notifications";

const Alert = (type, value) => {
  const text =
    (value && value.error_message) || (value && value.message) || value;
  const timeOut = 3000;

  switch (type) {
    case "info":
      NotificationManager.info(text, "", timeOut);
      break;
    case "success":
      NotificationManager.success(text, "", timeOut);
      break;
    case "warning":
      NotificationManager.info(text, "", timeOut);
      break;
    case "error":
      NotificationManager.error(text, "", timeOut);
      break;
    default:
      return "";
  }
};

export default Alert;
