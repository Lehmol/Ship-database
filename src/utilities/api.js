const API_BASE_URL = "/api/api/v1";
const API_KEY = import.meta.env.VITE_MARINESIA_API_KEY;

//Get vessel profiles
export async function getVesselProfiles(page = 1, limit = 10, sort = 'name', order = 'asc') {
    try {
        const url = `${API_BASE_URL}/vessel/profile?page=${page}&limit=${limit}&sort=${sort}&order=${order}&key=${API_KEY}`;

        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        });

        if(!res.ok) {
            throw new Error(`Status: ${res.status}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Fel vid API-anrop:', error);
        throw error;
    }
};

// Get port profiles
export async function getPortProfiles(page = 1, limit = 10, sort = 'name', order = 'asc'){
    try {
        const url = `${API_BASE_URL}/port/profile?page=${page}&limit=${limit}&sort=${sort}&order=${order}&key=${API_KEY}`;

        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        });
        if(!res.ok) {
            throw new Error(`Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Fel vid API-anrop:', error);
        throw error;
    }
}