const ContactSection = () => {
    return (
      <section className="w-full  flex flex-col justify-center items-center py01 px-4">
        <div className="w-full max-w-screen-md bg-salvagedMetal p-8 rounded-md shadow-lg">
            <div>
                <h1 className="py-10 font-vintage text-xl text-center">Have questions about our sculptures or custom orders? We'd love to hear from you! Reach out to us for more information about our art pieces, the creation process, or to discuss a bespoke project. Let's turn scrap into something remarkable together.</h1>
            </div>
          <h1 className="text-3xl font-bold text-modernWhite mb-8 text-center">Get in Touch</h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-modernWhite mb-2">Name</label>
              <input
                id="name"
                type="text"
                className="w-full p-3  text-modernWhite rounded-md focus:outline-none focus:ring-2 focus:ring-rusty"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-modernWhite mb-2">Email</label>
              <input
                id="email"
                type="email"
                className="w-full p-3 text-modernWhite rounded-md focus:outline-none focus:ring-2 focus:ring-rusty"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-modernWhite mb-2">Message</label>
              <textarea
                id="message"
                className="w-full p-3  text-modernWhite rounded-md focus:outline-none focus:ring-2 focus:ring-rusty"
                rows={5}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-rusty py-3 px-6 rounded-md text-modernWhite font-bold bg-darkBrown hover:bg-yellow-900 hover:text-white text-white transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  