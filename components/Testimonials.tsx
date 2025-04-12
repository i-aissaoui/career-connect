import Image from "next/image";

const Testimonials = () => {
  return (
    <div className='bg-gradient-to-r from-[#F8FAFC] to-[#F1F5F9] w-full md:w-11/12 h-auto md:h-9/12 rounded-xs'>
      <div className='flex flex-col items-center justify-center my-12 md:my-24'>
        <div className='flex items-center border rounded-3xl p-1 bg-black text-white w-fit mx-auto md:mx-0'>
          <div className='mx-2 text-sm sm:text-base md:text-lg'>
            Testimonials
          </div>
        </div>

        <h2 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-4 font-extrabold'>
          Success Stories
        </h2>
        <p className='mt-4 mx-4 sm:mx-12 md:mx-28 text-center text-xs sm:text-sm md:text-base lg:text-lg text-neutral-600'>
          Hear from users who found their dream careers with CareerMatch.
        </p>
      </div>
      {/* Features */}
      <div className='flex flex-col md:flex-row mx-4 md:mx-20 my-12 md:my-24 justify-between'>
        <div className='rounded-xl mb-3 md:w-1/4 shadow-neutral-600 p-6 bg-white text-left shadow-sm'>
          <Image
            src='/quoat.png'
            width={50}
            height={50}
            alt='personalized'
            className='mb-4'
          />

          <p className='text-sm leading-relaxed'>
            CareerMatch helped me discover a career path I never considered
            before. Now I`m thriving as a UX designer!
          </p>
          <div className='flex mt-4 items-center'>
            <div className='rounded-full bg-gray-300 w-11 h-11'></div>
            <div className='ml-4'>
              <p className='font-extrabold'>Sarah Johnson</p>
              <p>UX Designer</p>
            </div>
          </div>
        </div>
        <div className='rounded-xl mb-3 md:w-1/4 shadow-neutral-600 p-6 bg-white text-left shadow-sm'>
          <Image
            src='/quoat.png'
            width={50}
            height={50}
            alt='personalized'
            className='mb-4'
          />

          <p className='text-sm leading-relaxed'>
            CareerMatch helped me discover a career path I never considered
            before. Now I`m thriving as a UX designer!
          </p>
          <div className='flex mt-4 items-center'>
            <div className='rounded-full bg-gray-300 w-11 h-11'></div>
            <div className='ml-4'>
              <p className='font-extrabold'>Sarah Johnson</p>
              <p>UX Designer</p>
            </div>
          </div>
        </div>
        <div className='rounded-xl mb-3 md:w-1/4 shadow-neutral-600 p-6 bg-white text-left shadow-sm'>
          <Image
            src='/quoat.png'
            width={50}
            height={50}
            alt='personalized'
            className='mb-4'
          />

          <p className='text-sm leading-relaxed'>
            CareerMatch helped me discover a career path I never considered
            before. Now I`m thriving as a UX designer!
          </p>
          <div className='flex mt-4 items-center'>
            <div className='rounded-full bg-gray-300 w-11 h-11'></div>
            <div className='ml-4'>
              <p className='font-extrabold'>Sarah Johnson</p>
              <p>UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
