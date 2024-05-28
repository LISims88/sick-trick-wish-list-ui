async function getTricks() {
    try {
        const response = await fetch('http://localhost:3001/api/v1/tricks');
        
        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);

        return data;
    } catch (error) {
        console.error("Something went wrong:", error.message);
        throw error;
    }
}

export default getTricks;