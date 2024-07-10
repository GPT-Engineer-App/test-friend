const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Det här får du med TenFAST</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex items-start space-x-4">
          <img src="/placeholder.svg" alt="Avtalskapare med mallar" className="h-12 w-12" />
          <div>
            <h3 className="font-bold">Avtalskapare med mallar</h3>
            <p>Välj bland färdiga mallar eller skapa egna. Signera digitalt med BankID eller med penna och papper.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <img src="/placeholder.svg" alt="Hyresgäst inloggning" className="h-12 w-12" />
          <div>
            <h3 className="font-bold">Hyresgäst inloggning</h3>
            <p>Hyresgästen får inloggning där hyresavtal, hyresavier och andra viktiga dokument kan hittas.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <img src="/placeholder.svg" alt="Bostadskö" className="h-12 w-12" />
          <div>
            <h3 className="font-bold">Bostadskö</h3>
            <p>Bostadskö för hyresgäster. Länka till ett formulär från din hemsida eller integrera med vårt API.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <img src="/placeholder.svg" alt="Bokföring" className="h-12 w-12" />
          <div>
            <h3 className="font-bold">Bokföring</h3>
            <p>Hyresaviseringar och inbetalningar integrerat med Fortnox, så att bokföringen sker automatiskt till Sie-l fil. Hantera moms och periodisering.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <img src="/placeholder.svg" alt="Statistik" className="h-12 w-12" />
          <div>
            <h3 className="font-bold">Statistik</h3>
            <p>Få en översikt av hyresintäkterna och vilka hyresgäster som är problematiska.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <img src="/placeholder.svg" alt="Felanmälan" className="h-12 w-12" />
          <div>
            <h3 className="font-bold">Felanmälan</h3>
            <p>Samla felanmälan från hyresgäster och sätt upp flöden för åtgärda med externa leverantörer.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <img src="/placeholder.svg" alt="Automatiska inbetalningar" className="h-12 w-12" />
          <div>
            <h3 className="font-bold">Automatiska inbetalningar</h3>
            <p>Ta emot betalningar via Bankgiro, Banköverföring, Autogiro eller Swish.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <img src="/placeholder.svg" alt="Öppet API" className="h-12 w-12" />
          <div>
            <h3 className="font-bold">Öppet API</h3>
            <p>Öppet API för att integrera med andra system.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;