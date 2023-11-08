import axiosInstance from "./axios";

export const registerUser = async (payload) => {
  console.log(payload, "ass");
  await axiosInstance.post(`/users/register`, payload).then((res) => res.data);
};

export const loginUser = async (payload) => {
  const { data } = await axiosInstance.post("users/login", payload);
  return data;
};
