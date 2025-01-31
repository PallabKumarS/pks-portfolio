export default function Home() {
  return (
    <div className="">
      <main
        className="min-h-screen bg-cover bg-center bg-no-repeat bg-[image:var(--bg-desktop)] sm:bg-[image:var(--bg-mobile)]"
        style={
          {
            "--bg-desktop": `url(/background.svg)`,
            "--bg-mobile": `url(/background.svg)`,
          } as React.CSSProperties
        }
      ></main>
      <footer className=""></footer>
    </div>
  );
}
