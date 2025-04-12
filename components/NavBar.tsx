import Image from "next/image";
function NavBar() {
  return (
    <div className='flex items-center justify-between w-full h-16 px-4 md:px-8'>
      <div className='flex items-center'>
        <Image src='/bag.png' alt='bag' width={30} height={30} />
        <p className='ml-2 text-lg font-semibold md:text-xl'>CareerConnect</p>
      </div>
      <ul className='hidden md:flex flex-row justify-center flex-1'>
        <li className='mx-4 cursor-pointer hover:text-gray-600'>Features</li>
        <li className='mx-4 cursor-pointer hover:text-gray-600'>
          How it Works
        </li>
        <li className='mx-4 cursor-pointer hover:text-gray-600'>
          Testimonials
        </li>
      </ul>
      <div className='flex flex-row'>
        <button className='px-4 py-2 text-white bg-black rounded-xl hover:bg-gray-600'>
          Get Started
        </button>
      </div>
      <div className='flex md:hidden'>
        <button className='text-black'>
          {/* Add a menu icon here, e.g., a hamburger menu */}☰
        </button>
      </div>
    </div>
  );
}

export default NavBar;
