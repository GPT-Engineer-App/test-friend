const InformationalSection = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Fastighetssystemet för din verksamhet</h2>
        <p className="text-lg">Program för fastighetsägare, förvaltningsbolag och kommuner mm.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-start space-x-4">
          <img src="/placeholder.svg" alt="Webbaserat" className="h-12 w-12" />
          <div>
            <h3 className="font-bold">Webbaserat</h3>
            <p>TenFAST är byggt för webben. Ingen installation krävs, obegränsat antal användare. Använd dator eller mobilen!</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <img src="/placeholder.svg" alt="Enkel prissättning" className="h-12 w-12" />
          <div>
            <h3 className="font-bold">Enkel prissättning</h3>
            <p>Priset är rörligt och baseras på antal hyresobjekt, utan startavgift. TenFAST är gratis för mindre hyresvärdar.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <img src="/placeholder.svg" alt="Automatisera din verksamhet" className="h-12 w-12" />
          <div>
            <h3 className="font-bold">Automatisera din verksamhet</h3>
            <p>Automatisk avisering via e-post eller traditionell post. Bankkoppling för inbetalningar, bokföring, mm.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <img src="/placeholder.svg" alt="Allt i ett" className="h-12 w-12" />
          <div>
            <h3 className="font-bold">Allt i ett</h3>
            <p>Få all data relaterad till din verksamhet samlat i ett system och få stenkoll på avtal och aviseringar.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationalSection;