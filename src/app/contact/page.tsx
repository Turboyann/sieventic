import Image from "next/image";
import Link from "next/link";
import "../globals.css";

export default function contact() {
  const containerStyle: React.CSSProperties = {
    position: 'relative',  // Must be a valid position value like 'absolute', 'relative', etc.
    width: '100%',         // Should be valid CSS values
    height: '350px',
  };

  const overlayStyle: React.CSSProperties = {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.4)',
  };

  const backgroundImageStyle: React.CSSProperties = {
    backgroundImage: 'url("/contact-img-1.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'left',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
  };

  const aboutImgOne: React.CSSProperties = {
    padding: '20px',
    margin: 'auto',
    height: '500px',
    width: 'auto',
    borderRadius: '50%',
  };

  const aboutImg: React.CSSProperties = {
    maxWidth: '400px',
    width: '100%',
    minWidth: '250px',
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div style={containerStyle}>
        <div style={backgroundImageStyle}>
          <div
            style={overlayStyle} className="flex flex-col justify-center items-center h-full text-white">
              <div className="w-3/5">
                <div className="flex flex-col items-start w-96">
                  <h1 className="text-3xl font-medium">
                  Kontaktiere uns
                  </h1>
                  <p className="text-left text-lg leading-7 font-[500] pr-24 md:pr-0">
                  Erhalte Antworten auf deine Fragen und lerne mehr über unsere Angebote und Möglichkeiten.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>

<div className="flex justify-between w-3/4 sm:my-20 lg:w-3/5">
  <div className="hidden lg:block">
    <Image style={aboutImg} src='/contact-img.jpg' alt="Contact image" width={3264} height={3610} />
  </div>

  <div className="flex flex-col w-full my-12 sm:my-0 lg:w-3/5 justify-center mx-10">
    <h1 className="text-2xl font-bold mb-4">Brauchst du Hilfe?</h1>
    
    <form className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Dein Name"
        className="p-2 border border-gray-300 rounded focus:outline-none focus:shadow-md"
        required
      />
      <input
        type="email"
        placeholder="Deine E-Mail"
        className="p-2 border border-gray-300 rounded focus:outline-none focus:shadow-md"
        required
      />
      <textarea
        placeholder="Nachricht"
        className="p-2 border border-gray-300 rounded focus:outline-none focus:shadow-md"
        rows={4}
        required
      ></textarea>
      <button
        type="submit"
        className="third-bg text-white font-semibold p-2 rounded hover:bg-[#333333] transition-colors"
      >
        Absenden
      </button>
    </form>

    <p className="mt-4">
      Über mail? Hier kannst du uns erreichen: 
      <a href="mailto:mailkommtnoch@gmail.com" className="text-blue-600"> mailkommtnoch@gmail.com</a>
    </p>
  </div>
  
</div>

    </main>
  );
}
