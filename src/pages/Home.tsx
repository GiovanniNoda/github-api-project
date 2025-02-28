import { ProfileInfo } from "../components/ProfileInfo"
import { Search } from "../components/Search"

export function Home() {
    return (
        <main className="flex flex-col justify-center items-center">
           <ProfileInfo />

           <Search />
        </main>
    )
}