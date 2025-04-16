import { useState } from "react"
import { getApiUserGithub } from "../utils/apiRequest"
import { getApiUserGithubRepos } from "../utils/apiRequest"
import { UserProps } from "../utils/types"
import { ReposProps } from "../utils/types"

interface SearchProps {
    onSearch: (data: UserProps) => void
    showRepos: (data: ReposProps[]) => void
}


export function Search({ onSearch, showRepos }: SearchProps) {
    const [username, setUsername] = useState("")

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault() 
        const userData = await getApiUserGithub(username.replace(/\s+/g, ""))
    
        if (userData) {
            onSearch(userData);
        } 

        const reposData = await getApiUserGithubRepos(username.replace(/\s+/g, ""))

        if (reposData) {
            showRepos(reposData)
        }

        setUsername("")
    }
    

    return (
        <form className="w-full max-w-[280px] mb-20 mt-6 sm:max-w-[560px] lg:max-w-[864px]" onSubmit={handleSearch}>
            <fieldset>
                <legend className="text-blue mb-3 font-bold sm:text-[18px]">Usuário</legend>

                <div className="flex justify-between items-center">
                    <input type="text" placeholder="Buscar usuário" className="w-[65%] bg-blue-dark-300 py-3 px-4 rounded-md border border-gray-500 text-white placeholder:text-gray-400 placeholder:text-sm sm:placeholder:text-[1rem] sm:w-[70%] lg:w-[80%]" value={username} onChange={(e) => setUsername(e.target.value)} />
    
                    <button type="submit" className="w-[25%] cursor-pointer bg-blue py-3 px-3 rounded-md hover:opacity-50 transition ease-in text-sm text-blue-dark-200 font-bold sm:text-[1rem] sm:w-[15%] lg:w-[10%]">Buscar</button>
                </div>
            </fieldset>
        </form>
    )
}


