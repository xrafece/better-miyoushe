export function getCookie(name: string) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts && parts.length === 2) {
        const part = parts.pop();
        return part ? part.split(';').shift() : null;
    }
    return null
}
