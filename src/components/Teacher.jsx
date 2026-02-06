import logo from "../assets/logo.png";

const TeacherSection = () => {
  return (
    <section className="px-4 py-20 text-center">
      {/* Title */}
      <h2 className="text-4xl font-medium text-center mb-12">
        Meet Ivan, your instructor
      </h2>

      {/* Grid */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left big card (2 rows) */}

        <div className="bg-indigo-300 rounded-2xl p-8 flex flex-col justify-center h-full ">
          <img
            src={logo}
            alt="MyLogo"
            className="h-30 w-auto object-contain mb-15"
          />
          <h3 className="text-2xl font-medium ">
            Helping students succeed worldwide
          </h3>

          <p className=" leading-relaxed ">
            Over the past 6+ years, I’ve helped{" "}
            <span className="font-medium mr-1">300+ students</span>
            improve their English and Japanese for exams, careers, and real-life
            communication.
            <br />
          </p>
        </div>

        {/* Achievement: JLPT */}
        <div className="flex h-full flex-col gap-6">
          <div className="flex-1 bg-zinc-100 rounded-2xl flex items-center justify-center text-center">
            <span className="text-3xl font-semibold tracking-wide">
              JLPT N1
            </span>
          </div>

          <div className="flex-1 bg-zinc-100 rounded-2xl flex items-center justify-center text-center">
            <span className="text-3xl font-semibold tracking-wide">
              English C2
            </span>
          </div>

          <div className="flex-1 bg-zinc-100 rounded-2xl flex items-center justify-center text-center">
            <span className="text-2xl font-semibold tracking-wide">
              Native Bulgarian
            </span>
          </div>
        </div>

        {/* Image card */}
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl overflow-hidden flex-1">
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
              alt="Teaching"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-2xl overflow-hidden flex-1">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              alt="Online lesson"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherSection;
