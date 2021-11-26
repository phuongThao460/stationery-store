import axiosClient from "./apiClient";

const productApi = {
  getAll: () => {
    const url = "/san_pham/";
    return axiosClient.get(url);
  },
  getById: (params) => {
    const url = "/san_pham/";
    return axiosClient.get(url, { params });
  },
};

export default productApi;
