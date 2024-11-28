import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../images/desktop/Header.jpg"
import mobileHeader from "../images/mobile/mobileHeader.jpg"

const Hero = () => {
    const [srcImage, setSrcImage] = useState(
        window.innerWidth < 760 ? mobileHeader : Header
    );

    useEffect(() => {
        const handleResize = () => {
            setSrcImage(window.innerWidth < 760 ? mobileHeader : Header);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return(
        <>
            <div
             className="h-screen"
             style={{
                backgroundImage: `url(${srcImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
             }}>
                <Navbar/>

                
                <h1 className="text-center text-White font-[800] title text-5xl mt-[100px] uppercase tracking-widest">
                    We Are Creatives
                </h1>
             </div>
        </>
    )
}

export default Hero