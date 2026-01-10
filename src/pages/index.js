import ArrowRight from "@/components/icons/ArrowRight";

export default function Home() {
  return (
    <div>
      <main>
        <p className="label">Label</p>
        <h1 className="font-bold text-text1 text-[15px]">
          Mandatory title about the{" "}
          <span className="font-gt-alpina font-light">call-to-action here</span>
        </h1>
        <p className="text-text2">Optional body copy goes here.</p>
        <button className="text-orangeRed text-[19px]">
          Optional button <ArrowRight className="inline" />
        </button>
      </main>
    </div>
  );
}
