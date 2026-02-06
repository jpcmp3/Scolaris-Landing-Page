import CTAbutton from "./CTAbutton";
const QuoteCard = ({ text }) => {
  return (
    <div className="relative max-w-3xl mx-auto bg-indigo-300 rounded-xl p-8 text-center shadow-lg">
      <p className="text-lg md:text-xl text-black leading-relaxed pb-5">
        {text}
      </p>
      <CTAbutton title="Start now" length="80" />
    </div>
  );
};
export default QuoteCard;
