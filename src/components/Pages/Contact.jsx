import React from "react";

const Contact = () => {
  return (
      <section>
        <div className="contact-hero relative">
          <h1 className="contact-hero-content text-3xl text-black font-extrabold">
            CONTACT US
          </h1>
        </div>
        <div className="p-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-secondary font-extrabold text-3xl lg:text-4xl p-2">
            24/<span className="text-black dark:text-gray-100">7</span> SERVICE
          </h2>
          <p className="p-4 text-lg font-medium">
            We are always here to assist you. For inquiries, service requests,
            or partnership opportunities, reach out to us through any of the
            channels below:
          </p>
        </div>

      <div>
        <div className="flex items-center justify-center mt-10 mx-4 md:mx-4">
          <div className="border-t-2 border-[var(--primary-color)] w-48 md:w-96"></div>
          <span className="px-6 md:px-14 text-secondary text-lg font-medium uppercase whitespace-nowrap">
            CONTACT
          </span>
          <div className="border-t-2 border-[var(--primary-color)] w-48 md:w-96"></div>
        </div>

        <section className="flex flex-col pt-6 md:pt-12 md:flex-row md:space-y-0 md:items-center md:justify-center">
          <div className="flex md:flex-1 p-6 bg-[var(--primary-color)] shadow-md text-white font-medium h-[14rem] dark:bg-gray-100 dark:text-gray-900">
            FOR INQUIRIES
            <br />
            <br />
            info@sepnuarilservices.com
          </div>
          <div className="flex md:flex-1 p-6 bg-base-900 shadow-md h-[14rem]"></div>
        </section>
        <section className="flex flex-col-reverse md:flex-row md:space-y-0 md:items-center md:justify-center">
          <div className="flex md:flex-1 p-6 bg-base-900 shadow-md h-[14rem]"></div>
          <div className="flex md:flex-1 p-6 bg-[var(--primary-color)] shadow-md text-white font-medium h-[14rem] dark:bg-gray-100 dark:text-gray-900">
            FOR SERVICE RELATED SUPPORT
            <br />
            <br />
            support@sepnuarilservices.com
          </div>
        </section>
        <section className="flex flex-col md:flex-row md:space-y-0 md:items-center md:justify-center">
          <div className="flex md:flex-1 p-6 bg-[var(--primary-color)] shadow-md text-white font-medium h-[14rem] dark:bg-gray-100 dark:text-gray-900">
            OFFICE ADDRESS
            <br />
            <br />
            Sepnuaril Oil and Gas Services 7506 Midland, Texas, 79708, USA
          </div>
          <div className="flex md:flex-1 p-6 bg-base-900 shadow-md h-[14rem]"></div>
        </section>
        <section className="flex flex-col-reverse md:flex-row md:space-y-0 md:items-center md:justify-center">
          <div className="md:flex md:flex-1 p-6 bg-base-900 shadow-md h-[14rem] hidden"></div>
          <div className="flex md:flex-1 p-6 bg-[var(--primary-color)] shadow-md text-white font-medium h-[14rem] dark:bg-gray-100 dark:text-gray-900">
            PHONE NUMBER
            <br />
            <br />
            Phone
            1..............................................................
            <br />
            Phone
            2.......................................................................
          </div>
        </section>
      </div>
      </section>
  );
};

export default Contact;
