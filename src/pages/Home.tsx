import { useState } from "react";
import { ProfileInfo } from "../components/ProfileInfo"
import { Search } from "../components/Search"
import { UserProps } from "../utils/userTypes"

export function Home() {
    const [userData, setUserData] = useState<UserProps | null>(null)

    const handleSearch = (data: UserProps) => {
        setUserData(data) // Passando dados que são do tipo UserProps
    }

    return (
        <main className="flex flex-col justify-center items-center">

            {userData && <ProfileInfo userData={userData} />}

            <Search onSearch={handleSearch} />
        </main>
    );
}