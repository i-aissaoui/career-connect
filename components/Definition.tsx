import Image from "next/image";

const Definition = () => {
  return (
    <div className='bg-gradient-to-r from-[#F8FAFC] to-[#F1F5F9] w-full md:w-11/12 h-auto md:h-11/12 rounded-xs '>
      <div className='flex flex-col md:flex-row mx-4 md:mx-20 my-12 md:my-24 justify-between items-center'>
        <div className='text-center md:text-left'>
          {/* -------------------------------------------- first part ----------------------------------------------------------*/}
          <div className='flex items-center border rounded-3xl p-1 border-[#E4E4E7] w-fit mx-auto md:mx-0'>
            <Image
              src='/microchip.png'
              width={25}
              height={20}
              alt='ai'
              className='mx-2'
            />
            <div className='mx-2 text-sm sm:text-base md:text-lg'>
              {" "}
              AI-Powered Career Matching
            </div>
          </div>

          <h1 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-4 font-extrabold'>
            Discover Your Perfect Career Path
          </h1>
          <p className='mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-neutral-600'>
            Match your unique skills and expertise with ideal career
            opportunities using our advanced AI technology
          </p>
          <div className='flex space-x-4 mt-6'>
            <button className='flex items-center bg-black text-white px-6 py-2 rounded-xl hover:opacity-90'>
              <p className='mx-1 text-sm sm:text-base'>Find Your Match</p>
              <Image
                src='/right-arrow.png'
                width={10}
                height={10}
                alt='right arrow'
                className='mx-1'
              ></Image>
            </button>
            <button className='bg-white text-black border rounded-xl border-black px-6 py-2 text-sm sm:text-base'>
              Learn How It Works
            </button>
          </div>
        </div>
        {/* content */}
        <Image
          src='/illustration.png'
          alt='illustration'
          width={300}
          height={400}
          className='w-full max-w-xs sm:max-w-sm md:max-w-md h-auto mt-8 md:mt-0'
        />
      </div>
    </div>
  );
};

export default Definition;
