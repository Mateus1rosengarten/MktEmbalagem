'use client'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';


const Map: React.FC = () => {


    const mapRef = useRef<L.Map | null>(null);

    const svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#DC143C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z"></path>
    <circle cx="12" cy="9" r="3"></circle>
</svg>
`;

    const mapIcon = L.divIcon({
        className: 'custom-icon',
        html: svgIcon,
        iconSize: [50,45],
        iconAnchor: [25,84],
        popupAnchor: [0, -71],
    })

  
 

    useEffect(() => {
     

        if(mapRef.current === null) {
     
     mapRef.current = L.map('map',{
        zoomControl:true,
     }).setView([-23.547407, -46.702532],40);
     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',

     }).addTo(mapRef.current);

     L.marker([-23.601189444804568, -46.645443604243816] ,{icon: mapIcon }).addTo(mapRef.current).bindPopup('<b>MKT Embalagem</b><br>R. Vitorino de Carvalho, 282-556, Alto de Pinheiros').openPopup();
     mapRef.current.zoomControl.setPosition('bottomleft');   
    }

     return () => {
        if (mapRef.current) {
            mapRef.current.remove();
            mapRef.current = null;
        }
     }
},[])

  

    return (
        <div id='map' className="w-full md:w-1/2 h-[250px] sm:h-[400px] md:h-[450px] lg:h-[480px] xl:h-[600px] z-0 shadow-xl md:min-w-[400px]">

        </div>

    )

}

export default Map;