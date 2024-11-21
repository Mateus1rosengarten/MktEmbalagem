'use client'
import Link from "next/link";
import React, { useState } from "react";
import Map from "./map";
import Swal from "sweetalert2";
import { SendEmail } from "../../../utils/sendEmail";
import ReCAPTCHA from "react-google-recaptcha"
import {UilLocationPinAlt,UilClock, UilEnvelopes, UilIncomingCall,UilEdit,UilChatBubbleUser} from '@iconscout/react-unicons'

export type Costumer = {
    costumerName: string;
    costumerLastName: string;
    costumerEmail: string;
    costumerNumber: string;
    costumerCity: string | null;
    costumerText: string | null;
    ufValue: string | null;
    captchaToken: string | null;
}

const Contact = () => {

type Option = {
    value: string;
    label: string;
}    


    const [isDrop,setIsDrop] = useState<boolean>(false)
    const [costumerInfo,setCostumerInfo] = useState<Costumer>({
        costumerName: '',
        costumerLastName: '',
        costumerEmail: '',
        costumerNumber: '',
        costumerCity: '',
        costumerText: '',
        ufValue : '',
        captchaToken: null
    })
 


    const phoneNumber = "+551150895888";
    const whatsappLink = `https://wa.me/${phoneNumber}`;



    const options: Option[] = [
    { value: 'AC', label: 'AC' },
    { value: 'AL', label: 'AL' },
    { value: 'AP', label: 'AP' },
    { value: 'AM', label: 'AM' },
    { value: 'BA', label: 'BA' },
    { value: 'CE', label: 'CE' },
    { value: 'DF', label: 'DF' },
    { value: 'ES', label: 'ES' },
    { value: 'GO', label: 'GO' },
    { value: 'MA', label: 'MA' },
    { value: 'MT', label: 'MT' },
    { value: 'MS', label: 'MS' },
    { value: 'MG', label: 'MG' },
    { value: 'PA', label: 'PA' },
    { value: 'PB', label: 'PB' },
    { value: 'PR', label: 'PR' },
    { value: 'PE', label: 'PE' },
    { value: 'PI', label: 'PI' },
    { value: 'RJ', label: 'RJ' },
    { value: 'RN', label: 'RN' },
    { value: 'RS', label: 'RS' },
    { value: 'RO', label: 'RO' },
    { value: 'RR', label: 'RR' },
    { value: 'SC', label: 'SC' },
    { value: 'SP', label: 'SP' },
    { value: 'SE', label: 'SE' },
    { value: 'TO', label: 'TO' },
];

const onSubmit = () => {
    SendEmail(costumerInfo)


}

const toggleDropdown = () => {
    setIsDrop(!isDrop);
}

const handleSelect = (state:string) => {
    setCostumerInfo({...costumerInfo,ufValue:state})
    setIsDrop(false);
}

const handleCaptcha = (token:string | null) => {
    setCostumerInfo({...costumerInfo,captchaToken:token});

};

const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!costumerInfo.costumerName || !costumerInfo.costumerLastName || !costumerInfo.costumerEmail || !costumerInfo.costumerNumber || !costumerInfo.captchaToken) {
        console.log(costumerInfo)
        await Swal.fire({
            icon:'error',
            title:'Ops!',
            html:'<span className="font-insignia text-bold">Preencha todos os Campos requisitados.</span>',
            timerProgressBar: true,
            showConfirmButton:false,
            showCloseButton:true,
            timer:5000,
        })
        return;
    }

  

    await Swal.fire({
        icon:'success',
        title:'Sucesso!',
        text:'Mensagem Enviada com sucesso, em breve entraremos em contato.',
        timerProgressBar: true,
        showConfirmButton:false,
        showCloseButton:true,
        timer:5000,
    })

    return onSubmit();
}



    return (
        <div> 
          
            <div className="px-1 py-10 sm:px-20 md:px-5 lg:px-10 xl:px-0 py-10 sm:py-20 flex flex-col md:flex-row justify-evenly xl:space-x-0 space-y-10 md:space-y-0">
            <div className="flex flex-col space-y-4 xl:space-y-8 px-7 "> 
              <h1 className="font-bold font-varela text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:mb-6"> Contato</h1>
              <h2 className="font-insignia text-[#757575] text-md sm:text-base md:text-base lg:text-lg xl:text-xl  xl:ml-4">
              <UilLocationPinAlt size="25" color="#757575" />
              <span className="text-base sm:text-base md:text-md lg:text-xl xl:text-xl font-varela font-bold text-[#757575] ">Rua:</span> Avenida Onze de Junho, 886, São Paulo, 04041-053. </h2>
              <h2 className="font-insignia text-[#757575] text-md sm:text-base md:text-base lg:text-lg xl:text-xl  xl:ml-4"><span className="text-base sm:text-base  md:text-md lg:text-xl xl:text-xl font-varela font-bold">
              <UilClock size="20" color="#757575" />
                Funcionamento:</span> Seg/Sex das 7:00 as 19:00. </h2>
              <h2 className="font-insignia text-[#757575] text-md sm:text-base md:text-base lg:text-lg xl:text-xl xl:ml-4"> <span className="text-base sm:text-base md:text-md lg:text-xl xl:text-xl font-varela font-bold">
              <UilEnvelopes size="20" color="#757575" />
                Email:</span> contato.mkt@mktembalagem.com.br</h2>

              <h2 className="font-insignia text-[#757575] text-md sm:text-base md:text-base md:text-lg lg:text-lg xl:text-xl xl:ml-4">
              <UilIncomingCall size="20" color="#757575" />
                <span className="text-base sm:text-base  md:text-md lg:text-xl xl:text-xl font-varela font-bold">Telefone:</span> +55 11 5089 5888.</h2>



            </div>
                <Map />
            </div>
        <div className="w-full h-full md:mt-10 mb-10 flex flex-col md:justify-around xl:justify-around md:flex-row lg:px-30">
            <div className="flex flex-col gap-y-6 md:gap-y-8 my-12 md:mb-0 p-6 xl:pl-0 lg:py-auto">
                <h2 className="text-lg sm:text-md lg:text-lg xl:text-2xl font-varela text-center">

                    <UilChatBubbleUser  size="30" color="#757575"/>
                    Conversar com +55 11 5089 5888 no WhatsApp:
                    </h2>
                <Link className="w-full flex" href={whatsappLink} target='_blank'>
                <button className="sm:w-1/3 md:w-1/2 mx-auto border rounded-3xl p-4 font-insignia text-white bg-[#128C7E] shadow-lg">Iniciar Conversa</button>
                </Link>
                <hr className="md:mt-6 md:mb-6" />
                <h3 className="font-insignia mx-auto xl:text-lg text-[#757575]">Ainda não tem o WhatsApp?</h3>
                <a href="https://www.whatsapp.com/download" target='_blank' className="font-varela mx-auto -mt-6 text-[#39b3ed] xl:text-lg">Baixar</a>
            </div>
            <form onSubmit={handleSubmit} className="relative flex flex-col gap-y-8 w-full md:w-1/3 p-6 md:pl-8 xl:pr-12 pb-6 md:min-w-[400px]">
                
            <h1 className="text-lg sm:text-md md:text-lg lg:text-xl xl:text-2xl font-varela text-center"><UilEdit size="25" color="#757575"/>Mande uma mensagem para nos!</h1>

                <div className="relative">
                    <label htmlFor="name" className="sm:text-sm md:text-md font-bold font-insignia text-[#757575]">
                        Nome Completo <span className="absolute text-[#DC143C] top-1 ml-1"> * </span>
                    </label>
                    <div className="flex gap-x-4">
                    <input type="text" placeholder="Nome" className="w-full rounded-md border border-gray-200  mt-2 p-2 font-varela"
                      onChange={(event) => setCostumerInfo({...costumerInfo ,costumerName: event.target.value})}/>
                    <input type="text" placeholder="Sobrenome" className="w-full rounded-md border border-gray-200  mt-2 p-2 font-varela"
                      onChange={(event) => setCostumerInfo({...costumerInfo ,costumerLastName: event.target.value})}/>
                    </div>

                </div>
                <div className="relative">
                    <label htmlFor="email" className="sm:text-sm md:text-md font-bold font-insignia text-[#757575]">
                        Contato <span className="absolute text-[#DC143C] top-1 ml-1"> * </span>
                    </label>
                    <div className="flex gap-x-4">
                    <input placeholder="Email" type="email" className="w-full rounded-md border border-gray-200 mt-2 p-2 font-varela"
                      onChange={(event) => setCostumerInfo({...costumerInfo ,costumerEmail: event.target.value})}/>
                    <input placeholder="Telefone" type="text" className="w-full rounded-md border border-gray-200 mt-2 p-2 font-varela"
                    onChange={(event) => setCostumerInfo({...costumerInfo ,costumerNumber: event.target.value})}/>

                    </div>

                </div>
                <div>
                    <label htmlFor="email" className="sm:text-sm md:text-md font-bold font-insignia text-[#757575]">
                        Localidade
                    </label>
                    <div className="flex gap-x-4">
                    <input placeholder="Cidade" type="text" className="w-full rounded-md border border-gray-200 mt-2 p-2 font-varela"
                     onChange={(event:React.ChangeEvent<HTMLInputElement>) => setCostumerInfo({...costumerInfo ,costumerCity: event.target.value})}/>
                    <div className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="w-full rounded-md border border-gray-200 mt-2 p-2 text-left flex justify-center items-center font-insignia"
                                    type="button"
                                >
                                    {costumerInfo.ufValue || "UF"}
                                    <span className="ml-2 ">{isDrop ? "▲" : "▼"}</span>
                                </button>

                                {isDrop && (
                                    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg max-h-40 overflow-y-auto">
                                        {options.map((option) => (
                                            <li
                                                key={option.value}
                                                onClick={() => handleSelect(option.value)}
                                                className="p-2 hover:bg-gray-200 cursor-pointer font-insignia"
                                            >
                                                {option.label}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                    </div>

                </div>
                <div>
                <label htmlFor="msg" className="sm:text-sm md:text-md font-bold font-insignia text-[#757575]">
                    Mensagem
                    </label>
                    <textarea className="w-full rounded-md border border-gray-200 mt-2 p-2 resize-none font-varela"
                     onChange={(event) => setCostumerInfo({...costumerInfo ,costumerText: event.target.value})}/>

                </div>
                <p className="font-sans -mt-8 text-sm">Ao enviar este formulário, você concorda com nossa <a href="/policy" target='blank' className="text-[#39b3ed] underline"> Política de Privacidade</a>. </p>
                <div className="flex flex-row">
                <ReCAPTCHA size="compact" className="-mt-4" sitekey="6Lf_dX0qAAAAADzKNCJh3jBe84M_akHDwhdal4A6"
                onChange={handleCaptcha} />
                <span className="text-[#DC143C] top-1 ml-1 font-bold font-insignia"> * </span>

                </div>
                <button type='submit' className="absolute bottom-20 right-8 md:right-12 w-1/3 md:w-1/3 ml-6 sm:ml-6 md:ml-8 px-3 md:px-4 p-2 text-white border bg-[#128c7e] rounded-lg font-insignia">Enviar</button>
               
            </form>
           


        </div>
        </div>

    );
};

export default Contact;