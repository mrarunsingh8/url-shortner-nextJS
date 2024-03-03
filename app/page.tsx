import Image from "next/image";
import AppHeader from "./_components/Header/AppHeader";
import AppFooter from "./_components/Footer/AppFooter";
import Heading from "./_uicomponents/Heading";
import Text from "./_uicomponents/Text";
import UrlShortner from "./_components/UrlShorner/UrlShortner";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <div className="relative grid w-full bg-indigo-500 h-36 lg:h-[10rem] place-items-center">
            <div className="flex flex-col items-center mx-auto text-center">
              <Text className="mt-6 px-0.5 text-lg leading-5 text-white">Welcome to ShortnSwift, your go-to free tool for URL shortening and generating concise links. Our URL shortener simplifies the process, enabling you to create compact links effortlessly, enhancing shareability.</Text>
              <a href="#about" className="mt-8 cursor-pointer animate-bounce">
                <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="27" cy="26" r="18" stroke="white" strokeWidth="2"></circle>
                  <path d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z" fill="white"></path>
                </svg>
              </a>
            </div>
          </div>
          <svg className="fill-indigo-500" viewBox="0 0 1440 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z"></path></svg>
        </section>
        <UrlShortner />
        <section className="container px-6 py-8 mx-auto lg:py-16">
          <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-indigo-400 rounded-xl">
              <div className="flex items-center">
                <span className="inline-block text-indigo-500">
                  <Image alt="Like Icon" src={"./images/icon-like.svg"} width={50} height={50}/>
                </span>
                <Heading level={2} className="ml-2 text-2xl font-semibold text-gray-700 capitalize">Easy</Heading>
              </div>
              <Text className="text-gray-500">ShortnSwift is easy and fast, enter the long link to get your shortened link</Text>
            </div>
            <div className="p-8 space-y-3 border-indigo-400 rounded-xl">
              <div className="flex items-center">
                <span className="inline-block text-indigo-500">
                <Image alt="URL Icon" src={"./images/icon-url.svg"} width={50} height={50}/>
                </span>
                <Heading level={2} className="ml-2 text-2xl font-semibold text-gray-700 capitalize">Shortened</Heading>
              </div>
              <Text className="text-gray-500">Use any link, no matter what size, ShortnSwift always shortens</Text>
            </div>
            <div className="p-8 space-y-3 border-indigo-400 rounded-xl">
              <div className="flex items-center">
              <Image alt="URL Icon" src={"./images/icon-secure.svg"} width={50} height={50}/>
                <Heading level={2} className="ml-2 text-2xl font-semibold text-gray-700 capitalize">Secure</Heading>
              </div>
              <Text className="text-gray-500">It is fast and secure, our service has HTTPS protocol and data encryption</Text>
            </div>

            
            <div className="p-8 space-y-3 border-indigo-400 rounded-xl">
              <div className="flex items-center">
              <Image alt="URL Icon" src={"./images/icon-statistics.svg"} width={50} height={50}/>
                <Heading level={2} className="ml-2 text-2xl font-semibold text-gray-700 capitalize">Statistics</Heading>
              </div>
              <Text className="text-gray-500">Check the number of clicks that your shortened URL received</Text>
            </div>

            <div className="p-8 space-y-3 border-indigo-400 rounded-xl">
              <div className="flex items-center">
              <Image alt="URL Icon" src={"./images/icon-unique.svg"} width={50} height={50}/>
                <Heading level={2} className="ml-2 text-2xl font-semibold text-gray-700 capitalize">Reliable</Heading>
              </div>
              <Text className="text-gray-500">All links that try to disseminate spam, viruses and malware are deleted</Text>
            </div>

            <div className="p-8 space-y-3 border-indigo-400 rounded-xl">
              <div className="flex items-center">
              <Image alt="URL Icon" src={"./images/icon-responsive.svg"} width={50} height={50}/>
                <Heading level={2} className="ml-2 text-2xl font-semibold text-gray-700 capitalize">Devices</Heading>
              </div>
              <Text className="text-gray-500">Compatible with smartphones, tablets and desktop</Text>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
