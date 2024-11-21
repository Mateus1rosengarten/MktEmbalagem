import Image from "next/image";


const AboutUs = () => {
    return (
        <div className="flex w-full p-8 flex-col">
            <div className="flex flex-col w-full p-8 sm:move-in move-in-mobile">
            <div className="w-full md:w-1/2">
                <h1 className="font-bold font-varela text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-2">Sobre Nos</h1>
                <h2 className="font-insignia text-[#757575] text-lg sm:text-lg lg:text-xl xl:text-2xl tracking-wide fade-in tracking-wide lg:tracking-widest">Somos especialistas no completo desenvolvimento de projetos de impressão para embalagens, acompanhando cada etapa técnica e gráfica. Com mais de 20 anos de experiência, garantimos a adaptação da ideia criativa para diferentes processos de impressão, preservando a essência e originalidade da marca em cada detalhe.</h2>
            </div>
            <div className=" w-full md:w-3/4 h-[200px] sm:h-[300px] lg:h[350px] 2xl:h-[500px] relative mx-auto my-12 sm:my-8">
                <Image className="w-full" alt="foto Empresa" src={"/escritorio.jpg"} layout='fill' objectFit="cover" />
                
            </div>
            <div className="flex w-full justify-end">
            <div className="w-full md:w-1/2 mt-6">
            <h1 className="font-bold font-varela text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-2">Nossos valores</h1>
            <h2 className="font-insignia text-[#757575] text-lg sm:text-lg lg:text-xl xl:text-2xl   tracking-wide lg:tracking-widest fade-in">
            Nosso compromisso é entregar embalagens que materializem a identidade da marca e proporcionem uma experiência íntima para o consumidor. Gerenciamos a arte desde o conceito até a aprovação final, com rigor técnico em padrões de cor e excelência no acabamento, criando conexões autênticas e duradouras.
            </h2>
            </div>
            </div>
            </div>
            <div className="h-[250px] sm:h-[400px] relative w-[100vw] -mx-12 -mb-12 mt-20">
                <Image className="w-full" alt="foto Empresa" src={"/equipe.jpeg"} layout='fill' objectFit="cover" />                
            </div>
            
        </div>

    );
};

export default AboutUs;