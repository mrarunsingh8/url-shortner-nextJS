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
              {/* <Heading level="1" className="text-4xl font-semibold text-white md:text-6xl">Short and Swift</Heading> */}
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
        {/* <section className="container px-6 py-8 mx-auto lg:py-16" id="about">
          <div className="lg:flex lg:items-center lg:-mx-4">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
              <h2 className="text-3xl font-bold mb-6 text-blue-500">URL Shortener</h2>

              <form action="#" method="POST" className="space-y-4">
                <div>
                  <label for="originalUrl" className="block text-gray-600 font-medium">Original URL</label>
                  <input type="url" id="originalUrl" name="originalUrl" className="mt-1 p-3 w-full border rounded focus:outline-none focus:border-blue-500" />
                </div>

                <div className="flex items-center justify-between">
                  <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                    Shorten URL
                  </button>
                </div>
              </form>

              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-700">Shortened URL</h3>
                <p className="mt-2 text-blue-500 break-words">http://your-short-url.com/abcd123</p>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:items-center lg:-mx-4">
            <div className="lg:w-1/2 lg:px-4">
              <Heading level={3} className="text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl">We create awesome prototypes, plugins, and templates.</Heading>
              <Text className="mt-6 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam provident voluptatum id magni iste nobis corrupti, delectus quis repellat, debitis error quod explicabo molestiae rerum totam ab sunt excepturi?
              </Text>
              <button className="flex items-center mt-8 -mx-2 text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <Text className="mx-1 font-semibold">PLAY VIDEO</Text>
              </button>
            </div>
            <div className="mt-8 lg:w-1/2 lg:px-4 lg:mt-0">
              <img
                className="object-cover w-full rounded-xl h-96"
                src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                alt="Video thumbnail"
              />
            </div>
          </div>
        </section> */}
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
