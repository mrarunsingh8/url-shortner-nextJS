import Heading from "@/app/_uicomponents/Heading";
import Text from "@/app/_uicomponents/Text";

export default function UrlShortner(){
    return(
        <section className="container px-6 py-8 mx-auto lg:py-16" id="about">
          <div className="lg:flex lg:items-center lg:-mx-4">
            <div className="lg:w-1/2 lg:px-4">
              <Heading level={3} className="text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl">We create awesome prototypes, plugins, and templates.</Heading>
              <Text className="mt-6 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam provident voluptatum id magni iste nobis corrupti, delectus quis repellat, debitis error quod explicabo molestiae rerum totam ab sunt excepturi?
              </Text>
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
            </div>
            <div className="mt-8 lg:w-1/2 lg:px-4 lg:mt-0">
              <img
                className="object-cover w-full rounded-xl h-96"
                src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                alt="Video thumbnail"
              />
            </div>
          </div>
        </section>
    )
}