const PricingSection = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Passar stora och små</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border p-4 rounded-lg text-center">
          <h3 className="font-bold text-xl mb-4">Free</h3>
          <p className="text-lg mb-4">0 kr</p>
          <p className="mb-4">För privatpersoner och små företag med upp till 5 hyresobjekt.</p>
          <button className="bg-blue-900 text-white px-6 py-2 rounded">Kom igång</button>
        </div>
        <div className="border p-4 rounded-lg text-center">
          <h3 className="font-bold text-xl mb-4">Pro</h3>
          <p className="text-lg mb-4">10 kr / hyresobjekt / månad</p>
          <p className="mb-4">För privata fastighetsägare upp till 100 hyresobjekt.</p>
          <button className="bg-blue-900 text-white px-6 py-2 rounded">Kom igång</button>
        </div>
        <div className="border p-4 rounded-lg text-center">
          <h3 className="font-bold text-xl mb-4">Enterprise</h3>
          <p className="text-lg mb-4">För fastighetsbolag eller förvaltare från 10 till tusentals hyresobjekt.</p>
          <button className="bg-blue-900 text-white px-6 py-2 rounded">Kontakta oss</button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;