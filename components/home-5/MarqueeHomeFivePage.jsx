import ClientList from '@/data/clientData'
import clientBorderDark from '@/public/images/clients/client-border-dark.svg'
import clientBorder from '@/public/images/clients/client-border.svg'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const MarqueeHomeFivePage = ({
  sectionTitle = true,
  border = true,
  spacing = 'mt-10 md:mt-[40px]  max-lg:py-20 bg-white dark:bg-dark-300 ',
}) => {
  const { ClientData } = ClientList
  return (
    <section className={`client ${spacing} `}>
      <div className="container overflow-hidden max-lg:!px-0">
        <div className="relative py-8 before:absolute before:-right-0.5 before:top-1/2 before:z-10 before:h-[40px] before:w-[120px] before:-translate-y-1/2  before:bg-gradient-to-l before:from-white before:from-[37.5%] after:absolute after:-left-0.5 after:top-1/2 after:z-10 after:h-[40px] after:w-[120px] after:-translate-y-1/2  after:bg-gradient-to-r after:from-white  after:from-[37.5%] dark:before:from-dark-gradient dark:after:from-dark-gradient">
          {border && (
            <div className="absolute left-0 top-0 h-full w-full  max-lg:hidden">
              <Image src={clientBorder} alt="border" className="inline-block dark:hidden" />
              <Image src={clientBorderDark} alt="border" className="hidden dark:inline-block" />
            </div>
          )}

          <Marquee pauseOnHover gradientColor="white">
            {ClientData.map((clients) => (
              <div className="h-30 marquee-content-list relative w-[215px] overflow-y-hidden" key={clients.id}>
                <Image
                  src={clients.imageLight}
                  alt="group"
                  className="inline-block h-auto w-auto dark:hidden"
                  width={120}
                  height={22}
                />
                <Image
                  src={clients.imageDark}
                  alt="group"
                  className="hidden h-auto w-auto dark:inline-block"
                  width={120}
                  height={22}
                />
              </div>
            ))}
          </Marquee>
        </div>
        {sectionTitle && <div className="mt-15 flex items-center justify-center "></div>}
      </div>
    </section>
  )
}

export default MarqueeHomeFivePage
