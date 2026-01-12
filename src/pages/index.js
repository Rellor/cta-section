import ImageButton from "@/components/atoms/imageButton";
import BaseButton from "@/components/atoms/baseButton";
import data from "@/data/cta-section.json";

export default function Home() {
  return (
    <div>
      <main className="w-full max-w-400 grid grid-cols-6 sm:grid-cols-12 gap-x-3 sm:gap-x-6 sm:gap-y-20 gap-y-4 p-5 sm:p-8 lg:p-16 mx-auto">
        <div className="flex flex-col gap-4 sm:gap-6 items-center col-span-6 sm:col-start-2 sm:col-span-10 col-start-1 lg:col-start-3 lg:col-span-8 row-start-1 row-span-1 max-sm:mb-4">
          <div className="text-center flex flex-col gap-2">
            {data.label && <p className="label">{data.label}</p>}
            {/* In design it shows an h2, but here we can also use an h1 for SEO purposes */}
            <h2
              dangerouslySetInnerHTML={{ __html: data.sectionTitle }}
              className="font-commons max-w-[20rem] sm:max-w-120"
            ></h2>
          </div>
          {data.sectionText && (
            <p className="text-text2/80">{data.sectionText}</p>
          )}
          {data.button && <BaseButton {...data.button} />}
        </div>

        <ImageButton
          title={data.imageCTA.title}
          text={data.imageCTA.text}
          className="col-span-6 row-start-2 row-span-1"
        />
        <ImageButton
          title={data.imageCTA.title}
          text={data.imageCTA.text}
          className="col-span-6 row-start-3 sm:row-start-2 row-span-1"
        />
      </main>
    </div>
  );
}
