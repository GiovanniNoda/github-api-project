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
                className="bg-blue-dark-100 max-w-[280px] w-full flex flex-col rounded-xl p-4 border border-gray-400 cursor-pointer gap-12 hover:scale-105 transition ease-in mb-12 sm:max-w-[560px] lg:max-w-[864px]"
            >
                <div className="flex w-full justify-between items-center">
                    <h3 className="text-blue text-[1rem] font-semibold sm:text-xl">{reposData.name}</h3>
                    <span className="bg-transparent border border-gray-200 text-gray-200 text-[0.5rem] px-2 py-1 rounded-4xl sm:text-xs">
                        {new Date(reposData.created_at).toLocaleString("pt-br", {
                            dateStyle: "short",
                        })}
                    </span>
                </div>

                <div className="flex justify-between items-center gap-2">
                    <span className="text-gray-100 text-[0.625rem] hover:text-purple-600 hover:underline sm:text-[1rem]">{reposData.html_url}</span>

                    {reposData.language &&
                        <div className="flex items-center gap-2">
                            <div className="w-[8px] h-[8px] rounded-[50%] bg-blue sm:w-[12px] sm:h-[12px]"></div>

                            <h6 className="text-white text-[0.5rem] font-semibold sm:text-[1rem]">{reposData.language}</h6>
                        </div>
                    }
                </div>
            </a>
    )
}
