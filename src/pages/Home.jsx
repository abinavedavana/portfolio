


// function Home(){

//     return(
//         <div className="">
//             <h2>Hi There..!</h2>
//             <h1>I'M ABINAV E</h1>
//             <h2>Software Developer</h2>
//         </div>
//     )

// }

// export default Home;






function Home() {
  return (
    <div  className="flex flex-col items-center justify-center h-screen text-center bg-gray-900 text-white px-4">

      {/* Profile Image */}
      <img
        src="/Abhinav.jpeg"
        alt="Abinav Profile"
        className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-xl border-4 border-blue-500 mb-6"
      />

      <h2 className="text-lg md:text-xl text-gray-300">Hi There..!</h2>

      <h1 className="text-4xl md:text-6xl font-extrabold mt-2 tracking-wide">
        I'M <span className="text-blue-500">ABINAV E</span>
      </h1>

      <h2 className="text-xl md:text-3xl font-semibold mt-3 text-gray-300">
        Software Developer
      </h2>

    </div>
  );
}

export default Home;

