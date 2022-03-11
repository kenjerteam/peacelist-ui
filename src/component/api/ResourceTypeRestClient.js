export async function getAllResourceTypes() {
    const response = await fetch('/api/resource/type');
    return await response.json();
}