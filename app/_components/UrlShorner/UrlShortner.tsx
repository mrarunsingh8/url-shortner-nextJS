"use client";
import Heading from "@/app/_uicomponents/Heading";
import Text from "@/app/_uicomponents/Text";
import { useFormik } from "formik";
import Image from "next/image";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    url: Yup.string()
        .url('Invalid URL format')
        .required('URL is required')
});

export default function UrlShortner() {
    const formik = useFormik({
        initialValues: {
            url: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // Handle form submission here
            console.log(values);
        },
    });
    return (
        <section className="container px-6 py-8 mx-auto lg:py-16" id="about">
            <div className="lg:flex lg:items-center lg:-mx-4">
                <div className="lg:w-1/2 lg:px-4">
                    <Heading level={3} className="text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl">We create awesome prototypes, plugins, and templates.</Heading>
                    <Text className="mt-6 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam provident voluptatum id magni iste nobis corrupti, delectus quis repellat, debitis error quod explicabo molestiae rerum totam ab sunt excepturi?
                    </Text>
                    <div className="mt-8">
                        <form className="" onSubmit={formik.handleSubmit}>
                            <div className="flex w-full">
                                <input type="text" name="url" className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter URL" onChange={formik.handleChange} />
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Shorten URL</button>

                            </div>
                            {formik.touched.url && formik.errors.url ? (
                                <div className="flex w-full">
                                    <span className="text-red-500 text-xs mt-1 ml-2 w-full my-2">{formik.errors.url}</span>
                                </div>
                            ) : null}
                        </form>
                    </div>
                </div>
                <div className="mt-8 lg:w-1/2 lg:px-4 lg:mt-0">
                    <Image className="object-cover w-full rounded-xl h-96"
                        src="/images/url-short.webp"
                        blurDataURL="/images/placeholder.webp"
                        alt="Video thumbnail" width={470} height={380}
                    />
                </div>
            </div>
        </section>
    )
}