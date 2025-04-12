import Image from "next/image";

function NavBar() {
  return (
    <div className='flex items-center justify-between w-full h-16 px-4'>
      <div className='flex items-center '>
        <Image src='/bag.png' alt='bag' width={30} height={30} />

        <p className='ml-2 text-xl font-semibold'>CareerMatch</p>
      </div>
      <ul className='flex flex-row justify-center flex-1'>
        <li className='mx-4'>Features</li>
        <li className='mx-4'>How it Works</li>
        <li className='mx-4'>Testimonials</li>
      </ul>
      <div className='flex flex-row'>
        <button className='px-4 py-2 text-white bg-black rounded-xl hover:bg-gray-600'>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default NavBar;
