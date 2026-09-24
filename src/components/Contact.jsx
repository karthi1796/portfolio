import { useState } from "react";
import Section from "./Section";
import { profile, FORMSPREE_ID } from "../data";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    // Fallback: no Formspree ID configured -> open mail client
    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Portfolio contact from ${data.get("name")}`);
      const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("email")}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact" eyebrow="Let's Talk" title="Get In Touch">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-lg text-slate-400">
            Have a role, project, or question about testing strategy? Drop me a message — I'll get
            back to you.
          </p>
          <div className="space-y-3">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-slate-300 hover:text-accent">
              <FiMail className="text-accent" /> {profile.email}
            </a>
            <a href={`tel:${profile.phoneHref}`} className="flex items-center gap-3 text-slate-300 hover:text-accent">
              <FiPhone className="text-accent" /> {profile.phone}
            </a>
          </div>
          <div className="flex gap-4 pt-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-lg text-slate-300 transition-colors hover:border-accent hover:text-accent"
            >
              <FaGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-lg text-slate-300 transition-colors hover:border-accent hover:text-accent"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-4">
          <div>
            <label className="mb-1 block text-sm text-slate-400">Name</label>
            <input
              name="name"
              required
              className="w-full rounded-lg border border-slate-700 bg-surface/60 px-4 py-2.5 text-slate-200 outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-slate-400">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg border border-slate-700 bg-surface/60 px-4 py-2.5 text-slate-200 outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-slate-400">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full resize-none rounded-lg border border-slate-700 bg-surface/60 px-4 py-2.5 text-slate-200 outline-none focus:border-accent"
            />
          </div>
          <button type="submit" className="btn-primary w-full justify-center" disabled={status === "sending"}>
            <FiSend /> {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="text-center text-sm text-accent2">Thanks! Your message has been sent.</p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-rose-400">Something went wrong. Try emailing me directly.</p>
          )}
        </form>
      </div>
    </Section>
  );
}
