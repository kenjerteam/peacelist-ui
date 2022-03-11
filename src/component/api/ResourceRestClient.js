export async function getAllResources() {
    const response = await fetch('/api/resource');
    return await response.json();
}

export async function saveResource(data) {
    const response = await fetch(`/api/resource`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return await response.json();
}
