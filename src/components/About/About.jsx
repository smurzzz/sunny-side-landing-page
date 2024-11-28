import transform from "../images/desktop/transform.jpg"
import stand from "../images/desktop/stand.jpg"
import mobileTransform from "../images/mobile/mobileTransform.jpg"
import mobileStand from "../images/mobile/mobileStand.jpg"
import { useEffect, useState } from "react"
import Infographic from "./Infographic"


const About = () => {
    const [images, setImages] = useState({
        transform: window.innerWidth < 760 ? mobileTransform : transform,
        stand: window.innerWidth < 760 ? mobileStand : stand
    })

    useEffect(() => {
        const handleResize = () => {
            setImages({
                transform: window.innerWidth < 760 ? mobileTransform : transform,
                stand: window.innerWidth < 760 ? mobileStand : stand
            })
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return(
        <>
            <section id="about" className="grid md:grid-cols-2 w-full grid-cols-1">
                <img
                 src={images.transform}
                 alt="transform"
                 className="order-1 md:order-2 md:w-full"
                 />
                <div className="flex flex-col lg:text-left text-center order-2 md:order-1 justify-center lg:px-[100px] py-[30px] sm:px-[15px] px-[50px]">
                    <h2 className="title font-[800] text-3xl lg:text-5xl ">Transform your brand</h2>
                    <p className="mt-3 text-Darkgrayishblue">
                        We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
                    </p>

                    <div className="mt-5">
                        <h2 className="title font-[800] text-xl inline-block relative">
                            Learn more
                            <div className="absolute h-2 rounded-md bg-Yellow w-full left-0 bottom-[-5px]"></div>
                        </h2>
                    </div>
                </div>
            </section>

            <div className="grid md:grid-cols-2 grid-cols-1">
                <img
                 src={images.stand}
                 alt="transform"
                 className="md:w-full"
                 />
                 <div className="flex flex-col lg:text-left text-center order-2 md:order-1 justify-center lg:px-[100px] sm:py-[15px] py-[30px] px-[50px] sm:px-[15px]">
                    <h2 className="title font-[800] text-3xl lg:text-5xl ">Stand out to the right audience</h2>
                    <p className="mt-3 text-Darkgrayishblue">
                    Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
                    </p>

                    <div className="mt-5">
                        <h2 className="title font-[800] text-xl inline-block relative">
                            Learn more
                            <div className="absolute h-2 rounded-md bg-Softred w-full left-0 bottom-[-5px]"></div>
                        </h2>
                    </div>
                </div>
            </div>

            <div className="h-[700px] flex md:flex-row flex-col">
                <Infographic/>
            </div>
        </>
    )
}

export default About