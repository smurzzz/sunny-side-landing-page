import { useEffect, useState } from "react"
import menubar from "../images/menubar.svg"
import logo from "../images/logo.svg"


 const navLinks = [
    {
        id: 2,
        title: "About",
        path: "about",
    },
    {
        id: 3,
        title: "Services",
        path: "services",
    },
    {
        id: 4,
        title: "Projects",
        path: "projects",
    },
]


const Navbar = () => {
    const [active, setActive] = useState(false)

    const handleMenu = () => {
        setActive(!active)
    }

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth >= 1024){
                setActive(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
        setActive(false); // Close the menu after clicking
      };

    return(
        <>
            <nav className="flex justify-between items-center common-padding">
                <img
                 src={logo}
                 alt="logo"
                 className="md:w-[200px] w-[150px]" />

                <div className="flex items-center">
                    {
                        navLinks.map((items, i) => {
                            return(
                                <a  
                                href={items.path}
                                key={i.id}
                                className="hidden linkss lg:block text-White mr-10"
                                >
                                   {items.title}
                                </a>
                            )
                        })
                    }

                    <button className="lg:block hidden font-[900] text-md title py-3 px-7 rounded-full bg-White uppercase">Contact</button>
                </div>
                <img
                 src={menubar}
                 alt="menu"
                 className="lg:hidden block cursor-pointer"
                 onClick={handleMenu} />
            </nav>

            {
                active ? <div className="position bg-White w-[350px] flex flex-col items-center justify-center common-padding rounded-md">
                            {
                                navLinks.map((item, i) => (
                                    <a
                                     href={`#${item.path}`}
                                     onClick={() => scrollToSection(item.path)}
                                     key={i.id}
                                     className="text-Grayishblue mt-5">{item.title}</a>
                                ))
                            }
                            <button className="title text-black mt-7 font-[900] text-lg py-3 px-7 rounded-full bg-Yellow uppercase">Contact</button>
                        </div> 
                          :
                         null
            }
        </>
    )
}

export default Navbar