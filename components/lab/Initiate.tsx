"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, Linkedin, Music2 } from "lucide-react";

import { contact } from "@/constants/contact";
import { feedback } from "@/constants/feedback";
import { budgetRanges, projectTypes } from "@/constants/lab";
import { SOCIAL_LINKS } from "@/constants/social-links";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/components/ui/utils";

import { Buffer } from "./Buffer";
import { fieldClass, primaryClass } from "./classes";

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  tiktok: Music2,
} as const;

const PROJECT_LINKS: Record<string, string> = {
  "AZUBI IN GERMANY": "/work/job-tinda",
  "MagicBlocks, Inc.": "/work/magicblocks-ai",
};

type Field = "name" | "email" | "projectType" | "budget" | "description";

const FIELD_ORDER: Field[] = [
  "name",
  "email",
  "projectType",
  "budget",
  "description",
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Initiate() {
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<string | null>(null);
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const projectType = String(data.get("projectType") ?? "");
    const budget = String(data.get("budget") ?? "");
    const description = String(data.get("description") ?? "").trim();

    const nextErrors: Partial<Record<Field, string>> = {};
    if (name.length < 2) nextErrors.name = "Enter your name.";
    if (!EMAIL_PATTERN.test(email))
      nextErrors.email = "Enter a valid email address.";
    if (!projectType) nextErrors.projectType = "Choose a project type.";
    if (!budget) nextErrors.budget = "Choose a budget range.";
    if (description.length < 20) {
      nextErrors.description =
        "Add at least a few sentences about the product.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus(null);
      const first = FIELD_ORDER.find((field) => nextErrors[field]);
      if (first) document.getElementById(first)?.focus();
      return;
    }

    const typeLabel =
      projectTypes.find((item) => item.value === projectType)?.label ??
      projectType;
    const budgetLabel =
      budgetRanges.find((item) => item.value === budget)?.label ?? budget;
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${typeLabel}\nBudget range: ${budgetLabel}\n\n${description}`
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setStatus(
      `Your email app should open with this brief addressed to ${contact.email}. If nothing opens, send the same note directly to that address.`
    );
  };

  return (
    <Buffer id="contact" kicker="Contact" className="border-t border-[#322e26]">
      <h2 className="max-w-xl text-[1.65rem] leading-tight font-medium tracking-[-0.03em] md:text-3xl">
        Built with teams. Trusted by people.
      </h2>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {feedback.map((item) => {
          const href = PROJECT_LINKS[item.company];
          return (
            <figure
              key={item.name}
              className="border border-[#322e26] bg-[#171611] p-5"
            >
              <p className="sans text-[12px] tracking-[0.12em] text-[#e8a317] uppercase">
                {item.company}
              </p>
              <blockquote className="sans mt-4 text-lg leading-snug">
                “{item.message}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="relative size-10 shrink-0 overflow-hidden bg-[#1f1c16]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="sans text-[13px]">
                  <p>{item.name}</p>
                  <p className="text-[#948c7a]">
                    {item.role}
                    {href ? (
                      <>
                        {" · "}
                        <Link href={href} className="hover:text-[#e8a317]">
                          {item.company}
                        </Link>
                      </>
                    ) : null}
                  </p>
                </div>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="mt-16 grid gap-10 border-t border-[#322e26] pt-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="text-[1.65rem] leading-tight font-medium tracking-[-0.03em] md:text-3xl">
            Have an idea worth building?
          </h2>
          <p className="sans mt-4 text-base leading-7 text-[#948c7a]">
            Let&apos;s turn it into a product.
          </p>
          <dl className="sans mt-8 space-y-3 text-[13px]">
            <div className="grid grid-cols-[4.5rem_minmax(0,1fr)]">
              <dt className="text-[#5e584c]">Email</dt>
              <dd>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-[#e8a317]"
                >
                  {contact.email}
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[4.5rem_minmax(0,1fr)]">
              <dt className="text-[#5e584c]">Phone</dt>
              <dd>
                <a href="tel:+84368341595" className="hover:text-[#e8a317]">
                  +84 368 341 595
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[4.5rem_minmax(0,1fr)]">
              <dt className="text-[#5e584c]">Location</dt>
              <dd>{contact.location}</dd>
            </div>
          </dl>
          <div className="mt-6 flex flex-wrap gap-2">
            {SOCIAL_LINKS.filter((link) => link.id !== "email").map((link) => {
              const Icon = ICONS[link.id as keyof typeof ICONS];
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="inline-flex size-10 items-center justify-center border border-[#322e26] hover:border-[#e8a317] hover:text-[#e8a317]"
                >
                  {Icon ? <Icon size={16} /> : link.label}
                </a>
              );
            })}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="border border-[#322e26] bg-[#171611] lg:col-span-7"
        >
          <div className="sans border-b border-[#322e26] px-5 py-3 text-[13px] text-[#948c7a]">
            Project inquiry
          </div>
          <div className="grid gap-6 p-5 md:grid-cols-2">
            <Field
              id="name"
              name="name"
              label="Name"
              autoComplete="name"
              error={errors.name}
            />
            <Field
              id="email"
              name="email"
              type="email"
              label="Email"
              autoComplete="email"
              error={errors.email}
            />
            <SelectField
              id="projectType"
              name="projectType"
              label="Project type"
              error={errors.projectType}
              placeholder="Select a type"
              options={projectTypes}
              value={projectType}
              onValueChange={setProjectType}
            />
            <SelectField
              id="budget"
              name="budget"
              label="Budget"
              error={errors.budget}
              placeholder="Select a range"
              options={budgetRanges}
              value={budget}
              onValueChange={setBudget}
            />
          </div>
          <p className="sans px-5 text-[12px] text-[#5e584c]">
            Budget is a starting point — not a rate card.
          </p>
          <div className="p-5 pt-4">
            <label
              htmlFor="description"
              className="sans text-[13px] text-[#948c7a]"
            >
              About the product
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              required
              aria-invalid={Boolean(errors.description)}
              aria-describedby={
                errors.description ? "description-error" : undefined
              }
              className={cn(
                fieldClass,
                "min-h-[8.5rem] resize-y leading-6",
                errors.description && "border-[#e07a6a]"
              )}
              placeholder="What are you building, and what does a useful first version need to do?"
            />
            {errors.description ? (
              <p
                id="description-error"
                className="sans mt-2 text-[13px] text-[#e07a6a]"
              >
                {errors.description}
              </p>
            ) : null}
          </div>
          {status ? (
            <p
              role="status"
              className="sans px-5 pb-2 text-sm leading-6 text-[#948c7a]"
            >
              {status}
            </p>
          ) : null}
          <div className="border-t border-[#322e26] px-5 py-4">
            <button type="submit" className={primaryClass}>
              Send message
            </button>
          </div>
        </form>
      </div>
    </Buffer>
  );
}

function Field({
  id,
  name,
  label,
  error,
  type = "text",
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="sans text-[13px] text-[#948c7a]">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClass, error && "border-[#e07a6a]")}
      />
      {error ? (
        <p id={`${id}-error`} className="sans mt-2 text-[13px] text-[#e07a6a]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const selectItemClass =
  "sans cursor-pointer rounded-none py-2.5 pl-3 pr-8 text-[15px] text-[#ebe6d8] outline-none focus:bg-[#1f1c16] focus:text-[#ebe6d8] data-[highlighted]:bg-[#1f1c16] data-[state=checked]:text-[#e8a317]";

const selectContentClass =
  "z-50 -mt-px max-h-60 overflow-y-auto rounded-none border border-[#322e26] border-t-0 bg-[#171611] p-1 text-[#ebe6d8] shadow-none";

function SelectField({
  id,
  name,
  label,
  error,
  placeholder,
  options,
  value,
  onValueChange,
}: {
  id: string;
  name: string;
  label: string;
  error?: string;
  placeholder: string;
  options: readonly { value: string; label: string }[];
  value: string;
  onValueChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="sans text-[13px] text-[#948c7a]">
        {label}
      </label>
      <input type="hidden" name={name} value={value} />
      <Select value={value || undefined} onValueChange={onValueChange}>
        <SelectTrigger
          id={id}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            fieldClass,
            "h-auto cursor-pointer rounded-b-none data-[placeholder]:text-[#5e584c] [&_svg]:text-[#948c7a] data-[state=open]:border-[#e8a317] data-[state=open]:border-b-[#322e26] data-[state=open]:[&_svg]:text-[#e8a317]",
            error && "border-[#e07a6a]"
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className={selectContentClass} position="popper">
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className={selectItemClass}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error ? (
        <p id={`${id}-error`} className="sans mt-2 text-[13px] text-[#e07a6a]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
