"use client"

export default function Login() {

  return (
    <>
      <div className="box border-black">
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex flex-wrap justify-center space-x-4">
            <div
              className="h-[400px] w-[300px] border-black p-4">
              <h2 className="text-2xl font-semibold text-center text-black mb-6">Log in</h2>
              <form action="#" method="POST">
                <div className="mb-4">
                  <label htmlFor="number" className="block text-black font-semibold mb-2">Mobile number</label>
                  <input
                  type="number"
                  id="number"
                  name="number"
                  className="w-full px-4 py-2 border border-black rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-black font-semibold mb-2">Password</label>
                  <input
                  type="number"
                  id="number"
                  name="number"
                  className="w-full px-4 py-2 border border-black rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                </div>
                <button className="bg-transparent text-center ml-24 hover:bg-blue-500 text-black font-semibold hover:text-black py-2 px-4 border border-black hover:border-transparent rounded self-center mt-4">
                Log in 
              </button>
              </form>
            </div>
            
            </div>
          </div>
        </div>
    </>
  );
}
