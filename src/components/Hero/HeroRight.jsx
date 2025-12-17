const HeroRight = () => {
  return (
    <>
      <div class="w-full lg:w-80">
        <div class="soft-card p-6 h-full">
          <h3 class="text-lg font-semibold text-slate-900 mb-2">
            Trending collections
          </h3>
          <div class="space-y-3 text-sm">
            <div class="flex items-center justify-between">
              <span class="text-slate-700">Creator Pro rigs</span>
              <span class="text-rose-500 font-semibold">+38%</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-700">RTX 4090 builds</span>
              <span class="text-rose-500 font-semibold">Popular</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-700">Ultra-light laptops</span>
              <span class="text-rose-500 font-semibold">Editor pick</span>
            </div>
          </div>
          <div class="mt-5 p-3 rounded-xl bg-rose-50 text-rose-700">
            Concierge support included on every purchase.
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroRight;
