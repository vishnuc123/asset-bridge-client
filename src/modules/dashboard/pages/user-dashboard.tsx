import { motion } from "framer-motion"

const UserDashboard = () => {

  return (
    <section className="w-full min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <div className="relative w-full h-[55vh] md:h-[65vh] lg:h-[75vh] overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src="/bk1.jpg"
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENT */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">

          <div>
            <h1 className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
            ">
              Where to stay
            </h1>

            <p className="
              mt-4
              text-sm
              sm:text-base
              md:text-lg
              text-gray-200
              max-w-2xl
            ">
              Discover luxury hotels, unique stays, and unforgettable experiences.
            </p>
          </div>

        </div>
      </div>

      {/* PAGE CONTENT */}
      <div className="px-4 sm:px-6 lg:px-10 py-10">

        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">
            Popular Destinations
          </h2>

          <p className="text-gray-300 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sequi ea sapiente quod pariatur, distinctio voluptatum commodi nihil possimus earum corporis nobis ipsam ratione quam eveniet.
          </p>
        </div>

      </div>

    </section>
  )
}

export default UserDashboard