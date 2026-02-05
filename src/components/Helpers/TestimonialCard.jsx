function TestimonialCard({ name, role, avatar, verified, rating, quote }) {
  return (
    <div className="max-w-lg rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 p-6 shadow-xl border border-white/10 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-slate-100">{name}</h4>
            {verified && <span className="text-blue-400 text-sm">✔</span>}
          </div>
          <p className="text-sm text-slate-400">{role}</p>
        </div>
      </div>

      {/* Quote */}
      <p className="text-slate-200 leading-relaxed mb-6 flex-1">{quote}</p>

      {/* Stars */}
      <div className="flex gap-1 text-amber-300 mt-auto">
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.157c.969 0 1.371 1.24.588 1.81l-3.363 2.445a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.363-2.445a1 1 0 00-1.175 0l-3.363 2.445c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.98 9.382c-.783-.57-.38-1.81.588-1.81h4.157a1 1 0 00.95-.69l1.286-3.955z" />
          </svg>
        ))}
      </div>
    </div>
  );
}

export default TestimonialCard;
