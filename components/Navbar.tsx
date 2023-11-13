function Navbar<FC>() {
  return (
    <div className="flex w-full max-w-[1321px] justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
      <section className="flex gap-2 py-2 justify-center items-center">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/df5bd80b-6a73-4ddd-8934-fbcc96f3f6cc?apiKey=7493271fdce140459d85a7cfcdffd9f3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/df5bd80b-6a73-4ddd-8934-fbcc96f3f6cc?apiKey=7493271fdce140459d85a7cfcdffd9f3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df5bd80b-6a73-4ddd-8934-fbcc96f3f6cc?apiKey=7493271fdce140459d85a7cfcdffd9f3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/df5bd80b-6a73-4ddd-8934-fbcc96f3f6cc?apiKey=7493271fdce140459d85a7cfcdffd9f3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/df5bd80b-6a73-4ddd-8934-fbcc96f3f6cc?apiKey=7493271fdce140459d85a7cfcdffd9f3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df5bd80b-6a73-4ddd-8934-fbcc96f3f6cc?apiKey=7493271fdce140459d85a7cfcdffd9f3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/df5bd80b-6a73-4ddd-8934-fbcc96f3f6cc?apiKey=7493271fdce140459d85a7cfcdffd9f3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/df5bd80b-6a73-4ddd-8934-fbcc96f3f6cc?apiKey=7493271fdce140459d85a7cfcdffd9f3&"className="aspect-[1.02] object-contain object-center w-[43px] overflow-hidden"
          alt="Image description"
        />
        <h1 className="font-semibold tracking-wide text-lg">Sunstone</h1>
      </section>
      <form className="bg-white flex gap-3 px-3 py-1.5 rounded-xl cursor-pointer">
        <div className="max-md:justify-center flex justify-center items-center border-r px-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e698674-f455-4885-b07b-f59355a987c9?apiKey=7493271fdce140459d85a7cfcdffd9f3&"
            className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto"
            alt="Image description"
          />
          </div>
          {/* <div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f693dfa-4d6d-46c6-b97d-19bd24bad133?apiKey=7493271fdce140459d85a7cfcdffd9f3&"
            className="aspect-[0.05] object-contain object-center w-px stroke-[1px] stroke-zinc-200 overflow-hidden self-center shrink-0 max-w-full my-auto"
            alt="Image description"
          />
          </div> */}
          <div className="flex justify-center items-center">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/54ddf36c-9896-48c6-8bfe-e306eeaa8a40?apiKey=7493271fdce140459d85a7cfcdffd9f3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/54ddf36c-9896-48c6-8bfe-e306eeaa8a40?apiKey=7493271fdce140459d85a7cfcdffd9f3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/54ddf36c-9896-48c6-8bfe-e306eeaa8a40?apiKey=7493271fdce140459d85a7cfcdffd9f3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/54ddf36c-9896-48c6-8bfe-e306eeaa8a40?apiKey=7493271fdce140459d85a7cfcdffd9f3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/54ddf36c-9896-48c6-8bfe-e306eeaa8a40?apiKey=7493271fdce140459d85a7cfcdffd9f3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/54ddf36c-9896-48c6-8bfe-e306eeaa8a40?apiKey=7493271fdce140459d85a7cfcdffd9f3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/54ddf36c-9896-48c6-8bfe-e306eeaa8a40?apiKey=7493271fdce140459d85a7cfcdffd9f3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/54ddf36c-9896-48c6-8bfe-e306eeaa8a40?apiKey=7493271fdce140459d85a7cfcdffd9f3&"className="aspect-square object-contain object-center w-8 justify-center items-center overflow-hidden shrink-0 max-w-full"
            alt="Image description"
          />
        </div>
      </form>
    </div>
  );
}

export default Navbar;