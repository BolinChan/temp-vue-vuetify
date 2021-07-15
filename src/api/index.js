import axios from "axios";
import router from "../router";

const service = axios.create({
	timeout: 60000,
	baseURL: process.env.BASE_URL,
});

/**
 * 请求前拦截
 * 用于处理需要在请求前的操作
 */
service.interceptors.request.use(
	config => {
		const token = localStorage.getItem("token");
		if (token) config.headers["Authorization"] = token;
		return config;
	},
	error => Promise.reject(error)
);

/**
 * 请求响应拦截
 * 用于处理需要在请求返回后的操作
 */
service.interceptors.response.use(
	response => {
		const responseCode = response.status;
		if (responseCode === 200) return Promise.resolve(response);
		return Promise.reject(response);
	},
	error => {
		// 断网、超时
		if (!error.response) {
			if (error.message.includes("timeout")) {
				console.log("请求超时，请检查网络是否连接正常");
			} else {
				console.log("请求失败，请检查网络是否已连接");
			}
			return;
		}

		const responseCode = error.response.status;
		switch (responseCode) {
			case 401:
				router.replace({
					path: "/login",
					query: { redirect: router.currentRoute.fullPath },
				});
				break;
			case 403:
				console.log("登录信息过期，请重新登录");
				localStorage.removeItem("token");
				setTimeout(() => {
					router.replace({
						path: "/login",
						query: { redirect: router.currentRoute.fullPath },
					});
				}, 1000);
				break;
			case 404:
				console.log("网络请求不存在");
				break;
			default:
				console.log(error.response.data.message);
		}
		return Promise.reject(error);
	}
);

export default service;

export const uploadFile = formData => {
	const res = service.request({
		method: "post",
		url: "/upload",
		data: formData,
		headers: { "Content-Type": "multipart/form-data" },
	});
	return res;
};

// async uploadFile (e) {
//     const file = document.getElementById('file').files[0]
//     const formdata = new FormData()
//     formdata.append('file', file)
//     await uploadFile(formdata)
//   }
