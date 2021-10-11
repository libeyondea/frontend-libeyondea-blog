import axios from 'axios';

const httpRequest = {
	get: ({ baseUrl = process.env.NEXT_PUBLIC_API_URL, url, token, params }) => {
		return axios({
			timeout: process.env.NEXT_PUBLIC_REQUEST_TIMEOUTL,
			method: 'get',
			baseURL: baseUrl,
			url: url,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token || ''
			},
			params: params
		});
	},
	post: ({ baseUrl = process.env.NEXT_PUBLIC_API_URL, url, token, data }) => {
		return axios({
			timeout: process.env.NEXT_PUBLIC_REQUEST_TIMEOUTL,
			method: 'post',
			baseURL: baseUrl,
			url: url,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token || ''
			},
			data: data
		});
	},
	put: ({ baseUrl = process.env.NEXT_PUBLIC_API_URL, url, token, data }) => {
		return axios({
			timeout: process.env.NEXT_PUBLIC_REQUEST_TIMEOUTL,
			method: 'put',
			baseURL: baseUrl,
			url: url,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token || ''
			},
			data: data
		});
	},
	delete: ({ baseUrl = process.env.NEXT_PUBLIC_API_URL, url, token, params }) => {
		return axios({
			timeout: process.env.NEXT_PUBLIC_REQUEST_TIMEOUTL,
			method: 'delete',
			baseURL: baseUrl,
			url: url,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token || ''
			},
			params: params
		});
	},
	upload: ({ baseUrl = process.env.NEXT_PUBLIC_API_URL, url, token, data, files }) => {
		const formData = new FormData();
		if (data) {
			for (let field in data) {
				formData.set(field, data[field]);
			}
		}
		if (files) {
			for (let field in files) {
				if (files[field]) {
					formData.append(field, files[field], files[field].name);
				}
			}
		}
		return axios({
			timeout: process.env.NEXT_PUBLIC_REQUEST_TIMEOUTL,
			method: 'post',
			baseURL: baseUrl,
			url: url,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'multipart/form-data',
				Authorization: 'Bearer ' + token || ''
			},
			data: formData
		});
	}
};

export default httpRequest;
