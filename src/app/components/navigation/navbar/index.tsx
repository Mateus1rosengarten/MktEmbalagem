import Image from "next/image";
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
                    <div className="flex md:space-x-24 space-x-20">
                    <div className="w-40 h-8 relative">
                    <Link href='/'>
                    <Image src='/logo.png' alt="mktEmbalagem" layout='fill' className="sm:ml-6"/>
                    </Link>
                    </div>
                    <ul className="hidden sm:flex gap-x-10 md:gap-x-12 text-white ml-6" >
                        <li>
                            <Link href='/sobre' className="relative group">
                            <span className="sm:text-md lg:text-lg 2xl:text-xl font-sans pb-4 text-black ">

                          Sobre nós
                          </span>
                          <span className="absolute left-0 bottom-0 top-[1.1rem]  h-[0.15rem] w-full bg-[#03346E] rounded scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-900 ease-in-out"></span>

                            </Link>

                        </li>
                        <li>
                            <Link href='/precos' className="relative group">
                            <span className="sm:text-md lg:text-lg 2xl:text-xl font-sans pb-4 text-black ">
                             Serviços
                             </span>
                             <span className="absolute left-0 bottom-0 top-[1.1rem] h-[0.15rem] w-full bg-[#03346E] rounded scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-900 ease-in-out"></span>

                            </Link>

                        </li>
                        <li>
                        <Link href="/contato" className="relative group">
                                        <span className="sm:text-md lg:text-lg 2xl:text-xl font-sans pb-4 text-black ">
                                            Nos Contate
                                        </span>
                                        <span className="absolute left-0 bottom-0 top-[1.1rem]  h-[0.15rem] w-full bg-[#03346E]   rounded scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-900 ease-in-out"></span>

                                    </Link>
                        </li>
                    </ul>
                </div>
                <button onClick={toggle} className="sm:hidden flex items-center justify-center bg-[#03346E] text-white p-2 rounded"
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