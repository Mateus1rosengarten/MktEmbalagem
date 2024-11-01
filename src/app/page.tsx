"use client"
import { useContext } from "react";
import { sideBarContext } from "./components/context/sidebarContext";
import ImageSlider from "./components/imageSlider";
import Image from "next/image";
import Link from "next/link";

 

export default function Home() {

  const {isOpen} = useContext(sideBarContext);
  const images = {
    image1 : "/servicos.jpg",
    image2: "/servicos.jpg",
    image3: "/servicos.jpg"
  }

  

  return (
    <>
  
    <div className="flex flex-col space-y-10 container mx-auto sm:px-20 z-0"
    style={{opacity: isOpen ? 0 : 1}}>
    <ImageSlider
    firstImage={images.image1} 
    secondImage={images.image2}
    thirdImage={images.image3}/>

    <div className="flex justify-center flex-col w-full p-8 space-y-4 sm:space-y-10">
      <h1 className="font-sans font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:mx-auto text-center sm:text-start">Referência em impressão e desenvolvimento de embalagens</h1>
      <hr className="bg-[#757575]" />
      <div className="flex flex-col space-y-8 sm:space-y-16">
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 sm:mt-5 sm:mb-5">
      <h2 className="font-varela text-[#757575] text-lg sm:text-xl lg:text-2xl xl:text-3xl sm:flex-1 fade-in tracking-widest">A Mkt Emabalgem é uma referência no fornecimento de soluções personalizadas para desenvolvimento e impressão em embalagens.Com mais de 20 anos de atuação no mercado, nossos serviços vão desde a conceitualização da ideia até a impressão final e são voltados para marcas que buscam excelência e diferenciação no mercado.</h2>
     <div className="relative w-full mt-4 sm:mt-0 sm:w-1/2 h-[200px] sm:h-[600px] md:h-[500px] lg:h-[450px]">
      <Image src={"/latasFoto.png"} layout='fill' objectFit="cover" alt="foto Empresa" className="fade-in"/>
      </div>

    
      </div>
      <h2 className="font-varela text-[#757575] text-lg sm:text-xl lg:text-2xl xl:text-3xl fade-in tracking-widest">Nossos parceiros vão desde pequenas e médias empresas até grandes multinacionais, refletindo nosso compromisso inabalável com a qualidade. Essas parcerias com marcas de diferentes portes, que buscam excelência e diferenciação, são fruto de nossa dedicação a processos rigorosos e à inovação constante. Além disso, investimos continuamente em nossa equipe e em melhorias de processos, garantindo que todos os nossos clientes recebam o melhor.</h2>
     
</div>
<div className="flex flex-col w-ful w-full h-[150px] sm:h-[350px] lg:h-[450px] relative mx-auto mt-6">
<Image src={"/processo.jpeg"} layout='fill' objectFit="cover" className="w-full" alt="foto Empresa" />   
            </div>
            <h1 className="font-sans font-medium text-2xl sm:text-4xl text-[#757575] mx-auto"></h1>
            <hr />
            <div className="flex flex-col mx-auto space-y-4  sm:flex-row sm:mx-0 sm:space-y-0 sm:justify-around sm:space-x-4">
              <div className="relative w-[100px] h-[100px] sm:w-[100px] sm:h-[80px] md:w-[110px] md:h-[110px] lg:w-[160px] lg:h-[160px] xl:w-[180px] xl:h-[180px]">
                <Link href={"https://www.pepsico.com/"} target="_blank">
              <Image src={"/pepsico.jpeg"} alt='pepsico' layout="fill" objectFit="contain" className="cursor-pointer"/>
              </Link>
              
              </div>
                <div className="relative w-[100px] h-[100px] sm:w-[100px] sm:h-[80px] md:w-[110px] md:h-[110px] lg:w-[160px] lg:h-[160px] xl:w-[180px] xl:h-[180px]">
                  <Link href={"https://www.ab-inbev.com/"} target="_blank">
              <Image src={"/ambev.png"} alt='pepsico' layout="fill" objectFit="contain" className="cursor-pointer"/>
              </Link>
             

              </div>
              
              <div className="relative w-[100px] h-[100px] sm:w-[100px] sm:h-[80px] md:w-[110px] md:h-[110px] lg:w-[160px] lg:h-[160px] xl:w-[180px] xl:h-[180px]">
                <Link href={"https://www.kraftheinzcompany.com/"} target="_blank">
              <Image  src={"/kraftHeinz.jpg"} alt='pepsico' layout="fill" objectFit="contain" className="cursor-pointer"/>
              </Link>
              

              </div>

            </div>

    </div>


    </div>
    
    </>
    
  );
}
