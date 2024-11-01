import Link from 'next/link'

interface SideBarProps {
    toggle: () => void;
    
}


const SideBar: React.FC<SideBarProps> = ({toggle}) => {
    return (
        <>
        <div className="sm:hidden sidebar-container fixed w-full h-full top-0 left-0 bg-white mt-20 pt-[20px] z-10" >
         <button className="absolute right-5 text-black" onClick={toggle}>
         <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"> 
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
         </button>
         <ul className="flex flex-col items-center justify-center gap-y-8 pt-[70px]">
         <li>
            <Link href="/" onClick={toggle}>
            <p className="text-2xl font-varela">Inicio</p>  
            </Link>
            </li>
            <li>
            <Link href="/sobre" onClick={toggle}>
            <p className="text-2xl font-varela">Sobre nós</p>  
            </Link>
            </li>
            <li>
            <Link href="/precos" onClick={toggle}>
            <p className="text-2xl font-varela">Serviços</p>  
            </Link>
            </li>
            <li>
            <Link href="/contato" onClick={toggle}>
            <p className="text-2xl font-varela">Contato</p>  
            </Link>
            </li>

         </ul>

        </div>

        </>

    );

};

export default SideBar;