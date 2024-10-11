import "../globals.css";
import Link from 'next/link';
import Image from "next/image";
import { useState, useEffect, useRef } from 'react';

export default function NavbarHome() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const exampleSuggestions = [
    { id: 1, title: "Blog", link: "/blog" },
    { id: 2, title: "Über uns", link: "/about" },
    { id: 3, title: "Kontaktiere uns", link: "/contact" },
    { id: 4, title: "Datenschutzrichtlinien", link: "/privacy-policy" },
  ];
  
  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (newQuery) {
      const filteredSuggestions = exampleSuggestions.filter(suggestion =>
        suggestion.title.toLowerCase().includes(newQuery.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions(exampleSuggestions.slice(0, 5)); // Show first 5 suggestions if input is empty
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.title);
    setSuggestions([]);
    setDropdownVisible(false);
    inputRef.current.blur();
  };

  const handleInputClick = () => {
    setDropdownVisible(true);
    setSuggestions(exampleSuggestions.slice(0, 5));
  };

  const handleCloseDropdown = () => {
    setDropdownVisible(false);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) && 
        inputRef.current && 
        !inputRef.current.contains(event.target)
      ) {
        handleCloseDropdown();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'escape') {
        handleCloseDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      {dropdownVisible && (
        <div ref={dropdownRef} className="absolute top-[-5px] left-0 z-20 w-full h-auto bg-white z-8 shadow-lg rounded-lg overflow-auto mt-2 mx-auto">

          <div className="w-2/3 mx-auto pt-2">
            <div className="flex flex-col sm:flex-row space-x-4 justify-between items-center p-2">
              <span className="hidden sm:block font-semibold">Vorschläge</span>
              <div className="relative xl:w-2/4">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={handleChange}
                  onClick={handleInputClick}
                  placeholder="Suche..."
                  className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none"
                />
                <div className="absolute left-3 top-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 4a6 6 0 100 12 6 6 0 000-12zm8 8h.01M20 20l-4-4"
                    />
                  </svg>
                </div>

              </div>
              <button onClick={handleCloseDropdown} className="text-black mt-4 sm:mt-0 text-lg">Abbrechen</button>
            </div>
            
            <div className="flex flex-col mt-10 pb-10">
              {suggestions.map(suggestion => (
                <Link href={suggestion.link}>
                  <div
                    key={suggestion.id} 
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="flex cursor-pointer p-4 hover:bg-gray-200 transition-colors space-x-2 duration-200 items-center"
                  >
                    <span>{suggestion.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

      </div>
      )}


    <div className="secondary-bg pt-10">
      <div className="">
        <ul className="flex items-center flex-col sm:flex-row">
          <ul className="hidden sm:flex justify-center gap-3 w-2/5">

            <li><Image src="/linkedin.png" alt="linkedin" width={30} height={30}/></li>
            <li><Image src="/facebook.png" alt="facebook" width={30} height={30}/></li>
            <li><Image src="/instagram.png" alt="instagram" width={30} height={30}/></li>
            <li><Image src="/youtube.png" alt="youtube" width={30} height={30}/></li>
          </ul>

          <li className="text-center w-2/3 mb-8 sm:mb-0">
            <h1 className="logo flex justify-center">SIEVENTIC</h1>
            <p>Alles rund um die Schweiz</p>
          </li>

          <li className="flex justify-center w-2/5">
            <div className="flex items-center justify-center">
              <div className="relative w-3/4">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={handleChange}
                  onClick={handleInputClick}
                  placeholder="Suche..."
                  className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none"
                />
                <div className="absolute left-3 top-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 4a6 6 0 100 12 6 6 0 000-12zm8 8h.01M20 20l-4-4"
                    />
                  </svg>
                </div>

              </div>
            </div>
          </li>

        </ul>
      </div>
      
      <div className="container flex items-center sm:h-24 bg-white relative z-10 top-10 mx-auto nav-width">
        <nav className="contents font-semibold text-color-primary text-base lg:text-lg">
          <ul className="mx-auto grid-cols-2 sm:flex items-center">
            <li className="p-5 xl:p-8">
              <Link href="/">
                <p>
                  <span className="navhover flex justify-center">Startseite</span>
                </p>
              </Link>
            </li>
            <li className="p-5 xl:p-8">
              <Link href="/blog">
                <p>
                  <span className="navhover flex justify-center">sich informieren</span>
                </p>
              </Link>
            </li>
            <li className="p-5 xl:p-8">
              <Link href="/about">
                <p>
                  <span className="navhover flex justify-center">Über uns</span>
                </p>
              </Link>
            </li>
            <li className="p-5 xl:p-8">
              <Link href="/contact">
                <p>
                  <span className="navhover flex justify-center">Kontaktiere uns</span>
                </p>
                </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
)};
