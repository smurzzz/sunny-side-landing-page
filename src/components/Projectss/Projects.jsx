import Cone from "../images/desktop/Cone.jpg"
import milkBottles from "../images/desktop/milkBottles.jpg"
import Orange from "../images/desktop/Orange.jpg"
import sugarCubes from "../images/desktop/sugarCubes.jpg"
import logo from "../images/logo.svg"
import pinterest from "../images/pinterest.svg"
import instagram from "../images/instagram.svg"
import facebook from "../images/facebook.svg"
import twitter from "../images/twitter.svg"

const Projects = () => {
    return (
        <>
            <section id="projects" className="min-h-screen mt-[100px]">
                <div className="flex flex-col md:flex-row h-1/2 w-full flex-nowrap">
                    <div className="flex w-full md:w-1/4">
                        <img className="w-full " src={milkBottles} alt="" />
                    </div>
                    <div className="flex w-full md:w-1/4">
                        <img className="w-full" src={Orange} alt="" />
                    </div>
                    <div className="flex w-full md:w-1/4">
                        <img className="w-full" src={Cone} alt="" />
                    </div>
                    <div className="flex w-full md:w-1/4">
                        <img className="w-full" src={sugarCubes} alt="" />
                    </div>
                </div>
                <footer className="w-full h-[500px] bg-Darkmoderatecyan justify-center items-center flex flex-col">
                    <img className="w-[200px]" src={logo} alt="logo" />
                    <div className="flex gap-5 mt-[50px]">
                        <p className="hover:text-White text-Darkdesaturatedcyan duration-500">About</p>
                        <p className="hover:text-White text-Darkdesaturatedcyan duration-500">Services</p>
                        <p className="hover:text-White text-Darkdesaturatedcyan duration-500">Projects</p>
                    </div>

                    <div className="flex gap-5 mt-[100px]">
                        <img className="transition-all duration-300 hover:filter hover:brightness-0 hover:invert" src={facebook} alt="Facebook" />
                        <img className="transition-all duration-300 hover:filter hover:brightness-0 hover:invert" src={pinterest} alt="Pinterest" />
                        <img className="transition-all duration-300 hover:filter hover:brightness-0 hover:invert" src={instagram} alt="Instagram" />
                        <img className="transition-all duration-300 hover:filter hover:brightness-0 hover:invert" src={twitter} alt="Twitter" />
                    </div>

                </footer>
            </section>
        </>
    )
}

export default Projects;
