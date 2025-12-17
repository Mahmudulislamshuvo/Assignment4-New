const HeroLeft = () => {
  return (
    <>
      <div class="flex-1 space-y-4">
        <span class="pill">
          <span class="h-2 w-2 rounded-full bg-rose-500"></span>
          Curated tech for 2025
        </span>
        <h1 class="text-3xl sm:text-4xl font-semibold leading-tight text-slate-900">
          Build a setup that feels handcrafted for you.
        </h1>
        <p class="text-lg text-slate-600 max-w-2xl">
          Premium desktops, laptops, and workstations tuned for creators,
          engineers, and gamers. Thoughtful thermals, quiet builds, and
          concierge support.
        </p>
        <div class="flex flex-wrap gap-3">
          <button class="button-primary px-4 py-3">Shop flagship rigs</button>
          <button class="button-ghost px-4 py-3">
            Talk to a build specialist
          </button>
        </div>
        <div class="flex items-center gap-6 text-sm text-slate-600">
          <div class="flex items-center gap-2">
            <span class="h-6 w-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-semibold">
              4.9
            </span>
            <span>Average customer rating</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="h-6 w-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-semibold">
              24h
            </span>
            <span>Rapid build & dispatch</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroLeft;
