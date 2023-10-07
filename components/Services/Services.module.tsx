import { listOfServices } from "@/utils/funcIndex";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section id="services" className="w-full bg-white__shade py-[40px] flex flex-col items-center text-center px-[50px]">
      <h1 className="title text-[24px] text-submain__color font-normal">
        Our Services
      </h1>

      <h4 className="title mt-[30px] text-[50px] font-normal text-submain__color">
        We provide a system I don&apos;t know the rest of the sentence
      </h4>

      <div className="mt-[-80px] w-full flex justify-between items-center">
        <div className="flex flex-col px-[30px] basis-[50%]">
          <p className="title tex-black text-[40px] text-left ">
            We Focus On The Quality Of Service:
          </p>
          <div className="flex flex-col mt-[20px] gap-[15px]">
            {listOfServices.map((service) => (
              <div key={service.title} className="flex gap-[20px]">
                {service.icon}

                <div className="flex flex-col items-start mt-[-5px]">
                  <h5 className="title text-[24px] font-normal text-main__color">
                    {service.title}
                  </h5>

                  <p className="title">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Image src={"/services_svg.svg"} width={632} height={668} alt="online mapping" />
      </div>
    </section>
  );
};

export default Services;
