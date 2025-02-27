import avatarPng from '../assets/avatar.png'
import visitSvg from '../assets/visit.svg'
import githubSvg from '../assets/github.svg'
import typeSvg from '../assets/type.svg'
import followersSvg from '../assets/followers.svg'


export function ProfileInfo() {
    return (
        <div className='flex justify-between items-center max-w-[864px] h-[212px] p-8 bg-blue-dark-100 rounded-xl mt-[-85px] gap-8 shadow'>
            <div className="rounded-lg w-[148px] h-[148px] overflow-hidden flex-shrink-0">
                <img src={avatarPng} alt="Foto de perfil do usuário" className="w-full h-full object-cover block" />
            </div>

            <div className='flex flex-col justify-between w-full h-full'>
                <div className='flex justify-between items-start w-full'>
                    <h2 className='text-2xl text-white'>Cameron Williamson</h2>

                    <a href="https://github.com/cameronwilliamson" target='_blank' className='flex items-center justify-center gap-2 uppercase text-blue text-xs hover:text-purple-500 hover:underline'>
                        github
                        <img src={visitSvg} alt="Ícone de visitar uma página" />
                    </a>
                </div>

                <p className='text-gray-200 font-normal'>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

                <div className='flex gap-6'>
                    <span className='flex items-center gap-2 text-gray-100'>
                        <img src={githubSvg} alt="Ícone de GitHub" className='w-4.5 h-4.5' />
                        cameronwilliamson
                    </span>

                    <span className='flex items-center gap-2 text-gray-100'>
                        <img src={typeSvg} alt="Ícone do tipo" className='w-4.5 h-4.5' />
                        Rocketseat
                    </span>

                    <span className='flex items-center gap-2 text-gray-100'>
                        <img src={followersSvg} alt="Ícone de seguidores" className='w-4.5 h-4.5' />
                        32 seguidores
                    </span>
                </div>
            </div>
        </div>
    )
}