import Container from "../../components/Shared/Container";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { Flip } from "react-awesome-reveal";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hfnot5c",
        "template_24t6rnk",
        form.current,
        "v6EnupIPtkuSagx0l"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container>
      <div className="my-8">
        <Flip>
          <h1 className="text-4xl text-emerald-400 text-center my-4 border-y-2 border-emerald-400 w-[25%]  py-2 ">
            Contact Me
          </h1>
        </Flip>

        <h3 className="text-xl">
          <div className="flex gap-2 items-center my-2">
            <FaPhoneAlt className="text-emerald-500"></FaPhoneAlt>
            <p>Phone: +8801911415195</p>
          </div>
        </h3>
        <h3 className="text-xl">
          <div className="flex gap-2 items-center my-2">
            <BiMailSend className="text-emerald-500"></BiMailSend>
            <p>Email: shohidularifin@gmail.com</p>
          </div>
        </h3>
        <h3 className="text-xl">
          <div className="flex gap-2 items-center my-2">
            <FaLocationArrow className="text-emerald-500 "></FaLocationArrow>
            <p>Address: Avay Das Lane, Tikatuli, Dhaka,Bangladesh</p>
          </div>
        </h3>
        <h2 className="text-3xl bold mb-2 text-emerald-500">Message Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <input
              className="input input-bordered input-accent w-1/2  mb-2"
              type="text"
              name="user_name"
              placeholder="Your Name"
            />
          </div>
          <div>
            <input
              className="input input-bordered input-accent w-1/2  mb-2"
              type="email"
              name="user_email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <textarea
              className="textarea textarea-accent w-1/2"
              name="message"
              placeholder="Your Message"
            />
          </div>

          <input
            className="bg-emerald-500 text-white p-4 rounded w-1/2 hover:bg-blue-500"
            type="submit"
            value="Send Message"
          />
        </form>
      </div>
    </Container>
  );
};

export default Contact;
