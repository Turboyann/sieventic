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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente officiis aut dolorum repudiandae vitae aliquid mollitia? Sapiente magnam magni accusantium.
    </p>
    <hr className="border-gray-300 mb-6" />
  </div>

  <div className="container mx-auto py-10">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col items-center md:w-1/2 p-6">
        <h1 className="text-3xl text-color-primary mb-4 font-[200]">WER WIR SIND</h1>
        <p className="text-gray-700">
          Sieventic ist ein Schweizer Blog, der 2024 von einem Studenten erstellt wurde. Er zielt darauf ab, Schweizer besser auf ihr Leben vorzubereiten und ihnen beizustehen.
        </p>
      </div>
      <div className="md:w-1/2 p-6">
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dicta veniam incidunt sed autem delectus et corrupti tenetur natus odio laudantium, deleniti doloribus. Nihil esse et corporis voluptate quisquam dolores commodi.
        </p>
      </div>
    </div>
  </div>

  <div className="container mx-auto py-10">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 p-6">
        <h1 className="text-3xl text-color-primary mb-4 font-[200]">Unser Ziel</h1>
        <p className="text-gray-700">
          Wir unterstützen Schweizer beim Erwachsenwerden und teilen Informationen, die oft unverständlich oder schwer zugänglich sind. Wir fokussieren uns dabei auf Themengebiete wie Bildung, Politik und mehr.
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
        <h1 className="text-3xl text-color-primary mb-4 font-[200]">Wer wir sind</h1>
        <p className="text-gray-700">
          Sieventic ist ein Schweizer Blog, der 2024 von einem Studenten erstellt wurde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sint amet doloribus molestias delectus? Vel.
        </p>
      </div>
    </div>
  </div>
</div>

    </main>
  );
}
