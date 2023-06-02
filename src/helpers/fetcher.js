//fetches and returns data from the given api endpoint

const BASE_URL = 'http://localhost:3001';

const fetcher = async (endpoint) => {
    const responseObject = {errorMessage: '', data: []};
    try {
        const response = await fetch(BASE_URL + endpoint);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        responseObject.data = await response.json();
        return responseObject;
        
    } catch(error) {
        responseObject.errorMessage = error.message;
        return responseObject;
    }
}

export default fetcher;