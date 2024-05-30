import { prompt } from "../util/fonts";

const ContactForm = () => {
  return (
    <div className={`w-3/4 md:w-1/2 xl:w-1/3  m-auto`}>
      <form className={`space-y-4 md:space-y-6 mt-2 lg:mt-5`} action="#">
        <div>
          <input
            type="text"
            name="fullname"
            id="fullname"
            className="border lg:text-sm w-full p-3 border-[#D1D1D1] text-xs"
            placeholder="Full Name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            className="border lg:text-sm w-full p-3 border-[#D1D1D1] text-xs"
            placeholder="Email Id"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="subject"
            id="subject"
            className="border lg:text-sm w-full p-3 border-[#D1D1D1] text-xs"
            placeholder="Subject"
            required
          />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            rows={4}
            cols={37}
            placeholder="Message"
            className="border lg:text-sm w-full p-3 border-[#D1D1D1] text-xs"
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="text-white font-medium text-sm text-center bg-neutral-800 focus:ring-4 px-6 py-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
