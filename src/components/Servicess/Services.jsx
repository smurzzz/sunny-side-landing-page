import emily from "../images/emily.jpg"
import thomas from "../images/thomas.jpg"
import jennie from "../images/jennie.jpg"

const Services = () => {
  return (
   <>
         <section id="services" className='flex flex-col items-center px-5'>
        <h2 className="title text-2xl sm:text-3xl font-[700] mt-[100px] text-Darkgrayishblue uppercase">Client Testimonials</h2>
        <div className="flex flex-col md:flex-row mt-[50px] gap-[130px]">
            <div className="flex gap-5 flex-col justify-center items-center text-center">
                <img className="rounded-full w-[100px]" src={emily} alt="emily" />
                <p className="text-Verydarkgrayishblue">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                <div className="flex flex-col">
                    <h2 className="title font-[800] text-2xl">Emily R. </h2>
                    <p className="text-Darkgrayishblue">Marketing Director</p>
                </div>
            </div>
            <div className="flex gap-5 flex-col justify-center items-center text-center">
                <img className="rounded-full w-[100px]" src={thomas} alt="thomas" />
                <p className="text-Verydarkgrayishblue">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                <div className="flex flex-col">
                    <h2 className="title font-[800] text-2xl">Thomas S. </h2>
                    <p className="text-Darkgrayishblue">Chief Operating Officer</p>
                </div>
            </div>
            <div className="flex gap-5 flex-col justify-center items-center text-center">
                <img  className="rounded-full w-[100px]" src={jennie} alt="jennie" />
                <p className="text-Verydarkgrayishblue" >Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended! </p>
                <div className="flex flex-col">
                    <h2 className="title font-[800] text-2xl">Jennie F. </h2>
                    <p className="text-Darkgrayishblue">Bussiness Owner </p>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default Services
