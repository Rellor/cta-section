import ArrowRight from "@/components/icons/ArrowRight";

export default function Home() {
  return (
    <div>
      <main className="w-full max-w-400 grid grid-cols-6 sm:grid-cols-12 gap-x-3 sm:gap-x-6 gap-y-20 p-5 sm:p-8 lg:p-16 mx-auto">
        <div className="flex flex-col gap-6 items-center col-span-8 row-start-1 row-span-1 col-start-3">
          <div className="text-center">
            <p className="label">Label</p>
            {/* In design it shows an h2, but here we can also use an h1 for SEO purposes */}
            <h2>
              Mandatory title about the{" "}
              <span className="font-gt-alpina font-light mr-2">
                <br className="max-sm:hidden" />
                call-to-action
              </span>
              here
            </h2>
          </div>
          <p className="text-text2">Optional body copy goes here.</p>
          <button className="text-orangeRed text-normal w-fit">
            Optional button <ArrowRight className="inline" />
          </button>
        </div>
        <div className="bg-black col-span-6 aspect-4/3 row-start-2 row-span-1 rounded-sm relative">
          <div className="absolute left-0 bottom-0">
            <h4 className="text-white">title</h4>
            <p className="text-softWhite/50">
              Supporting text about the call-to-action goes here.
            </p>
          </div>
        </div>
        <div className="bg-black col-span-6 aspect-4/3 row-start-2 row-span-1 rounded-sm relative">
          <div className="absolute left-0 bottom-0">
            <h4 className="text-white">title</h4>
            <p className="text-softWhite/50">
              Supporting text about the call-to-action goes here.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
