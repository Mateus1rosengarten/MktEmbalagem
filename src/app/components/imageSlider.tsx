"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";




interface ImageSliderProps {
    firstImage : StaticImageData | string;
    secondImage: StaticImageData | string;
    thirdImage: StaticImageData | string;

}


const ImageSlider:React.FC<ImageSliderProps> = ({firstImage,secondImage,thirdImage}) => {

    const images  = [
        firstImage,
        secondImage,
        thirdImage,
    ]
    const [index,setIndex] = useState<number>(0)
    const [hover,setHover] = useState<boolean>(false)

    const prevSlide = () : void => {
        setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }

    const nextSlide = () : void => {
       setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    useEffect(() => {
        const interval = setInterval(() => {
           if(!hover){
           nextSlide()};
        },8000);
    return () => {
        clearInterval(interval);
    }} , [hover])


    const onHover = () : void => {
        setHover(true);
    };

    const offHover = () : void => {
        setHover(false);
    };
     
    
    
    return (
        <div className="relative w-[100vw] sm:w-full sm:mt-20 z-0">
            <div className="relative w-[100vw] sm:w-full -ml-0 sm:ml-0 h-[300px] sm:h-[360px] md:h-[460px] lg:h-[560px] mx-12 group hover:-translate-y-1 fade-in"
            onMouseOver={onHover}
            onMouseLeave={offHover}
            >
            <Image
            src={images[index]}
            alt={`Carousel Imagem numero${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="sm:rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
            />
        </div>
        <ChevronLeft onClick={prevSlide} className="sm:hidden absolute left-0 top-1/3 ml-4 text-white group-hover:text-sky-900" />
        <button 
        className="hidden sm:block absolute left-0 sm:left-[-3rem] top-1/2 h-[260px] sm:h-[360px] md:h-[460px] rounded-xl  mx-1 transform -translate-y-1/2 bg-white text-white p-2 group"
        onClick={prevSlide}
        >
        <ChevronLeft className="text-gray-400 group-hover:text-sky-900" />
        

        </button>
        <ChevronRight onClick={nextSlide} className="sm:hidden absolute right-0 top-1/3 mr-4 text-white group-hover:text-sky-900" />
        <button 
        className="hidden sm:block absolute right-0 sm:right-[-3rem] top-1/2 h-[260px] sm:h-[360px]  md:h-[460px] rounded-xl  mx-1 transform -translate-y-1/2 bg-white text-white p-2 group"
        onClick={nextSlide}
        >
        <ChevronRight onClick={nextSlide} className="text-gray-400 group-hover:text-sky-900" />

        </button>
      <div className="flex justify-center mt-4">
        { images.map((_,i) => (
            <div
            key={i}
            className={`h-1 w-4 sm:w-6 md:w-10 mx-1 rounded-xl ${
                i === index ? "bg-sky-900"  : "bg-gray-300"
            }`}
            >
            </div>
        ))

        }

      </div>
        
        </div>

    );
};

export default ImageSlider;