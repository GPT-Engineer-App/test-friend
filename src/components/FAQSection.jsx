import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    "Vad är TenFAST fastighetssystem?",
    "Är TenFAST webbaserat?",
    "Vad kostar systemet?",
    "Funkar fastighetssystemet på mobilen?",
    "Hur kan fastighetssystemet vara så billigt?",
    "Varför kan jag använda det gratis?",
    "Vad räknas som ett hyresobjekt?",
    "Vilka funktioner finns i fastighetsprogrammet?",
    "Kan jag skapa hyresavtal och signera digitalt?",
    "Kan hyresgästen använda det?",
    "Indexering av hyra",
    "Hur gör jag med mina befintliga hyresavtal?",
    "Kan jag få hjälp att komma i gång?",
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Vanliga frågor</h2>
      </div>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left font-bold text-lg py-2"
              onClick={() => toggleFAQ(index)}
            >
              {faq}
            </button>
            {openIndex === index && (
              <div className="pl-4">
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;