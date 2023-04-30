import Logo from '../assets/logo-todo.svg'

export function Header() {
    return(
        <header className="bg-base-700 h-[200px] flex items-center justify-center">
            <img src={Logo} alt="Logotipo Todo" />
        </header>
    )
}