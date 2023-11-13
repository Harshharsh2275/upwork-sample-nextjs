function WelcomeMessage<FC>() {
  return (
    <section className="flex flex-col max-md:max-w-full max-md:mt-2.5">
      <h1 className="text-neutral-800 text-2xl font-semibold tracking-wide w-[374px] max-w-full ml-6 max-md:ml-2.5">
        Welcome back, Alex
      </h1>
      <article className="bg-white self-stretch flex flex-col items-stretch mt-12 pl-7 pr-8 pt-9 pb-16 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="pr-px max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[71%] max-md:w-full max-md:ml-0">
              <h2 className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-7">
                <span className="text-indigo-500 text-base tracking-normal whitespace-nowrap max-md:max-w-full">
                  Get Started
                </span>
              </h2>
              <h3 className="text-neutral-800 text-2xl font-medium tracking-wide whitespace-nowrap mt-6 max-md:max-w-full">
                What’s Sunstone?
              </h3>
              <p className="text-zinc-500 text-sm leading-6 tracking-normal mt-3.5 max-md:max-w-full">
                Our Services We offer a diverse range of services to meet the unique needs of our clients. We provide comprehensive solutions that drive success. Explore our services to find out how we can help you achieve your goals.
              </p>
              <h3 className="text-neutral-800 text-2xl font-medium tracking-wide whitespace-nowrap mt-8 max-md:max-w-full">
                How can I build production-ready apps on Sunstone?
              </h3>
              <p className="text-zinc-500 text-sm leading-6 tracking-normal mt-5 max-md:max-w-full">
                Our Services We offer a diverse range of services to meet the unique needs of our clients. We provide comprehensive solutions that drive success. Explore our services to find out how we can help you achieve your goals.
              </p>
              <h3 className="text-neutral-800 text-2xl font-medium tracking-wide whitespace-nowrap mt-8 max-md:max-w-full">
                Why should I use Sunstone?
              </h3>
            </div>
            <div className="flex flex-col items-stretch w-[29%] ml-5 max-md:w-full max-md:ml-0">
              <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/abc38349-bc31-4b6c-bd8d-cc5eee9d0f2f?apiKey=7493271fdce140459d85a7cfcdffd9f3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/abc38349-bc31-4b6c-bd8d-cc5eee9d0f2f?apiKey=7493271fdce140459d85a7cfcdffd9f3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/abc38349-bc31-4b6c-bd8d-cc5eee9d0f2f?apiKey=7493271fdce140459d85a7cfcdffd9f3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/abc38349-bc31-4b6c-bd8d-cc5eee9d0f2f?apiKey=7493271fdce140459d85a7cfcdffd9f3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/abc38349-bc31-4b6c-bd8d-cc5eee9d0f2f?apiKey=7493271fdce140459d85a7cfcdffd9f3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/abc38349-bc31-4b6c-bd8d-cc5eee9d0f2f?apiKey=7493271fdce140459d85a7cfcdffd9f3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/abc38349-bc31-4b6c-bd8d-cc5eee9d0f2f?apiKey=7493271fdce140459d85a7cfcdffd9f3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/abc38349-bc31-4b6c-bd8d-cc5eee9d0f2f?apiKey=7493271fdce140459d85a7cfcdffd9f3&"className="aspect-[1.12] object-contain object-center w-full overflow-hidden mt-14 max-md:mt-10" />
            </div>
          </div>
        </div>
        <p className="text-zinc-500 text-sm leading-6 tracking-normal mt-5 max-md:max-w-full">
          Our Services We offer a diverse range of services to meet the unique needs of our clients. We provide comprehensive solutions that drive success. Explore our services to find out how we can help you achieve your goals.
        </p>
      </article>
    </section>
  );
}

export default WelcomeMessage;