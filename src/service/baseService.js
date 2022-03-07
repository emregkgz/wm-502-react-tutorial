import { apiUrl } from "../env/config";

export const baseManager = {
    get: async (url) => {

        let response = [];

        await fetch(apiUrl + url)
            .then((res) => res.json())
            .then((data) => {
                response = data;
            })

        return response;

    },
    add: async (url, data) => {

        let response = {};

        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

       await fetch(apiUrl + url, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                response = data;
            })

        return response;
    }

}
