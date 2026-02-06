const QuoteCard = ({ text }) => {
  return (
    <div className="relative max-w-3xl mx-auto bg-slate-900 rounded-xl p-8 text-center shadow-lg">
      <p className="text-lg md:text-xl text-white leading-relaxed ">{text}</p>
    </div>
  );
};
export default QuoteCard;
