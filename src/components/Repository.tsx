export function Repository() {
    return (
        <a href="https://github.com/GiovanniNoda/projeto-cdz" target="_blank" className="bg-blue-dark-100 max-w-[864px] w-full flex flex-col rounded-xl p-4 border border-gray-400 cursor-pointer gap-12 hover:scale-105 transition ease-in">
            <div className="flex w-full justify-between items-center">
                <h3 className="text-blue text-xl font-semibold">Título do repositório</h3>

                <span className="bg-transparent border border-gray-200 text-gray-200 text-xs px-2 py-1 rounded-4xl">01/01/2020</span>
            </div>

            <div className="flex justify-between items-center">
                <a href="https://github.com/GiovanniNoda" target="_blank" className="text-gray-100 hover:text-purple-600 hover:underline">https://github.com/GiovanniNoda</a>

                <div className="flex items-center gap-2">
                    <div className="w-[12px] h-[12px] rounded-[50%] bg-blue"></div>

                    <h6 className="text-white font-semibold">Phyton</h6>
                </div>
            </div>
        </a>
    )
}