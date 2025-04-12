import NavBar from "../../components/NavBar";
import Image from "next/image";
export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <NavBar />
      <div className='bg-linear-to-r from-[#F8FAFC] to-[#F1F5F9] w-10/12 h-9/12'>
        <div className='flex'>
          <div className=''>
            <h1 className='text-5xl font-bold text-center mt-10'>
              Discover Your Perfect Career Path
            </h1>
            <p className='text-center mt-4'>
              Match your unique skills and expertise with ideal career
              opportunities using our advanced AI technology.{" "}
            </p>
          </div>
          <Image
            src='/illustration.png'
            alt='illustration'
            width={300}
            height={400}
            className=''
          />
        </div>
      </div>
    </div>
  );
}
