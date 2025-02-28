export async function getApiUserGithub(username: string) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`)

        if (!response.ok) {
            throw new Error('Usuário não encontrado')
        }

        const data = await response.json();
        return data;
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error)
        alert(errorMessage)
    }
}
export async function getApiReposGithub() {
    try {
        const response = await fetch('https://api.github.com/users/GiovanniNoda/repos')

        if(!response.ok) {
            throw new Error('Repositório não encontrado')
        }

        const data = await response.json()
        return data

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error)
        alert(errorMessage)
    }
}