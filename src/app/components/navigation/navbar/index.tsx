import Link from "next/link"

interface NavBarProps {
    toggle: () => void;
    isOpen: boolean;
}

const NavBar: React.FC<NavBarProps> = ({toggle,isOpen}) => {
    return (
        <>
        <div className="w-full h-20 sm:h-24 bg-white  sticky top-0 z-10 shadow-lg ">
            <div className="container max-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <div className="flex">
                    <Link href='/'>
                    <p className="text-black font-bold mr-20 pl-10">Logo</p>
                    </Link>
                    <ul className="hidden sm:flex gap-x-12 text-white ml-6" >
                        <li>
                            <Link href='/sobre' className="relative group">
                            <span className="text-xl font-sans pb-4 text-black ">

                          Sobre nós
                          </span>
                          <span className="absolute left-0 bottom-0 top-[1.1rem]  h-[0.15rem] w-full bg-sky-950  rounded scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-900 ease-in-out"></span>

                            </Link>

                        </li>
                        <li>
                            <Link href='/precos' className="relative group">
                            <span className="text-xl font-sans pb-4 text-black ">
                             Serviços
                             </span>
                             <span className="absolute left-0 bottom-0 top-[1.1rem] h-[0.15rem] w-full bg-sky-950  rounded scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-900 ease-in-out"></span>

                            </Link>

                        </li>
                        <li>
                        <Link href="/contato" className="relative group">
                                        <span className="text-xl font-sans pb-4 text-black ">
                                            Nos Contate
                                        </span>
                                        <span className="absolute left-0 bottom-0 top-[1.1rem]  h-[0.15rem] w-full bg-sky-950  rounded scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-900 ease-in-out"></span>

                                    </Link>
                        </li>
                    </ul>
                    </div>
                <button onClick={toggle} className="sm:hidden flex items-center justify-center bg-blue-500 text-white p-2 rounded"
                style={{opacity: !isOpen ? '1' : '0.5'}}>
                <svg xmlns="http://www.w3.org/2000/svg"
         width="30"
         height="30"
         viewBox="0 0 24 24">
         <path fill="#fff"
               d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
    </svg>
                </button>
                </div>
            </div>


        </div>
        </>

    );

};

export default NavBar;