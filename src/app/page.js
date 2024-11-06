import Head from 'next/head';
import Counter from './components/counter';


export default function Page() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <Navber/> */}
        <main className="flex flex-col mr-auto mt-[6rem] gap-2">
         
          <div className='h-[100px] w-[500px] border-black bg-red-400 rounded-md'>
          <h2>Anonymous</h2>
          <p>Hi this is me </p>
         <button className="bg-transparent hover:bg-lime-500 text-lime-700 font-semibold hover:text-black py-1 mx-2 px-4 border border-lime-500 hover:border-transparent rounded self-center mt-4">
         <Counter/>
              </button>
         
          </div>
          <div className='h-[100px] w-[500px] border-black bg-red-400  rounded-md'>
          <h2>Anonymous</h2>
          <p>Hi this is me </p>
         <button className="bg-transparent hover:bg-lime-500 text-lime-700 font-semibold hover:text-black py-1 mx-2 px-4 border border-lime-500 hover:border-transparent rounded self-center mt-4">
         <Counter/>
              </button>
         
          </div>
          
        </main>
      </div>
    </>
  );
}