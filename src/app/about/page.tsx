import Image from "next/image";
import "../globals.css";

export default function about() {
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
  };

  const overlayStyle: React.CSSProperties = {
    content: '',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.3)',
  };

  const backgroundImageStyle: React.CSSProperties = {
    backgroundImage: 'url("/about-img.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div style={containerStyle} className="h-[250px] md:h-[300px] sm:h-[200px]">
        <div style={backgroundImageStyle}>
          <div
            style={overlayStyle} className="flex flex-col justify-center items-center h-full text-white">
          </div>
        </div>
      </div>

<div className="flex flex-col w-3/5 mx-auto">
  <div className="bg-theme-color-1 text-center pt-10">
    <h1 className="text-4xl text-color-primary mb-4 font-[200]">ÜBER UNS</h1>
    <p className="max-w-2xl mx-auto text-gray-700 mb-6">
      Wir sind ein neuer Blog, der es sich zur Aufgabe gemacht hat, das Leben unserer Mitmenschen in der Schweiz zu verbessern.
    </p>
    <hr className="border-gray-300 mb-6" />
  </div>

  <div className="container mx-auto py-10">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col items-center md:w-1/2 p-6">
        <h1 className="text-3xl text-color-primary mb-4 font-[200]">WER WIR SIND</h1>
        <p className="text-gray-700">
          Sieventic ist ein Schweizer Blog, der 2024 von einem Studenten als Maturaarbeit gestartet wurde. Was als Schulprojekt begann, entwickelte sich weiter, als der Gründer das Potenzial erkannte, den Blog langfristig fortzuführen. Mit dem Ziel, das Leben seiner Mitmenschen positiv zu beeinflussen, wird der Blog kontinuierlich ausgebaut und mit wertvollen Inhalten gefüllt.
        </p>
      </div>
      <div className="md:w-1/2 p-6">
        <p className="text-gray-700">
          Die Grundidee des Blogs ist es, Wissen zu vermitteln, das dem Autor in der Schweiz oft schwer zu entdecken und mühsam zu recherchieren war. Viele nützliche Informationen, die für den Alltag und wichtige Entscheidungen relevant sind, bleiben oft unzugänglich oder schwer verständlich. Der Blog soll genau diese Themen einfach und klar aufbereiten, um Schweizer bei selbstbestimmten Entscheidungen zu unterstützen.
        </p>
      </div>
    </div>
  </div>

  <div className="container mx-auto py-10">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 p-6">
        <h1 className="text-3xl text-color-primary mb-4 font-[200]">Unser Ziel</h1>
        <p className="text-gray-700">
          Unser Ziel ist es, Schweizerinnen und Schweizern bei alltäglichen Herausforderungen zur Seite zu stehen. Ob es um komplexe Themen wie Steuern, die Krankenkasse, Versicherungen oder andere praktische Fragen des Alltags geht – wir bieten leicht verständliche Informationen und nützliche Tipps, um Ihnen den Umgang mit diesen Themen zu erleichtern. Unser Blog soll als verlässliche Anlaufstelle dienen, um fundierte Entscheidungen zu treffen und sich im oft komplizierten Alltag besser zurechtzufinden.
        </p>
      </div>
      <div className="flex justify-center items-center md:w-1/2 p-6">
        <Image className="w-full h-auto object-cover" src='/ziel.png' alt="About Image 1" width={2563} height={1440} />
      </div>
    </div>

    <div className="flex flex-col-reverse md:flex-row items-center">
      <div className="flex justify-center items-center md:w-1/2 p-6">
        <Image className="w-full h-auto object-cover" src='/wir.png' alt="About Image 2" width={2563} height={1440} />
      </div>
      <div className="md:w-1/2 p-6">
        <h1 className="text-3xl text-color-primary mb-4 font-[200]">Mitmachen und Mitgestalten</h1>
        <p className="text-gray-700">
          Wir glauben an die Kraft der Gemeinschaft und laden Sie herzlich ein, aktiv an unserem Blog teilzunehmen! Ihre Meinungen, Ideen und Erfahrungen sind uns wichtig. Teilen Sie uns mit, welche Themen Sie interessieren, oder schlagen Sie neue Inhalte vor, die Sie gerne behandelt sehen würden. Nutzen Sie die Kommentarfunktion, um Ihre Gedanken zu unseren Beiträgen zu äußern, oder senden Sie uns direkt Ihre Anregungen über unsere Mail. Bewegen Sie sich dafür auf die Sektion "Kontakt".
        </p>
      </div>
    </div>
  </div>
</div>

    </main>
  );
}
