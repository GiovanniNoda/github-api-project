import { ReposProps } from "../utils/types"

interface RepositoryProps {
    reposData: ReposProps // Alterado para um array
}

export function Repository({ reposData }: RepositoryProps) {
    return (
            <a 
                key={reposData.name}
                href={reposData.html_url} 
                target="_blank" 
                className="bg-blue-dark-100 max-w-[864px] w-full flex flex-col rounded-xl p-4 border border-gray-400 cursor-pointer gap-12 hover:scale-105 transition ease-in mb-12"
            >
                <div className="flex w-full justify-between items-center">
                    <h3 className="text-blue text-xl font-semibold">{reposData.name}</h3>
                    <span className="bg-transparent border border-gray-200 text-gray-200 text-xs px-2 py-1 rounded-4xl">
                        {new Date(reposData.created_at).toLocaleString("pt-br", {
                            dateStyle: "short",
                        })}
                    </span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-gray-100 hover:text-purple-600 hover:underline">{reposData.html_url}</span>

                    {reposData.language &&
                        <div className="flex items-center gap-2">
                            <div className="w-[12px] h-[12px] rounded-[50%] bg-blue"></div>

                            <h6 className="text-white font-semibold">{reposData.language}</h6>
                        </div>
                    }
                </div>
            </a>
    )
}
