import Image from "next/image";

export default function ProductShowcase() {
  return (
    <section className="bg-black bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] text-white sm:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Explore Our Cutting-Edge Platform
        </h2>
        <p className="mx-auto mt-5 text-xl text-white/70 sm:max-w-xl">
          Discover the power of our AI-driven analytics platform through an
          intuitive interface designed for seamless navigation.
        </p>
        <Image
          priority
          quality={95}
          src="/assets/images/app-screen.png"
          alt="product screenshot"
          height={650}
          width={650}
          className="mx-auto mt-14 object-contain sm:h-auto sm:w-[800px]"
        />
      </div>
    </section>
  );
}
