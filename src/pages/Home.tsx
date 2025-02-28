import { ProfileInfo } from "../components/ProfileInfo"
import { Search } from "../components/Search"
import { Repository } from "../components/Repository" 

export function Home() {
    return (
        <main className="flex flex-col justify-center items-center">
           <ProfileInfo />

           <Search />

           <Repository />
           <Repository />
           <Repository />
           <Repository />
           <Repository />
           <Repository />
           <Repository />
           <Repository />
           <Repository />
        </main>
    )
}