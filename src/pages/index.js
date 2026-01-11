import ImageButton from "@/components/atoms/imageButton";
import BaseButton from "@/components/atoms/baseButton";

export default function Home() {
  return (
    <div>
      <main className="w-full max-w-400 grid grid-cols-6 sm:grid-cols-12 gap-x-3 sm:gap-x-6 sm:gap-y-20 gap-y-4 p-5 sm:p-8 lg:p-16 mx-auto">
        <div className="flex flex-col gap-6 items-center col-span-6 sm:col-start-2 sm:col-span-10 col-start-1 lg:col-start-3 lg:col-span-8 row-start-1 row-span-1 max-sm:mb-4">
          <div className="text-center">
            <p className="label">Label</p>
            {/* In design it shows an h2, but here we can also use an h1 for SEO purposes */}
            <h2 className="font-commons">
              Mandatory title <br className="sm:hidden" />
              about the{" "}
              <span className="font-gt-alpina font-light mr-2  text-mobile-heading-2-highlight sm:text-heading-2-highlight">
                <br className="max-sm:hidden" />
                call-to-action
              </span>
              here
            </h2>
          </div>
          <p className="text-text2">Optional body copy goes here.</p>
          <BaseButton />
        </div>

        <ImageButton className="col-span-6 row-start-2 row-span-1" />
        <ImageButton className="col-span-6 row-start-3 sm:row-start-2 row-span-1" />
      </main>
    </div>
  );
}
