import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-main rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://pluviaux.fr"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/images/logo.png"
              width={80}
              height={80}
              className="rounded-lg"
              alt="Pluviaux Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Pluviaux
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 ">
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">
                Accueil
              </a>
            </li>
            <li>
              <a href="/story" className="hover:underline me-4 md:me-6">
                Notre histoire
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline me-4 md:me-6">
                Nos services
              </a>
            </li>
            <li>
              <a href="mailto:robin@pluviaux.fr" className="hover:underline">
                Me contacter
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm  sm:text-center ">
          © 2024{""}
          <a href="https://pluviaux.fr" className="hover:underline">
            Pluviaux™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
