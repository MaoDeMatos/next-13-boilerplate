export default function Home() {
  return (
    <main className="flex flex-col items-center gap-12 p-4 sm:gap-24 sm:p-8">
      <div>
        <h1 className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-center text-4xl font-extrabold !leading-tight text-transparent sm:text-6xl">
          Next.js 13 boilerplate
        </h1>

        <div className="mt-4 text-center">
          <p>{'Welcome to this simple boilerplate!'}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-start justify-center gap-8 sm:justify-between">
        <p>{"You'll see your page content here"}</p>
      </div>
    </main>
  )
}
