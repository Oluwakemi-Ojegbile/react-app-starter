import Storage from "../services/storage";

export function getDecodedData() {
  let userData = Storage.get("decoded-data");
  const user = JSON.parse(userData);
  const name = user && user.name;
  const email = user && user.email;
  const exp = user && user.exp;
  const iat = user && user.iat;
  const type = user && user.type;
  return { name, email, exp, iat, type };
}
