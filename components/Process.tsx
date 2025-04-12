import Image from "next/image";

const Process = () => {
  return (
    <div className=' w-full md:w-11/12 h-auto md:h-9/12 '>
      <div className='flex flex-col items-center justify-center my-12 md:my-24'>
        <div className='flex items-center border rounded-3xl p-1 bg-black text-white w-fit mx-auto md:mx-0'>
          <div className='mx-2 text-sm sm:text-base md:text-lg'>Process</div>
        </div>

        <h2 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-4 font-extrabold'>
          How CareerMatch Works
        </h2>
        <p className='mt-4 mx-4 sm:mx-12 md:mx-28 text-center text-xs sm:text-sm md:text-base lg:text-lg text-neutral-600'>
          Finding your ideal career is simple with our three-step process.
        </p>
      </div>
      {/* Process*/}
      <div className='flex flex-col md:flex-row mx-4 md:mx-20 my-12 md:my-24 justify-between'>
        <div className='rounded-xl mb-3 md:w-1/4 border-t-4 p-6 bg-white text-left shadow-sm'>
          <Image
            src='/skills.png'
            width={50}
            height={50}
            alt='personalized'
            className='mb-4'
          />
          <h3 className='text-lg font-semibold text-black mb-2'>
            1. Input Your Skills
          </h3>
          <p className='text-base text-gray-500 leading-relaxed'>
            Select your technical and soft skills from our comprehensive
            database or add custom skills that make you unique.
          </p>
        </div>
        <div className='rounded-xl mb-3 md:w-1/4 border-t-4 p-6 bg-white text-left shadow-sm'>
          <Image
            src='/ai.png'
            width={50}
            height={50}
            alt='personalized'
            className='mb-4'
          />
          <h3 className='text-lg font-semibold text-black mb-2'>
            2. AI Analysis
          </h3>
          <p className='text-base text-gray-500 leading-relaxed'>
            Our advanced AI analyzes your skills and compares them with
            thousands of career paths to find your best matches.
          </p>
        </div>
        <div className='rounded-xl mb-3 md:w-1/4 border-t-4 p-6 bg-white text-left shadow-sm'>
          <Image
            src='/tick.png'
            width={50}
            height={50}
            alt='personalized'
            className='mb-4'
          />
          <h3 className='text-lg font-semibold text-black mb-2'>
            3. Explore Results
          </h3>
          <p className='text-base text-gray-500 leading-relaxed'>
            Review your personalized career matches, complete with salary
            information, growth potential, and required skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
