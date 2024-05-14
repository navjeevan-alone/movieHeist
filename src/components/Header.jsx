import "../index.css"
export default function Header() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
    
      <header className="text-gray-600 body-font bg-gradient-primary">
        <div className="container mx-auto flex flex-wrap px-4 py-6 flex-col md:flex-row items-center justify-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/logo_name_icon.png" alt="logo" className="h-[60px] " />
          </a>

          {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
          </nav> */}
          {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button> */}
        </div>
      </header>
    </>
  );
}
