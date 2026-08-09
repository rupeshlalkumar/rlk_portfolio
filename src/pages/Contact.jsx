import { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxN77t2P4Vw1w9HH5Ln7n1gISC3FJHCrZ4mIalEsreF1N29-9jDwvwJrZZKOrP7hZi3/exec";

const BRAND_COLORS = {
  orange: "#fb8d2e",
  green: "#3aa540",
  yellow: "#fcca0a",
  azure: "#04abed",
};

const initialFormData = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    setIsSubmitting(true);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message);
      }

      setFormData(initialFormData);

      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully. Thank you for reaching out!",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* =========================
          HERO
      ========================== */}
      <section
        aria-labelledby="contact-title"
        className="relative isolate overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-10 -z-10 h-72 w-72 rounded-full opacity-10 blur-3xl"
          style={{
            backgroundColor: BRAND_COLORS.orange,
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-20 -z-10 h-80 w-80 rounded-full opacity-10 blur-3xl"
          style={{
            backgroundColor: BRAND_COLORS.azure,
          }}
        />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p
              className="mb-4 text-sm font-bold uppercase tracking-[0.2em]"
              style={{
                color: BRAND_COLORS.azure,
              }}
            >
              Contact
            </p>

            <h1
              id="contact-title"
              className="text-5xl font-black leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
            >
              Let's build something
              <span
                className="block"
                style={{
                  color: BRAND_COLORS.orange,
                }}
              >
                meaningful together.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              Have a project, business idea, or digital problem to solve?
              Tell me about it and I'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          CONTACT SECTION
      ========================== */}
      <section
        aria-labelledby="contact-form-title"
        className="border-t border-gray-100 bg-gray-50"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-24">
          {/* Contact Information */}
          <div>
            <p
              className="text-sm font-bold uppercase tracking-[0.18em]"
              style={{
                color: BRAND_COLORS.green,
              }}
            >
              Get In Touch
            </p>

            <h2
              className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl"
            >
              Tell me about your project.
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Share a few details about your project and requirements.
              I'll review your message and get back to you.
            </p>

            <div className="mt-10 space-y-6">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <p
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{
                    color: BRAND_COLORS.orange,
                  }}
                >
                  Email
                </p>

                <a
                  href="hello@rupeshlalkumar.in"
                  className="mt-2 inline-block text-sm font-bold text-gray-900 underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04abed] focus-visible:ring-offset-2"
                >
                  hello@rupeshlalkumar.in
                </a>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <p
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{
                    color: BRAND_COLORS.azure,
                  }}
                >
                  Availability
                </p>

                <p className="mt-2 text-sm font-medium text-gray-700">
                  Open to discussing new projects and opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
            <div>
              <p
                className="text-sm font-bold uppercase tracking-[0.18em]"
                style={{
                  color: BRAND_COLORS.azure,
                }}
              >
                Project Enquiry
              </p>

              <h2
                id="contact-form-title"
                className="mt-3 text-2xl font-black tracking-tight text-gray-900 sm:text-3xl"
              >
                Send a message
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Fields marked with <span aria-hidden="true">*</span> are
                required.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-gray-900"
                >
                  Name <span aria-hidden="true">*</span>
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  minLength={2}
                  maxLength={100}
                  placeholder="Your name"
                  className="mt-2 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-shadow placeholder:text-gray-400 focus:border-[#04abed] focus:ring-2 focus:ring-[#04abed]/20"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-900"
                >
                  Email <span aria-hidden="true">*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  maxLength={150}
                  placeholder="you@example.com"
                  className="mt-2 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-shadow placeholder:text-gray-400 focus:border-[#04abed] focus:ring-2 focus:ring-[#04abed]/20"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-bold text-gray-900"
                >
                  Company / Business
                  <span className="ml-1 font-normal text-gray-500">
                    (optional)
                  </span>
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  autoComplete="organization"
                  maxLength={150}
                  placeholder="Your company or business"
                  className="mt-2 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-shadow placeholder:text-gray-400 focus:border-[#04abed] focus:ring-2 focus:ring-[#04abed]/20"
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-bold text-gray-900"
                >
                  Service <span aria-hidden="true">*</span>
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-shadow focus:border-[#04abed] focus:ring-2 focus:ring-[#04abed]/20"
                >
                  <option value="">
                    Select a service
                  </option>

                  <option value="Website Development">
                    Website Development
                  </option>

                  <option value="Frontend Development">
                    Frontend Development
                  </option>

                  <option value="Software Development">
                    Software Development
                  </option>

                  <option value="Business Digital Solutions">
                    Business Digital Solutions
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-bold text-gray-900"
                >
                  Budget
                  <span className="ml-1 font-normal text-gray-500">
                    (optional)
                  </span>
                </label>

                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-shadow focus:border-[#04abed] focus:ring-2 focus:ring-[#04abed]/20"
                >
                  <option value="">
                    Select your estimated budget
                  </option>

                  <option value="₹5,000 – ₹10,000">
                    ₹5,000 – ₹10,000
                  </option>

                  <option value="₹10,000 – ₹25,000">
                    ₹10,000 – ₹25,000
                  </option>

                  <option value="₹25,000 – ₹50,000">
                    ₹25,000 – ₹50,000
                  </option>

                  <option value="₹50,000+">
                    ₹50,000+
                  </option>

                  <option value="Not sure yet">
                    Not sure yet
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-gray-900"
                >
                  Message <span aria-hidden="true">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={6}
                  placeholder="Tell me about your project, requirements, goals, and timeline..."
                  className="mt-2 block w-full resize-y rounded-xl border border-gray-200 px-4 py-3 text-sm leading-7 text-gray-900 outline-none transition-shadow placeholder:text-gray-400 focus:border-[#04abed] focus:ring-2 focus:ring-[#04abed]/20"
                />
              </div>

              {/* Status */}
              {status.message && (
                <div
                  role="alert"
                  aria-live="polite"
                  className={`rounded-xl border px-4 py-3 text-sm font-medium ${
                    status.type === "success"
                      ? "border-green-200 bg-green-50 text-green-700"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04abed] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 motion-reduce:transition-none"
                style={{
                  backgroundColor: BRAND_COLORS.azure,
                }}
              >
                {isSubmitting
                  ? "Sending..."
                  : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =========================
          WHAT HAPPENS NEXT
      ========================== */}
      <section
        aria-labelledby="next-title"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-sm font-bold uppercase tracking-[0.18em]"
              style={{
                color: BRAND_COLORS.green,
              }}
            >
              What Happens Next
            </p>

            <h2
              id="next-title"
              className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl"
            >
              A simple process.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-black text-white"
                style={{
                  backgroundColor: BRAND_COLORS.orange,
                }}
                aria-hidden="true"
              >
                01
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                Receive
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Your message is securely recorded in the project contact
                sheet.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-black text-white"
                style={{
                  backgroundColor: BRAND_COLORS.green,
                }}
                aria-hidden="true"
              >
                02
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                Review
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                I'll review your requirements and understand what you need.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-black text-white"
                style={{
                  backgroundColor: BRAND_COLORS.azure,
                }}
                aria-hidden="true"
              >
                03
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                Connect
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                I'll get back to you to discuss the project and next steps.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;