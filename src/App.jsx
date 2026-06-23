import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, Menu, X, Check } from "lucide-react";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');
:root{font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased}
.optB{--bg:#13181A;--panel:#1A2123;--panel2:#202A2C;--off:#E7EDEA;--mint:#5FB98E;--amber:#D7A23F;--line:#2B3639;--muted:#90A39B;--danger:#ffb4a8;font-family:'Hanken Grotesk',sans-serif;background:var(--bg);color:var(--off);line-height:1.55;min-height:100vh}
.optB *{box-sizing:border-box;margin:0;padding:0}.optB h1,.optB h2,.optB h3{font-family:'Space Grotesk',sans-serif;font-weight:600;line-height:1.1;letter-spacing:-.02em}.optB a{color:inherit;text-decoration:none}.optB .mono{font-family:'IBM Plex Mono',monospace}.optB .wrap{max-width:1140px;margin:0 auto;padding:0 26px}.optB .lbl{font-family:'IBM Plex Mono',monospace;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--mint)}
.optB .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-family:'Space Grotesk';font-weight:600;font-size:.93rem;padding:12px 20px;border-radius:7px;cursor:pointer;border:1px solid transparent;transition:all .15s}.optB .pri{background:var(--amber);color:#1A1304}.optB .pri:hover{filter:brightness(1.07)}.optB .gho{border-color:var(--line);color:var(--off)}.optB .gho:hover{border-color:var(--mint)}
.optB header{position:sticky;top:0;z-index:40;background:rgba(19,24,26,.88);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}.optB .nav{display:flex;align-items:center;justify-content:space-between;height:66px}.optB .brand{font-family:'Space Grotesk';font-weight:700;font-size:1.1rem;letter-spacing:.01em;display:flex;align-items:center;gap:9px}.optB .brand .sq{width:12px;height:12px;background:var(--mint);border-radius:3px}.optB .nlinks{display:flex;gap:24px}.optB .nlinks a{font-family:'IBM Plex Mono';font-size:.82rem;color:var(--muted)}.optB .nlinks a:hover{color:var(--off)}.optB .mbtn{display:none;background:none;border:none;color:var(--off);cursor:pointer}
.optB .mobile{display:none;border-top:1px solid var(--line);padding:0 26px 18px;background:var(--bg)}.optB .mobile a{display:block;padding:11px 0;color:var(--muted);font-family:'IBM Plex Mono';font-size:.82rem}.optB .bar{border-bottom:1px solid var(--line);background:var(--panel)}.optB .bar .wrap{display:flex;gap:8px 28px;flex-wrap:wrap;padding:10px 26px;font-family:'IBM Plex Mono';font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}.optB .bar b{color:var(--amber);font-weight:500}
.optB .hero{padding:72px 0}.optB .hero h1{font-size:clamp(2.3rem,5.2vw,4rem);max-width:16ch;margin:18px 0 0}.optB .hero h1 .hl{color:var(--mint)}.optB .hero p{font-size:1.18rem;color:var(--muted);max-width:56ch;margin-top:22px}.optB .hero .row{display:flex;gap:13px;flex-wrap:wrap;margin-top:32px}.optB .keypoints{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px}.optB .keypoints span{border:1px solid var(--line);background:var(--panel);border-radius:999px;padding:8px 12px;color:var(--muted);font-size:.88rem}
.optB .sec{padding:78px 0}.optB .sec h2{font-size:clamp(1.9rem,3.4vw,2.7rem);max-width:22ch}.optB .sec .intro{color:var(--muted);font-size:1.05rem;max-width:58ch;margin-top:14px}.optB .diag{margin-top:46px;border:1px solid var(--line);border-radius:12px;overflow:hidden}.optB .drow{display:grid;grid-template-columns:1.1fr 1.6fr;gap:24px;padding:22px 26px;border-bottom:1px solid var(--line);background:var(--panel)}.optB .drow:last-child{border-bottom:none}.optB .drow .t{display:flex;align-items:flex-start;gap:12px}.optB .drow .ic{width:22px;height:22px;border-radius:50%;background:rgba(95,185,142,.16);color:var(--mint);display:grid;place-items:center;flex-shrink:0;margin-top:2px}.optB .drow h3{font-size:1.18rem}.optB .drow p{color:var(--muted);font-size:.96rem}.optB .drow .tag{font-family:'IBM Plex Mono';font-size:.66rem;letter-spacing:.1em;text-transform:uppercase;color:var(--mint);margin-top:6px}
.optB .steps{padding:78px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:var(--panel)}.optB .sgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:44px}.optB .step{background:var(--bg);border:1px solid var(--line);border-radius:10px;padding:22px}.optB .step .n{font-family:'IBM Plex Mono';color:var(--amber);font-size:.9rem;font-weight:600}.optB .step h3{font-size:1.1rem;margin:10px 0 7px}.optB .step p{color:var(--muted);font-size:.9rem}
.optB .ingredients{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:40px}.optB .ingredient{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:22px}.optB .ingredient h3{font-size:1.12rem;margin-bottom:8px}.optB .ingredient p{color:var(--muted);font-size:.95rem}.optB .faq{margin-top:36px;border-top:1px solid var(--line)}.optB details{border-bottom:1px solid var(--line);padding:18px 0}.optB summary{cursor:pointer;font-family:'Space Grotesk';font-weight:600}.optB details p{color:var(--muted);margin-top:10px;max-width:72ch}
.optB .cta{padding:92px 0;text-align:center}.optB .cta h2{font-size:clamp(2rem,4.2vw,3.2rem);max-width:20ch;margin:0 auto}.optB .cta p{color:var(--muted);font-size:1.1rem;max-width:54ch;margin:16px auto 0}.optB .formbox{margin-top:34px;max-width:780px;margin-left:auto;margin-right:auto;text-align:left;background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:26px}.optB .formgrid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.optB .field{display:flex;flex-direction:column;gap:7px}.optB label{font-family:'IBM Plex Mono';font-size:.68rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}.optB input,.optB select,.optB textarea{width:100%;background:var(--bg);border:1px solid var(--line);border-radius:8px;color:var(--off);padding:12px 13px;font:inherit;outline:none}.optB textarea{min-height:120px;resize:vertical}.optB input:focus,.optB select:focus,.optB textarea:focus{border-color:var(--mint)}.optB .full{grid-column:1/-1}.optB .note{font-size:.86rem;color:var(--muted);margin-top:10px}.optB .status{font-size:.92rem;margin-top:12px}.optB .success{color:var(--mint)}.optB .error{color:var(--danger)}.optB .hp{display:none!important}.optB footer{border-top:1px solid var(--line);padding:34px 0}.optB .ft{display:flex;justify-content:space-between;flex-wrap:wrap;gap:14px;font-family:'IBM Plex Mono';font-size:.74rem;color:var(--muted)}
@media(max-width:820px){.optB .sgrid,.optB .ingredients{grid-template-columns:1fr 1fr}.optB .drow{grid-template-columns:1fr}}@media(max-width:600px){.optB .nlinks,.optB header .nav>.btn{display:none}.optB .mbtn{display:block}.optB .mobile.open{display:block}.optB .sgrid,.optB .ingredients,.optB .formgrid{grid-template-columns:1fr}.optB .full{grid-column:auto}.optB .sec,.optB .steps,.optB .cta{padding:54px 0}.optB .hero{padding:54px 0}}
`;

const DIAG = [
  ["Supplier discovery & vetting", "Weeks of outreach, sampling and screening, run for you. You only see suppliers that pass basic fit checks.", "scope: handled"],
  ["Source verification", "On-the-ground screening and transparent reporting, so legitimacy is checked instead of assumed.", "scope: handled"],
  ["Batch consistency", "Supplier discussions are anchored around active level, form, lot-level documentation and repeatable specification.", "scope: enforced"],
  ["Audit-ready documentation", "CoA, spec sheet, SDS, allergen and origin records are coordinated based on your market and supplier capability.", "scope: required"],
  ["Single point of contact", "One sourcing contact who knows your spec, market and timeline, and keeps the process moving.", "scope: always"],
];

const STEPS = [
  ["01", "Brief", "Ingredient, active level, form, market, volume and certification requirement."],
  ["02", "Source & screen", "We identify suitable Indian suppliers and screen them before they reach you."],
  ["03", "Sample & verify", "Samples and documents are coordinated for your lab or procurement review."],
  ["04", "Coordinate", "We manage supplier communication, documentation and next steps as demand grows."],
];

const INGREDIENTS = [
  ["Ashwagandha", "Root, powder and extract sourcing support for stress, sleep and adaptogen product lines."],
  ["Turmeric", "Turmeric powder and extract sourcing, including curcumin-led requirements for nutraceutical brands."],
  ["Moringa", "Leaf powder and ingredient sourcing for greens, nutrition and functional wellness products."],
  ["Tulsi", "Tulsi leaf, powder and extract sourcing support for herbal wellness formulations."],
  ["Herbal extracts", "Botanical extracts coordinated by active level, form, documentation and market requirement."],
  ["Essential oils", "Essential oil sourcing support for cosmetic, aromatherapy and wellness applications."],
];

const FAQS = [
  ["What does Aurelis Ingredients do?", "Aurelis Ingredients helps global wellness, supplement and cosmetic brands source botanical ingredients from India by handling supplier discovery, screening, samples, documentation and coordination."],
  ["Which ingredients can you help source?", "We focus on Indian botanical ingredients such as ashwagandha, turmeric, moringa, tulsi, herbal extracts, botanical powders and essential oils."],
  ["Who is this service for?", "Aurelis is built for procurement managers, ingredient buyers, product development teams, supplement brands, wellness brands, cosmetic brands and private-label manufacturers."],
  ["Do you provide samples and documentation?", "We can coordinate samples and relevant supplier documentation such as certificate of analysis, specification sheet, SDS, allergen information and origin records, depending on the requirement and supplier availability."],
  ["Are you a trader, processor or sourcing desk?", "Aurelis starts as a sourcing desk for verified Indian botanical ingredients and is designed to expand into processing and export-led ingredient supply over time."],
];

function App() {
  const [m, setM] = useState(false);
  const [status, setStatus] = useState("");
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "8ebffb6e-60cd-48e9-804d-996e03b614e0";

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", accessKey);
    formData.append("subject", "New sourcing inquiry from Aurelis Ingredients website");
    formData.append("from_name", "Aurelis Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        setStatus("success: Thanks — we received your requirement and will respond shortly.");
        e.currentTarget.reset();
      } else {
        setStatus("error: Something went wrong. Please email us directly.");
      }
    } catch {
      setStatus("error: Network issue. Please email us directly.");
    }
  }

  const navLinks = [
    ["#scope", "Scope"], ["#process", "Process"], ["#ingredients", "Ingredients"], ["#faq", "FAQ"], ["#write-to-us", "Write to us"]
  ];

  return (
    <div className="optB">
      <style>{CSS}</style>
      <header>
        <div className="wrap nav">
          <a href="#top" className="brand"><span className="sq" />AURELIS INGREDIENTS</a>
          <nav className="nlinks" aria-label="Main navigation">{navLinks.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</nav>
          <a href="#write-to-us" className="btn pri" style={{ padding: "9px 16px" }}>Request samples</a>
          <button className="mbtn" aria-label="Toggle menu" onClick={() => setM(!m)}>{m ? <X /> : <Menu />}</button>
        </div>
        <nav className={m ? "mobile open" : "mobile"} aria-label="Mobile navigation">{navLinks.map(([href, label]) => <a key={href} href={href} onClick={() => setM(false)}>{label}</a>)}</nav>
      </header>

      <main id="top">
        <div className="bar"><div className="wrap">
          <span>SOURCING DESK</span><span>FOR <b>WELLNESS & SUPPLEMENT BRANDS</b></span><span>MARKETS <b>US · EU · UAE · AUS · KR · JP</b></span><span><b>NO BLACK BOX</b></span>
        </div></div>

        <section className="hero" aria-labelledby="hero-title"><div className="wrap">
          <span className="lbl">Botanical ingredient sourcing from India</span>
          <h1 id="hero-title">Your botanical sourcing desk, <span className="hl">without the headcount.</span></h1>
          <p>Aurelis Ingredients helps wellness, supplement and cosmetic brands source botanical ingredients from India with supplier screening, samples, documentation and coordination handled.</p>
          <div className="row">
            <a href="#write-to-us" className="btn pri">Request samples <ArrowRight size={16} /></a>
            <a href="#process" className="btn gho">See how it works</a>
          </div>
          <div className="keypoints" aria-label="Key sourcing categories"><span>Ashwagandha</span><span>Turmeric</span><span>Moringa</span><span>Tulsi</span><span>Extracts</span><span>Essential oils</span></div>
        </div></section>

        <section className="sec" id="scope" aria-labelledby="scope-title"><div className="wrap">
          <span className="lbl">What we take off your plate</span>
          <h2 id="scope-title" style={{ marginTop: 12 }}>The sourcing workload, handled.</h2>
          <p className="intro">Everything below is labor and diligence we run so your procurement or product team does not have to. No blind supplier search, no endless follow-ups, no black box.</p>
          <div className="diag">{DIAG.map(([t, p, tag]) => (
            <article className="drow" key={t}>
              <div className="t"><span className="ic"><Check size={13} strokeWidth={3} /></span><div><h3>{t}</h3><div className="tag mono">{tag}</div></div></div>
              <p>{p}</p>
            </article>
          ))}</div>
        </div></section>

        <section className="steps" id="process" aria-labelledby="process-title"><div className="wrap">
          <span className="lbl">Process</span>
          <h2 id="process-title" style={{ marginTop: 12 }}>Four steps, fully documented.</h2>
          <div className="sgrid">{STEPS.map(([n, t, p]) => (
            <article className="step" key={n}><span className="n">{n}</span><h3>{t}</h3><p>{p}</p></article>
          ))}</div>
        </div></section>

        <section className="sec" id="ingredients" aria-labelledby="ingredients-title"><div className="wrap">
          <span className="lbl">Ingredients</span>
          <h2 id="ingredients-title" style={{ marginTop: 12 }}>Botanical ingredients global buyers already source from India.</h2>
          <p className="intro">The site is structured for SEO, GEO and AEO around high-intent ingredient sourcing questions, while keeping the buyer journey focused on sample requests and qualified sourcing enquiries.</p>
          <div className="ingredients">{INGREDIENTS.map(([t, p]) => <article className="ingredient" key={t}><h3>{t}</h3><p>{p}</p></article>)}</div>
        </div></section>

        <section className="sec" id="faq" aria-labelledby="faq-title"><div className="wrap">
          <span className="lbl">Buyer questions</span>
          <h2 id="faq-title" style={{ marginTop: 12 }}>Answers procurement teams need before they write in.</h2>
          <div className="faq">{FAQS.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
        </div></section>

        <section className="cta" id="write-to-us" aria-labelledby="form-title"><div className="wrap">
          <h2 id="form-title">Send us the spec. We'll run it down.</h2>
          <p>Tell us what you are sourcing. If it fits our network, we will respond and book a call if needed.</p>
          <form className="formbox" onSubmit={handleSubmit}>
            <input type="checkbox" name="botcheck" className="hp" tabIndex="-1" autoComplete="off" />
            <div className="formgrid">
              <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" required placeholder="Jane Smith" /></div>
              <div className="field"><label htmlFor="email">Work email</label><input id="email" name="email" type="email" required placeholder="jane@brand.com" /></div>
              <div className="field"><label htmlFor="company">Company</label><input id="company" name="company" required placeholder="Company name" /></div>
              <div className="field"><label htmlFor="website">Company website</label><input id="website" name="website" type="url" placeholder="https://" /></div>
              <div className="field"><label htmlFor="market">Country / market</label><input id="market" name="market" placeholder="USA, EU, UAE..." /></div>
              <div className="field"><label htmlFor="ingredient">Ingredient</label><input id="ingredient" name="ingredient" required placeholder="Ashwagandha, turmeric extract..." /></div>
              <div className="field"><label htmlFor="volume">Expected volume</label><input id="volume" name="volume" placeholder="Monthly or annual estimate" /></div>
              <div className="field"><label htmlFor="certifications">Certifications needed</label><input id="certifications" name="certifications" placeholder="Organic, GMP, FSSAI, ISO..." /></div>
              <div className="field"><label htmlFor="form_needed">Form needed</label><select id="form_needed" name="form_needed"><option>Root / raw material</option><option>Powder</option><option>Extract</option><option>Essential oil</option><option>Not sure yet</option></select></div>
              <div className="field"><label htmlFor="samples_needed">Need samples?</label><select id="samples_needed" name="samples_needed"><option>Yes</option><option>No</option><option>Later</option></select></div>
              <div className="field full"><label htmlFor="message">Requirement details</label><textarea id="message" name="message" required placeholder="Tell us the specification, active level, target price, timeline, documentation requirement, or supplier issue you are trying to solve." /></div>
            </div>
            <button className="btn pri" type="submit" style={{ marginTop: 18 }}>Send requirement <ArrowRight size={16} /></button>
            <p className="note">No spam. No weird pitch deck. Just your sourcing requirement and a straight response.</p>
            {status && <p className={status.startsWith("success") ? "status success" : status.startsWith("error") ? "status error" : "status"}>{status.replace("success: ", "").replace("error: ", "")}</p>}
          </form>
        </div></section>
      </main>

      <footer><div className="wrap ft">
        <span>AURELIS INGREDIENTS · BOTANICAL SOURCING DESK</span>
        <span>BOTANICAL INGREDIENT SOURCING FROM INDIA</span>
      </div></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
