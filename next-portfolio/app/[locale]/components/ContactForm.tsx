"use client";

import React, { useState, FormEvent } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

interface ContactFormProps {
  nameRequired?: string;
  emailRequired?: string;
  emailInvalid?: string;
  messageRequired?: string;
  messageTooShort?: string;
  yourNamePlaceholder?: string;
  yourEmailPlaceholder?: string;
  yourMessagePlaceholder?: string;
  sendMessageButton?: string;
  statusSending?: string;
  statusSuccess?: string;
  statusError?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  nameRequired,
  emailRequired,
  emailInvalid,
  messageRequired,
  messageTooShort,
  yourNamePlaceholder,
  yourEmailPlaceholder,
  yourMessagePlaceholder,
  sendMessageButton,
  statusSending,
  statusSuccess,
  statusError,
}) => {
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
    if (!formValues.name.trim())
      newErrors.name = nameRequired || "Name is required.";
    if (!formValues.email.trim()) {
      newErrors.email = emailRequired || "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      newErrors.email = emailInvalid || "Email is invalid.";
    }
    if (!formValues.message.trim()) {
      newErrors.message = messageRequired || "Message is required.";
    } else if (formValues.message.length < 10) {
      newErrors.message = messageTooShort || "Message is too short.";
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
      const res = await fetch("https://formspree.io/f/meopkqaa", {
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        {/* Name */}
        <div className="flex flex-col">
          <input
            className={`p-3 rounded-lg bg-zinc-800 border-2 ${
              errors.name ? "border-red-500" : "border-white"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            type="text"
            name="name"
            placeholder={yourNamePlaceholder || "Your Name"}
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
            placeholder={yourEmailPlaceholder || "Your Email"}
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
            placeholder={yourMessagePlaceholder || "Your Message"}
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
          {status === "sending"
            ? statusSending || "Sending..."
            : sendMessageButton || "Send Message"}
        </button>

        {/* Status messages */}
        {status === "success" && (
          <p className="text-green-400 mt-2">{statusSuccess}</p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-2">{statusError}</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
