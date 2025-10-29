"use client";

import React, { useState, FormEvent } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Walidacja pól
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formValues.name.trim()) newErrors.name = "Name is required.";
    if (!formValues.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formValues.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    } else if (formValues.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }
    return newErrors;
  };

  // Obsługa zmian w polach
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // Wysyłanie do Formspree
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");
    setErrors({});

    const data = new FormData();
    data.append("name", formValues.name);
    data.append("email", formValues.email);
    data.append("message", formValues.message);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setFormValues({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-white mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        {/* Name */}
        <div className="flex flex-col">
          <input
            className={`p-3 rounded-lg bg-zinc-800 border-2 ${
              errors.name ? "border-red-500" : "border-white"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formValues.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <input
            className={`p-3 rounded-lg bg-zinc-800 border-2 ${
              errors.email ? "border-red-500" : "border-white"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <textarea
            className={`p-3 h-32 rounded-lg bg-zinc-800 border-2 ${
              errors.message ? "border-red-500" : "border-white"
            } resize-none focus:outline-none focus:ring-2 focus:ring-blue-500`}
            name="message"
            placeholder="Your Message"
            value={formValues.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "sending"}
          className={`p-3 rounded-lg font-semibold transition-colors ${
            status === "sending"
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {/* Status messages */}
        {status === "success" && (
          <p className="text-green-400 mt-2">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-2">
            ❌ Failed to send message. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
