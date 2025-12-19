const HeroRight = () => {
  return (
    <>
      <div className="w-full lg:w-80">
        <div className="soft-card p-6 h-full">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Trending collections
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-700">Creator Pro rigs</span>
              <span className="text-rose-500 font-semibold">+38%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700">RTX 4090 builds</span>
              <span className="text-rose-500 font-semibold">Popular</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700">Ultra-light laptops</span>
              <span className="text-rose-500 font-semibold">Editor pick</span>
            </div>
          </div>
          <div className="mt-5 p-3 rounded-xl bg-rose-50 text-rose-700">
            Concierge support included on every purchase.
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroRight;
