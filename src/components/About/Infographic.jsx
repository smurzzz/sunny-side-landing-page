import photography from "../images/desktop/photography.jpg"
import graphic from "../images/desktop/graphic.jpg"
import mobilePhotography from "../images/mobile/mobilePhotography.jpg"
import mobileGraphic from "../images/mobile/mobileGraphic.jpg"

const Infographic = () => {
    return(
        <>
            <div className="flex w-full justify-end text-center sm:px-[50px] lg:px-[130px] py-5 md:py-10 md:w-1/2 md:h-[100%] h-full flex-col" style={{
                backgroundImage: `url(${graphic})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
                  <h2 className="title text-2xl md:text-3xl font-[800] mb-2 md:mb-5"> Graphic Design</h2>
                  <p className="text-Darkdesaturatedcyan">Graphic design Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention. </p>

            </div>
            <div className="flex w-full justify-end text-center px-[50px] lg:px-[140px] py-5 md:py-10 md:w-1/2 md:h-[100%] h-full flex-col" style={{
                backgroundImage: `url(${photography})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
                <h2  className="title text-2xl md:text-3xl font-[800] mb-2 md:mb-5">Photography</h2>
                <p className="text-Darkdesaturatedcyan">Increase your credibility by getting the most stunning, high-quality photos that improve your business image. </p>
            </div>
            
        </>
    )
}

export default Infographic