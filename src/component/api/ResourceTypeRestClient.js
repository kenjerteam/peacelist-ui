export async function getAllResourceTypes() {
    const response = await fetch('http://localhost:8080/api/resource/type', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
    return await response.json();
}