const ContactSection = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Contact</h1>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-modernWhite">Name</label>
                    <input id="name" type="text" className="w-full p-2 bg-salvagedMetal text-modernWhite rounded" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-modernWhite">Email</label>
                    <input id="email" type="email" className="w-full p-2 bg-salvagedMetal text-modernWhite rounded" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-modernWhite">Message</label>
                    <textarea id="message" className="w-full p-2 bg-salvagedMetal text-modernWhite rounded" rows={5}></textarea>
                </div>
                <button type="submit" className="bg-rusty py-2 px-4 rounded text-modernWhite">Send</button>
            </form>
            <p>We&apos;d love to hear from you! Let&apos;s get in touch.</p>
        </div>
    );
};

export default ContactSection;
