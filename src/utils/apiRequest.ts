import { UserProps } from "./types"
import { ReposProps } from "./types"

export async function getApiUserGithub(username: string): Promise<UserProps | null> {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
            throw new Error('Usuário não encontrado');
        }

        const data = await response.json();

        // Verifique se os dados realmente contêm as propriedades esperadas
        if (!data || !data.login || !data.name || !data.avatar_url) {
            throw new Error('Usuário não encontrado');
        }

        // Mapeando para o formato esperado
        const userData: UserProps = {
            name: data.name,
            login: data.login,
            avatar_url: data.avatar_url,
            followers: data.followers,
            company: data.company || 'Não cadastrado', // Definindo valor default para empresa
            bio: data.bio || 'Não disponível' // Definindo valor default para bio
        };

        return userData;

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
        alert(errorMessage);
        return null;
    }
}


export async function getApiUserGithubRepos(username: string): Promise<ReposProps[] | null> {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);

        if (!response.ok) {
            throw new Error('Repositório não encontrado')
        } 

        const data = await response.json()

        if (!Array.isArray(data) || data.length === 0) {
            throw new Error('Repositório não encontrado')
        }

        const reposData: ReposProps[] = data.map(repo => ({
            name: repo.name,
            html_url: repo.html_url,
            created_at: repo.created_at,
            language: repo.language
        }))

        return reposData

    } catch (error) {
        console.error(error)
        return null
    }
}