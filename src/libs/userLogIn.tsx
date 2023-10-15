export default async function userLogIn(email: string, password: string) {
    const resp = await fetch('http://localhost:5001/api/v1/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    if (!resp.ok) {
        throw new Error('ERROR: Something went wrong with user login')
    }
    return await resp.json()
}
