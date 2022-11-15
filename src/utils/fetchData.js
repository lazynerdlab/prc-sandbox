import axios from "../api/axios";

export const Apis = async (req, url, token) => {
  const res = await axios({ method: req, url: url, data: token });
  return res;
};
