import { useState } from "react"
import { ProfileInfo } from "../components/ProfileInfo"
import { Search } from "../components/Search"
import { Repository } from "../components/Repository"
import { UserProps } from "../utils/types"
import { ReposProps } from "../utils/types"

export function Home() {
    const [userData, setUserData] = useState<UserProps | null>(null)
    const [reposData, setReposData] = useState<ReposProps[]>([])

    const handleSearch = (data: UserProps) => {
        setUserData(data) // Passando dados que são do tipo UserProps
    }

    const handleShowRepos = (data: ReposProps[]) => {
        setReposData(data); // Atualiza a lista de repositórios corretamente
    };

    return (
        <main className="flex flex-col justify-center items-center">

            {userData && <ProfileInfo userData={userData} />}

            <Search showRepos={handleShowRepos} onSearch={handleSearch} />

            {reposData.length > 0 && reposData.map((repo, index) => (
                <Repository key={index} reposData={repo} />
            ))}
        </main>
    );
}