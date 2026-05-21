import { useState } from "react";

export default function AkhilDamaiPortfolio() {
  const [showScript, setShowScript] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-95"></div>

        <div className="relative z-10 max-w-4xl">
          <p className="uppercase tracking-[0.4em] text-sm text-zinc-400 mb-4">
            Screenplay Writer • Filmmaker • Script Formatter
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            AKHIL <span className="text-zinc-500">DAMAI</span>
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Passionate about screenplay formatting, cinematic storytelling,
            dialogue writing, and short film execution. Dedicated to creating
            impactful visual narratives through scripts and filmmaking.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="tel:8340806273"
              className="px-6 py-3 rounded-2xl border border-zinc-700 hover:bg-white hover:text-black transition-all duration-300"
            >
              📞 Contact
            </a>

            <a
              href="mailto:Chandrudamai4@gmail.com"
              className="px-6 py-3 rounded-2xl bg-white text-black hover:bg-zinc-300 transition-all duration-300"
            >
              ✉️ Email
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-16 py-20 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About</h2>

            <p className="text-zinc-300 text-lg leading-relaxed">
              Akhil Damai is focused on screenplay formatting, scene
              structuring, dialogue writing, and cinematic storytelling. He has
              worked on short film projects and screenplay execution while
              exploring creative film production and script development.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6">Core Skills</h3>

            <div className="grid grid-cols-2 gap-4 text-zinc-300">
              <div className="bg-black rounded-xl p-4 border border-zinc-800">
                Screenplay Formatting
              </div>

              <div className="bg-black rounded-xl p-4 border border-zinc-800">
                Dialogue Writing
              </div>

              <div className="bg-black rounded-xl p-4 border border-zinc-800">
                Scene Structuring
              </div>

              <div className="bg-black rounded-xl p-4 border border-zinc-800">
                Character Cue Formatting
              </div>

              <div className="bg-black rounded-xl p-4 border border-zinc-800">
                Cinematic Storytelling
              </div>

              <div className="bg-black rounded-xl p-4 border border-zinc-800">
                Shot Breakdown
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project */}
      <section className="px-6 md:px-16 py-20 border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-14 text-center">
            Featured Project
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center bg-black border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/hkWuQbEb3QE"
                title="Night Out Short Film"
                allowFullScreen
              ></iframe>
            </div>

            <div className="p-8 md:p-10">
              <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-3">
                Short Film
              </p>

              <h3 className="text-4xl font-bold mb-4">Night Out</h3>

              <p className="text-zinc-300 leading-relaxed mb-6 text-lg">
                A short film project showcasing cinematic storytelling,
                screenplay execution, and visual direction.
              </p>

              <div className="space-y-2 text-zinc-400 mb-8">
                <p>
                  <span className="text-white font-medium">Role:</span> Writer
                  / Director / Actor
                </p>
              </div>

              <a
                href="https://youtu.be/hkWuQbEb3QE?si=ahXRp0pa7uAKg9Na"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:bg-zinc-300 transition-all duration-300"
              >
                Watch Film
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="px-6 md:px-16 py-20 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Software & Tools
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-2">MS Word</h3>

              <p className="text-zinc-400">Script typing & formatting</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-2">Celtx</h3>

              <p className="text-zinc-400">Screenplay creation tool</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-2">Formatting</h3>

              <p className="text-zinc-400">
                Basic screenplay formatting knowledge
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Script Sample */}
      <section className="px-6 md:px-16 py-20 border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">
            Script Formatting Sample
          </h2>

          {/* Preview Card */}
          <div className="flex justify-center">
            <div
              onClick={() => setShowScript(true)}
              className="group relative max-w-xs cursor-pointer overflow-hidden rounded-3xl border border-zinc-700 bg-black shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.12)]"
            >
              <img
                src="/images/script-sample.jpg"
                alt="Script Sample"
                className="w-full h-[500px] object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2">
                  View Full Script
                </h3>

                <p className="text-zinc-400 text-sm">
                  Click to expand
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-zinc-500 text-sm">
            © copyrighted akhildamai
          </p>
        </div>

        {/* Fullscreen Modal */}
        {showScript && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4">
            
            {/* Close Button */}
            <button
              onClick={() => setShowScript(false)}
              className="absolute top-8 right-8 text-white text-6xl hover:scale-110 transition-all duration-300 z-50"
            >
              ×
            </button>

            {/* Full Image */}
            <div className="relative max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-zinc-700 shadow-[0_0_80px_rgba(255,255,255,0.12)]">
              <img
                src="/images/script-sample.jpg"
                alt="Full Script"
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        )}
      </section>

      {/* Declaration */}
      <section className="px-6 md:px-16 py-16 border-t border-zinc-800 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-zinc-400 italic leading-relaxed">
            “I hereby declare that the above information is true and correct to
            the best of my knowledge.”
          </p>
        </div>
      </section>
    </div>
  );
}