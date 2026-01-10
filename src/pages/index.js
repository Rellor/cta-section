import ArrowRight from "@/components/icons/ArrowRight";

export default function Home() {
  return (
    <div>
      <main>
        <p className="label">Label</p>
        {/* In design it shows an h2, but here we can also use an h1 for SEO purposes */}
        <h2>
          Mandatory title about the{" "}
          <span className="font-gt-alpina font-light">call-to-action here</span>
        </h2>
        <p>Optional body copy goes here.</p>
        <button className="text-orangeRed text-normal">
          Optional button <ArrowRight className="inline" />
        </button>
      </main>
    </div>
  );
}
