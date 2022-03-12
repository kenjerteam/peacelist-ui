export async function getAllResources() {
    const response = await fetch('http://localhost:8080/api/resource', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
    return await response.json();
}

export async function saveResource(data) {
    const response = await fetch(`http://localhost:8080/api/resource`, {
        method: 'POST',
        headers: [
            {'Accept': 'application/json'},
            {'Content-Type': 'application/json'}
        ],
        body: JSON.stringify(data)
    })
    return await response.json();
}
