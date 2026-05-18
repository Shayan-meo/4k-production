"use client";

import { useId, useState } from "react";
import { BRAND } from "@/constants";

type FieldName =
  | "name"
  | "partner"
  | "email"
  | "phone"
  | "date"
  | "venue"
  | "message";

type Errors = Partial<Record<FieldName, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Record<FieldName, string>): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please share your name.";
  if (!values.email.trim()) {
    errors.email = "We'll need an email to reply.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "That email doesn't look quite right.";
  }
  if (values.phone.trim() && values.phone.trim().replace(/[^\d+]/g, "").length < 7) {
    errors.phone = "Please include a reachable number.";
  }
  if (values.message.trim() && values.message.trim().length < 10) {
    errors.message = "A sentence or two helps us understand.";
  }
  return errors;
}

export default function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState<Record<FieldName, string>>({
    name: "",
    partner: "",
    email: "",
    phone: "",
    date: "",
    venue: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  function update(name: FieldName, value: string) {
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name] || submitted) {
      setErrors(validate({ ...values, [name]: value }));
    }
  }

  function onBlur(name: FieldName) {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(values));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const next = validate(values);
    setErrors(next);
    setSubmitted(true);
    setTouched({
      name: true,
      partner: true,
      email: true,
      phone: true,
      date: true,
      venue: true,
      message: true,
    });
    if (Object.keys(next).length > 0) {
      e.preventDefault();
      const firstKey = Object.keys(next)[0] as FieldName;
      const el = document.getElementById(`${formId}-${firstKey}`);
      el?.focus();
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2"
      action={`mailto:${BRAND.email}`}
      method="post"
      encType="text/plain"
      noValidate
    >
      <Field
        id={`${formId}-name`}
        label="Your name"
        name="name"
        autoComplete="given-name"
        required
        value={values.name}
        error={errors.name}
        onChange={(v) => update("name", v)}
        onBlur={() => onBlur("name")}
      />
      <Field
        id={`${formId}-partner`}
        label="Partner's name"
        name="partner"
        autoComplete="name"
        value={values.partner}
        error={errors.partner}
        onChange={(v) => update("partner", v)}
        onBlur={() => onBlur("partner")}
      />
      <Field
        id={`${formId}-email`}
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        inputMode="email"
        required
        value={values.email}
        error={errors.email}
        onChange={(v) => update("email", v)}
        onBlur={() => onBlur("email")}
      />
      <Field
        id={`${formId}-phone`}
        label="Phone"
        name="phone"
        type="tel"
        autoComplete="tel"
        inputMode="tel"
        value={values.phone}
        error={errors.phone}
        onChange={(v) => update("phone", v)}
        onBlur={() => onBlur("phone")}
      />
      <Field
        id={`${formId}-date`}
        label="Wedding date"
        name="date"
        autoComplete="off"
        placeholder="e.g. 14 February 2026"
        full
        value={values.date}
        error={errors.date}
        onChange={(v) => update("date", v)}
        onBlur={() => onBlur("date")}
      />
      <Field
        id={`${formId}-venue`}
        label="Venue / City"
        name="venue"
        autoComplete="address-level2"
        full
        value={values.venue}
        error={errors.venue}
        onChange={(v) => update("venue", v)}
        onBlur={() => onBlur("venue")}
      />

      <div className="sm:col-span-2">
        <label
          htmlFor={`${formId}-message`}
          className="block text-[10px] uppercase tracking-[0.32em] text-charcoal/55"
        >
          Tell us about your wedding
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          autoComplete="off"
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          onBlur={() => onBlur("message")}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          className="mt-3 block w-full resize-y border-b border-charcoal/20 bg-transparent py-3 text-[15px] leading-relaxed text-charcoal placeholder-charcoal/35 transition-colors focus:border-gold focus-visible:border-gold focus-visible:outline-none"
          placeholder="Functions, feeling, music, anything you'd like us to know…"
        />
        {errors.message && (
          <p
            id={`${formId}-message-error`}
            role="alert"
            className="mt-2 text-[12px] tracking-[0.04em] text-red-700"
          >
            {errors.message}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-charcoal px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-white transition-colors duration-500 hover:bg-gold sm:w-auto"
        >
          Send Enquiry
        </button>
        <p className="mt-5 text-[12px] leading-relaxed text-charcoal/55">
          Prefer email? Write to{" "}
          <a
            href={`mailto:${BRAND.email}`}
            className="border-b border-transparent transition-colors hover:border-gold hover:text-gold"
          >
            {BRAND.email}
          </a>
          . We reply within 48 hours.
        </p>
      </div>
    </form>
  );
}

interface FieldProps {
  readonly id: string;
  readonly label: string;
  readonly name: FieldName;
  readonly type?: string;
  readonly placeholder?: string;
  readonly required?: boolean;
  readonly full?: boolean;
  readonly autoComplete?: string;
  readonly inputMode?:
    | "text"
    | "email"
    | "tel"
    | "url"
    | "numeric"
    | "decimal"
    | "search"
    | "none";
  readonly value: string;
  readonly error?: string;
  readonly onChange: (value: string) => void;
  readonly onBlur: () => void;
}

function Field({
  id,
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  full = false,
  autoComplete,
  inputMode,
  value,
  error,
  onChange,
  onBlur,
}: FieldProps) {
  const errorId = `${id}-error`;
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label
        htmlFor={id}
        className="block text-[10px] uppercase tracking-[0.32em] text-charcoal/55"
      >
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-gold">
            *
          </span>
        )}
        {required && <span className="sr-only"> (required)</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="mt-3 block w-full border-b border-charcoal/20 bg-transparent py-3 text-[15px] text-charcoal placeholder-charcoal/35 transition-colors focus:border-gold focus-visible:border-gold focus-visible:outline-none"
      />
      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-2 text-[12px] tracking-[0.04em] text-red-700"
        >
          {error}
        </p>
      )}
    </div>
  );
}
