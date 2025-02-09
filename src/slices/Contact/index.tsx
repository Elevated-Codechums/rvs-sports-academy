import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Building, Clock, Mail, MapPin, Phone } from "lucide-react";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={cn("min-h-screen px-4 py-8 sm:px-8")}
    >
      <>
        <div>
          <h1 className="text-4xl sm:text-6xl flex flex-col text-center font-oswald uppercase pt-10 font-bold">
            Contact us
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row gap-5 p-10">
          {/* Maps Location */}
          <div className="flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224204.2490595494!2d77.12061669453124!3d28.59403460000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefb6845e7901%3A0xa71b7d8558307f56!2sRVR%20Sports%20Academy!5e0!3m2!1sen!2sin!4v1739111590994!5m2!1sen!2sin"
              className="w-full shadow-lg ml-[-5px] h-64 md:w-[600px] md:h-[450px] border-2 border-black rounded-lg m-4"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
          {/* Contact and Office Information */}
          <div className="flex flex-col flex-1 items-start gap-11 justify-center">
            {slice.primary.contact.map((contact, index) => (
              <div
                key={index}
                className="flex flex-col border-2 shadow-lg border-black p-10 rounded-lg gap-5 mt-5 w-full"
              >
                <h2 className="flex font-semibold font-montserrat hover:text-deepBlue hover:cursor-pointer gap-3">
                  <Phone className="text-orange-500" />
                  {contact.calls}
                </h2>
                <h2 className="flex font-semibold font-montserrat hover:text-deepBlue hover:cursor-pointer gap-3">
                  <Phone className="text-orange-500" />
                  {contact.phone}
                </h2>
                <h2 className="flex font-semibold font-montserrat hover:text-deepBlue hover:cursor-pointer gap-3">
                  <Mail className="text-red" /> 
                  {contact.email}
                </h2>
              </div>
            ))}

            {slice.primary.address.map((address, index) => (
              <div
                key={index}
                className="flex flex-col border-2 shadow-lg border-black p-4 rounded-lg gap-5 w-full"
              >
                <div className="flex font-semibold font-montserrat hover:text-deepBlue hover:cursor-pointer gap-3">
                  <Building className="text-orange-500" />
                  <PrismicRichText field={address.officeaddress} />
                </div>
                <h2 className="flex font-semibold font-montserrat hover:text-deepBlue hover:cursor-pointer gap-3">
                  <MapPin className="text-red" />
                  {address.pincode}
                </h2>
                <h2 className="flex font-semibold font-montserrat hover:text-deepBlue hover:cursor-pointer gap-3">
                  <Clock className="text-red" />
                  {address.timings}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </>
    </section>
  );
};

export default Contact;
