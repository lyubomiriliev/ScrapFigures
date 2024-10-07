import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="w-full mx-auto flex flex-col justify-center items-center px-4 py-10">
      <div className="w-full max-w-screen-xl flex flex-col md:flex-row">
        {/* Text Section */}
        <div className="flex flex-1 justify-start items-center px-4 py-6 md:py-10">
          <div className="flex flex-col space-y-6">
            <h1 className="text-2xl md:text-4xl font-vintage font-bold uppercase">About the Craftsman</h1>
            <p className="w-full md:w-2/3 text-base md:text-lg">
            Behind every piece of scrap metal lies a vision. Our artist transforms rusted car parts into exquisite works of art, blending engineering precision with a creative spirit. With an eye for innovation and a dedication to quality, each sculpture is crafted to perfection, ensuring that every piece is not just a creation but a masterpiece. Our mission is to show that even the most unlikely materials can be turned into objects of beauty and inspiration.
            </p>
          </div>
        </div>
        {/* Image Section */}
        <div className="flex flex-1 justify-center px-4 py-6 md:py-10">
          <Image
            src="/avatarImage.jpg"
            alt="Avatar"
            width={400}
            height={400}
            className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
