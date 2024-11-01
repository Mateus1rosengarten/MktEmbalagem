import Link from "next/link";
import {UilLocationPinAlt, UilEnvelopes, UilIncomingCall} from '@iconscout/react-unicons'

const Footer = () => {


    const dateToday = new Date().getFullYear();
    const phoneNumber = "+9720534715942";
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    const linkedinLink = `https://www.linkedin.com/company/mkt-embalagens---ambev/`

    return (
        <div className="relative h-80 sm:h-100 w-full bg-[#0057a6]
        ] py-5 px-2 sm:p-16 z-10 shadow-2xl">
            <div className="flex sm:justify-between w-full h-full flex-col sm:flex-row space-y-8 sm:space-y-0"> 
            <div className="flex flex-col">
                <div className="hidden sm:block flex flex-col space-y-3 justify-center">
             <div className="flex flex-raw">
             <UilLocationPinAlt className="text-2xl sm:text-3xl" size="30" color="#757575" />
                <h2 className="text-sm sm:text-base font-varela sm:ml-2 text-white sm:pt-2 hover:underline cursor-pointer">Avenida Onze de Junho, 886, São Paulo, 04041-053.</h2> 
             </div>    
            <div className="flex flex-raw">
            <UilEnvelopes size="25" color="#757575" className="sm:text-2xl" />
                <h2 className="text-sm sm:text-base font-varela sm:ml-3 ml-1 text-white hover:underline cursor-pointer">contato.mkt@mktembalagem.com.br</h2> 
             </div>  
             <div className="flex flex-raw p-[0.2rem]">
             <UilIncomingCall size="25" color="#757575" className="text-2xl sm:text-3xl" />
            <p className="text-sm sm:text-base sm:ml-2 font-varela text-white hover:underline cursor-pointer">+55 11 5089 5888.</p>
            </div>
             </div>  
             <div className="absolute left-0 bottom-5 w-full flex p-0">
            <h1 className="font-sans text-white  m-auto sm:ml-11 text-sm"> <span className="mr-1">Copyright &copy;</span>{dateToday}  Mkt Embalagem.</h1>
            </div>
            </div>
           
           
            <div className="flex sm:flex-col space-y-6 pr-1 sm:mr-10 justify-evenly sm:justify-start">
                <ul className="flex flex-col space-y-2">
                <Link href='/sobre'>
                <li className="text-white text-md font-varela sm:text-base underline cursor-pointer">Sobre nós</li>
                </Link>
                <Link href='/precos'>
                <li className="text-white text-md font-varela sm:text-base underline cursor-pointer">Serviços</li>
                </Link>
                <Link href='contato'>
                <li className="text-white text-md font-varela sm:text-base underline cursor-pointer">Nos Contate</li>
                </Link>
                </ul>
                <div className="flex sm:justify-between space-x-2 sm:space-x-20">
                <Link className="mr-4 sm:mt-12 md:mt-16" href={linkedinLink} target="_blank">
                <span
                className="icon-[logos--linkedin-icon] sm:mr-6 text-4xl sm:text-3xl lg:text-5xl xl:text-7xl mt-6 lg:mt-0 cursor-pointer transition-transform duration-300 ease-in-out sm:hover:scale-110"/>
                </Link>
                <Link className="sm:fixed sm:bottom-8 md:bottom-6 lg:bottom-6 xl:bottom-0  rigth-0  z-1000" href={whatsappLink} target="_blank">
                <span
                className="icon-[logos--whatsapp-icon] mt-6 sm:mt-0 sm:ml-4 text-4xl sm:text-3xl lg:text-5xl xl:text-7xl cursor-pointer transition-transform duration-300 ease-in-out sm:hover:translate-x-2 sm:hover:-translate-y-2 sm:hover:rotate-3"/>
                </Link>
               
                </div>
            </div>

            </div>
           

        </div>

    )
};

export default Footer;