import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();


  const [status, setStatus] = useState("idle"); // idle | success | error
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const form = formRef.current;

    const name = form.from_name.value.trim();
    const email = form.reply_to.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      setStatus("idle");
      return;
    }

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      setError("Email service is not configured.");
      setStatus("error");
      return;
    }

    setError("");
    setStatus("sending");

    emailjs
      .sendForm(serviceID, templateID, form, publicKey)
      .then(() => {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };



  return (
    <section id="contact" className="bg-[#d7d7d7] py-24">

      {/* Title */}
      <div className="mb-24 flex justify-center">
        <span className="border-[5px] border-black px-12 py-4 text-2xl font-bold tracking-widest">
          CONTACT ME
        </span>
      </div>

      <div className="mx-auto max-w-6xl px-10 grid md:grid-cols-2 gap-24">

        {/* LEFT */}
        <div>
          <h3 className="text-3xl font-bold tracking-widest mb-8">
            Let’s build something meaningful
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed mb-14">
            I’m open to internships, freelance work, collaborations, or
            full-time opportunities. Feel free to reach out.
          </p>

          <div className="space-y-8 text-gray-900">
            <div className="flex items-center gap-5">
              <FaEnvelope className="text-2xl" />
              <span className="text-lg">
                bt23cs039@nitmz.ac.in
              </span>
            </div>

            <div className="flex items-center gap-5">
              <FaGithub className="text-2xl" />
              <a
                href="https://github.com/Uttkarsh779"
                target="_blank"
                rel="noreferrer"
                className="text-lg hover:underline"
              >
                github.com/Uttkarsh779
              </a>
            </div>

            <div className="flex items-center gap-5">
              <FaLinkedin className="text-2xl" />
              <a
                href="https://linkedin.com/in/uttkarsh-tiwari-60922a285"
                target="_blank"
                rel="noreferrer"
                className="text-lg hover:underline"
              >
                linkedin.com/in/Uttkarsh_779
              </a>
            </div>
          </div>
        </div>

        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="relative border-[5px] border-black bg-[#ededed] p-14 space-y-12"
        >
          {/* Name */}
          <Input name="from_name" label="Your Name" />

          {/* Email */}
          <Input name="reply_to" label="Your Email" type="email" />

          {/* Message */}
          <TextArea name="message" label="Your Message" />

          {/* Error */}
          {error && (
            <p className="text-red-600 text-sm font-semibold">{error}</p>
          )}

          {/* Success */}
          {status === "success" && (
            <p className="text-green-600 text-sm font-semibold">
              Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 text-sm font-semibold">
              Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="border-2 border-black px-10 py-4 text-sm font-semibold tracking-widest transition hover:bg-black hover:text-white disabled:opacity-50"
          >
            {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </section>
  );
};

/* ---------- INPUT COMPONENT ---------- */
const Input = ({ name, label, type = "text" }) => (
  <div className="relative">
    <input
      type={type}
      name={name}
      required
      className="peer w-full border-b-2 border-black bg-transparent px-2 py-3 text-lg focus:outline-none"
    />
    <label className="absolute left-2 top-3 text-gray-600 text-sm transition-all
      peer-focus:-top-4 peer-focus:text-xs peer-focus:text-black
      peer-valid:-top-4 peer-valid:text-xs">
      {label}
    </label>
  </div>
);

/* ---------- TEXTAREA ---------- */
const TextArea = ({ name, label }) => (
  <div className="relative">
    <textarea
      rows="4"
      name={name}
      required
      className="peer w-full border-b-2 border-black bg-transparent px-2 py-3 text-lg resize-none focus:outline-none"
    />
    <label className="absolute left-2 top-3 text-gray-600 text-sm transition-all
      peer-focus:-top-4 peer-focus:text-xs peer-focus:text-black
      peer-valid:-top-4 peer-valid:text-xs">
      {label}
    </label>
  </div>
);

export default Contact;
