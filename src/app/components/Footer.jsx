import "../globals.css";
import Link from 'next/link';

export default function Footer() {
  return (
<footer className="relative pt-8 third-bg text-white">
  <div className="flex flex-col items-center justify-center">
    <div className="mx-auto w-7/12 flex flex-col items-center justify-center mb-4">
      <h1 className="text-2xl p-4">Sieventic</h1>
      <p className="text-[#cacdd2] text-center leading-7 text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dignissimos autem? Dolore unde minima, itaque optio atque maxime omnis natus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta quibusdam quia animi eius minus expedita.</p>
    </div>
    <div className="w-full px-4">
      <div className="w-full px-4">
        <ul className="flex flex-col items-center sm:flex-row sm:justify-around w-11/12 md:w-5/12 mx-auto pb-3">
          <li>
            <Link href="/about" className="font-semibold block text-sm hover:text-blue-600 transition-colors">
              Über uns
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy" className="font-semibold block text-sm hover:text-blue-600 transition-colors">
              Datenschutzrichtlinien
            </Link>
          </li>
          <li>
            <Link href="/contact" className="font-semibold block text-sm hover:text-blue-600 transition-colors">
              Kontaktiere uns
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  <div className="flex flex-wrap items-center justify-center mt-4 p-4">
      <div className="text-xs">
        Copyright ©Yann Hofwil 2024
      </div>
  </div>
</footer>
  );
};
