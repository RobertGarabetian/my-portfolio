const AboutMe = () => {
  return (
    <div className="h-full w-full relative border-white border rounded-lg p-4 font-medium text-2xl flex flex-col justify-center items-center space-y-8">
      <div className="absolute bottom-0 right-0 p-5">
        <h3 className="text-white text-4xl font-medium">General</h3>
      </div>{" "}
      <ul className="text-white text-2xl p-2">
        <li>🎓 Computer Science Student</li>
        <li>💼 Full Stack Software Developer</li>
        <li>
          🌱 Currently expanding knowledge on Networking and Distributed Systems
        </li>
      </ul>
    </div>
  );
};

export default AboutMe;
