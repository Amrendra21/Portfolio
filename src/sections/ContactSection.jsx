import { useState } from 'react';
import { PERSONAL } from '../data/portfolio.js';
import SectionWrapper from '../components/SectionWrapper.jsx';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg('Please fill in all fields.');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '36a1c13e-106d-43fc-85fd-4a318fa5e852',
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact from ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  const socials = [
    { name: 'GitHub',   href: PERSONAL.github,                   icon: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> },
    { name: 'LinkedIn', href: PERSONAL.linkedin,                  icon: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
    { name: 'LeetCode', href: 'https://leetcode.com/_amrendra21', icon: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg> },
    { name: 'Email',    href: `mailto:${PERSONAL.email}`,         icon: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
  ];

  return (
    <SectionWrapper id="contact" title="Get in Touch">
      <div className="pt-4 pb-4 space-y-6">
        {/* Social links */}
        <div>
          <p className="text-[14px] text-zinc-500 mb-3">
            Here are my <span className="font-medium text-zinc-800 dark:text-zinc-200">socials</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {socials.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target={name === 'Email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-zinc-50 hover:bg-zinc-100 dark:bg-white/[0.03] dark:hover:bg-white/[0.06] border border-black/10 dark:border-white/[0.08] text-[12px] text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-all duration-200"
              >
                {icon}{name}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-white/[0.02] p-5 shadow-sm shadow-black/5 dark:shadow-none">
          <p className="text-[14px] font-medium text-zinc-800 dark:text-zinc-300 mb-4">Send me a message</p>

          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-8 gap-2">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <p className="text-[14px] font-medium text-zinc-800 dark:text-zinc-300">Message sent!</p>
              <p className="text-[12px] text-zinc-500">I'll get back to you soon.</p>
              <button onClick={() => setStatus('idle')} className="mt-2 text-[12px] text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors underline">
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-zinc-500 mb-1 font-medium uppercase tracking-wider">Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required
                    className="w-full px-3 py-2 rounded-[6px] bg-zinc-50 dark:bg-white/[0.03] border border-black/10 dark:border-white/[0.08] text-[13px] text-zinc-800 dark:text-zinc-300 placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-black/30 dark:focus:border-white/[0.2] transition-colors" />
                </div>
                <div>
                  <label className="block text-[11px] text-zinc-500 mb-1 font-medium uppercase tracking-wider">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required
                    className="w-full px-3 py-2 rounded-[6px] bg-zinc-50 dark:bg-white/[0.03] border border-black/10 dark:border-white/[0.08] text-[13px] text-zinc-800 dark:text-zinc-300 placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-black/30 dark:focus:border-white/[0.2] transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] text-zinc-500 mb-1 font-medium uppercase tracking-wider">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="What's on your mind?" required rows={4}
                  className="w-full px-3 py-2 rounded-[6px] bg-zinc-50 dark:bg-white/[0.03] border border-black/10 dark:border-white/[0.08] text-[13px] text-zinc-800 dark:text-zinc-300 placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-black/30 dark:focus:border-white/[0.2] transition-colors resize-none" />
              </div>

              {errorMsg && <p className="text-[12px] text-red-500 dark:text-red-400">{errorMsg}</p>}

              <button type="submit" disabled={status === 'loading'}
                className="flex items-center gap-2 px-4 py-2 rounded-[6px] bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-zinc-100 dark:text-zinc-900 text-[13px] font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {status === 'loading' ? (
                  <><svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Sending…</>
                ) : (
                  <><svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>Send Message</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
