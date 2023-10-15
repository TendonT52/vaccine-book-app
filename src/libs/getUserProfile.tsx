export default async function getUserProfile(token: string) {
    const resp = await fetch('http://localhost:5001/api/v1/auth/me', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    if (!resp.ok) {
        throw new Error('ERROR: Something went wrong with getting user profile')
    }
    return await resp.json()
}