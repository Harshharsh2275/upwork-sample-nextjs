function Sidebar<FC>() {
  return (
    <nav className="flex flex-col w-2/6 mt-3">
      <a
        href="#"
        className="items-stretch bg-white self-stretch flex w-full flex-col px-3.5 py-3 rounded-xl"
      >
        <div className="items-stretch flex justify-between gap-3.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a843ea2-1b9b-4898-becf-7e16647f1938?apiKey=7493271fdce140459d85a7cfcdffd9f3&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            alt="Home"
          />
          <div className="text-zinc-700 text-sm font-semibold tracking-normal">
            Home
          </div>
        </div>
      </a>
      <a
        href="#"
        className="items-stretch bg-gray-100 self-stretch flex w-full flex-col mt-2 px-3.5 py-3 rounded-xl"
      >
        <div className="items-stretch flex justify-between gap-3.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e61475c-05d7-4c62-b17a-3e7aacd5baa6?apiKey=7493271fdce140459d85a7cfcdffd9f3&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            alt="API Docs"
          />
          <div className="text-zinc-500 text-sm font-medium tracking-normal">
            API Docs
          </div>
        </div>
      </a>
      <a
        href="#"
        className="items-stretch bg-gray-100 self-stretch flex w-full flex-col mt-2 px-3.5 py-3 rounded-xl"
      >
        <div className="items-stretch flex justify-between gap-3.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ad8a06b-84e6-4800-934f-90abfcffc47f?apiKey=7493271fdce140459d85a7cfcdffd9f3&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            alt="Applications"
          />
          <div className="text-zinc-500 text-sm font-medium tracking-normal">
            Applications
          </div>
        </div>
      </a>
      <a
        href="#"
        className="items-stretch bg-gray-100 self-stretch flex w-full flex-col mt-2 px-3.5 py-3 rounded-xl"
      >
        <div className="items-stretch flex justify-between gap-3.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8788cdb3-6af4-4db9-8ec8-4adcc300e80e?apiKey=7493271fdce140459d85a7cfcdffd9f3&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            alt="Blogs"
          />
          <div className="text-zinc-500 text-sm font-medium tracking-normal">
            Blogs
          </div>
        </div>
      </a>
      <a
        href="#"
        className="items-stretch bg-gray-100 self-stretch flex w-full flex-col mt-2 px-3.5 py-3 rounded-xl"
      >
        <div className="items-stretch flex justify-between gap-3.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/14d68d2a-f6a9-4524-88f9-ac1023bb035c?apiKey=7493271fdce140459d85a7cfcdffd9f3&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            alt="Hackathon"
          />
          <div className="text-zinc-500 text-sm font-medium tracking-normal">
            Hackathon
          </div>
        </div>
      </a>
      <form className="border border-[color:var(--primary-purple,#7662EA)] bg-white self-center flex w-[210px] max-w-full pt-0 flex-col mt-80 pb-5 px-5 rounded-3xl border-solid isolate max-md:mt-10 relative">
        <div className="items-stretch bg-indigo-500 absolute -top-6 self-center z-[1] flex aspect-square flex-col p-2.5 rounded-xl">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b632c8ef-4219-4528-9cb9-70d669c7fb7a?apiKey=7493271fdce140459d85a7cfcdffd9f3&"
            className="aspect-square object-contain object-center w-[30px] overflow-hidden"
            alt="Upgrade to Sunstone Pro member"
          />
        </div>
        <div className="text-neutral-800 text-center text-sm font-semibold tracking-normal self-stretch mt-10">
          Upgrade to Sunstone Pro member
        </div>
        <div className="text-zinc-500 text-center text-xs tracking-normal self-stretch mt-3.5">
          Get full access to all course for 1 month.
        </div>
        <button className="text-white text-sm font-medium tracking-normal whitespace-nowrap justify-center items-center bg-indigo-500 self-stretch mt-6 px-5 py-2.5 rounded-lg">
          Upgrade to Pro
        </button>
      </form>
    </nav>
  );
}

export default Sidebar;