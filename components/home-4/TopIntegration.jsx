import IntegrationList from '@/data/integrationData'
import Image from 'next/image'
import FadeUpOneByOneAnimation from '../animations/FadeUpOneByOneAnimation'

const TopIntegration = () => {
  const { IntegrationData } = IntegrationList
  return (
    <section>
      <div className="mb-[100px] text-center">
        <p className="mb-4 font-medium uppercase">TOP INTEGRATION</p>
        <h2 className="mb-10 max-lg:mb-10">
          Make productivity easier with 50+ <br /> Integrations
        </h2>
        <p className="mx-auto mb-12 max-w-[590px] max-lg:mb-10">
          Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin
          though it looks like nothing. hello
        </p>
      </div>

      <section className="relative pb-150">
        <div className="absolute -top-[300px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
        <div className="container ">
          <div className="relative z-10 mx-auto">
            <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
              <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            </div>
            <div className=" grid grid-cols-3  gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
              {IntegrationData.map((items, i) => (
                <FadeUpOneByOneAnimation
                  i={i}
                  className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200"
                  key={items.id}>
                  <div className="rounded border border-dashed border-gray-100 p-10 text-center dark:border-borderColor-dark ">
                    <Image
                      src={items.image}
                      alt="value image"
                      className="mb-8 inline-block h-auto w-auto"
                      width={42}
                      height={42}
                    />
                    <h3 className="mb-2.5">{items.title}</h3>
                    <p>{items.details}</p>
                  </div>
                </FadeUpOneByOneAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default TopIntegration
