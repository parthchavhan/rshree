export default function About() {
  return (
    <section className="bg-[#f9f6f2] py-16 px-6 md:px-20 text-[#2e2e2e]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#bfa15b] tracking-wide">About Us</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          At <span className="font-semibold text-[#bfa15b]">Rshree Jewels</span>, we craft more than jewelry — we create timeless emotions. With a deep heritage rooted in trust, artistry, and passion, each piece reflects elegance and soul.
        </p>
        <p className="mt-6 text-lg text-gray-700">
          Whether you're looking for a classic statement or a modern masterpiece, our collections bring sparkle to every moment. We are committed to quality, precision, and celebrating life's precious milestones.
        </p>
        <div className="mt-10">
          <button className="bg-[#bfa15b] hover:bg-[#a78b45] text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-lg">
            Explore Collections
          </button>
        </div>
      </div>
    </section>
  );
}
