"use client";

export default function Venue() {
  return (
    <section
      id="venue"
      className="min-h-screen py-20 relative z-50 bg-[#212534]"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-400">Venue</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          {/* Left Section - Venue Details */}
          <div className="space-y-12 text-left ml-12">
            <h2 className="text-4xl font-semibold text-cyan-300 leading-loose">
              Main Gate
              <br />
              Hans Raj College, University of Delhi
              <br />
              Delhi-110007
            </h2>
          </div>

          {/* Right Section - Map */}
          <div className="h-[400px] w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8890731166856!2d77.2102467!3d28.6797055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd9a74a2aacf%3A0x59e09f11f71c1a54!2sHansraj+College!5e0!3m2!1sen!2sin!4v1707654321!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
