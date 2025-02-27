import coverPng from '../assets/cover.png'
export function Header() {
    return (
        <header className='flex justify-center items-center bg-cover bg-center h-52' style={{backgroundImage: `url(${coverPng})`}} data-testid='header'>
        </header>
    )
}