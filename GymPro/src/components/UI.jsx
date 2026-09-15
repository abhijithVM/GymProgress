export function PageTitle({ eyebrow, title, children }) { return <header className="page-title"><div><p>{eyebrow}</p><h1>{title}</h1></div>{children}</header>; }
export function Card({ children, className = '' }) { return <section className={`card ${className}`}>{children}</section>; }
export function Button({ children, ...props }) { return <button className="button" {...props}>{children}</button>; }
export function Field({ label, ...props }) { return <label className="field"><span>{label}</span><input {...props} /></label>; }
