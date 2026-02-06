import React from "react";
import FAQAccordion from "./Helpers/FAQAccordion";
import { faqContent } from "../mockData/FAQContent";

function FAQ() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 ">
      <h2>Frequently Asked Questions</h2>
      <FAQAccordion items={faqContent} />
    </div>
  );
}

export default FAQ;
