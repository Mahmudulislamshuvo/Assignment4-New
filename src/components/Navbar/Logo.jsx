const Logo = () => {
  return (
    <>
      <div class="flex items-center gap-4">
        <div class="h-10 w-10 rounded-full bg-gradient-to-br from-rose-400 to-orange-300 flex items-center justify-center text-white font-bold">
          TH
        </div>
        <div class="flex flex-col">
          <a
            href="#"
            class="text-xl font-semibold text-slate-900 tracking-tight"
          >
            TechHub
          </a>
          <span class="text-xs text-slate-500">
            Gear for builders & dreamers
          </span>
        </div>
      </div>
    </>
  );
};

export default Logo;
