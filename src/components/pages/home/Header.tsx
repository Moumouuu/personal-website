import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <header className="bg-darkBg inset-0 flex min-h-[80dvh] w-full flex-col items-center justify-center bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] text-white">
      <div className="mx-auto w-container max-w-full px-5 py-[110px] flex flex-col items-center text-center lg:py-[150px]">
        <h1 className="text-3xl font-heading md:text-4xl lg:text-5xl">
          Neobrutalism Saas template
        </h1>
        <p className="my-12 mt-8 text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed">
          Get started with your saas landing page in minutes.
          <br /> Check the for more info.
        </p>
        <Button className="h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl">
          Get started
        </Button>
      </div>
    </header>
  );
}
