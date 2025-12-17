import Sorting from "./Sorting";

const ProductGrid = () => {
  return (
    <>
      <div class="md:col-span-3">
        {/* <!-- Sorting Options --> */}
        <Sorting />

        {/* <!-- Products Grid --> */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Product Card 1 --> */}
          <div class="soft-card overflow-hidden hover:-translate-y-1 transition-all">
            <div class="aspect-square bg-gradient-to-br from-slate-100 via-white to-rose-50 flex items-center justify-center">
              <img
                src="./assets/mac-pro-tower.webp"
                alt="Apple Mac Pro Tower"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-5 space-y-3">
              <div class="flex items-center justify-between">
                <h3 class="font-semibold text-lg text-slate-900 line-clamp-2">
                  Apple Mac Pro Tower
                </h3>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <span class="text-amber-500">⭐ 4.8</span>
                <span class="text-slate-500">(35 reviews)</span>
              </div>
              {/* <!-- create date --> */}
              <p class="text-slate-500 text-sm">
                Upload on: <span class="font-semibold">15 Nov 2025</span>
              </p>

              <p class="text-slate-600 text-sm line-clamp-2">
                The ultimate workstation with M2 Ultra chip, designed for heavy
                video editing and 3D rendering.
              </p>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-slate-900">$6,999</span>
                <span class="text-sm text-emerald-600 font-medium">
                  In Stock (5)
                </span>
              </div>
              <button class="w-full button-primary py-2.5 rounded-lg font-semibold">
                Add to Cart
              </button>
            </div>
          </div>

          {/* <!-- Product Card 2 --> */}
          <div class="soft-card overflow-hidden hover:-translate-y-1 transition-all">
            <div class="aspect-square bg-gradient-to-br from-slate-100 via-white to-rose-50 flex items-center justify-center">
              <img
                src="./assets/high-performance-banner.avif"
                alt="Gaming Laptop"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-5 space-y-3">
              <div class="flex items-center justify-between">
                <h3 class="font-semibold text-lg text-slate-900 line-clamp-2">
                  High-Performance Gaming Laptop
                </h3>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <span class="text-amber-500">⭐ 4.6</span>
                <span class="text-slate-500">(128 reviews)</span>
              </div>
              {/* <!-- create date --> */}
              <p class="text-slate-500 text-sm">
                Upload on: <span class="font-semibold">20 Nov 2025</span>
              </p>

              <p class="text-slate-600 text-sm line-clamp-2">
                RTX 4090, Intel i9, 32GB RAM, perfect for gaming and content
                creation.
              </p>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-slate-900">$3,299</span>
                <span class="text-sm text-emerald-600 font-medium">
                  In Stock (12)
                </span>
              </div>
              <button class="w-full button-primary py-2.5 rounded-lg font-semibold">
                Add to Cart
              </button>
            </div>
          </div>

          {/* <!-- Product Card 3 --> */}
          <div class="soft-card overflow-hidden hover:-translate-y-1 transition-all">
            <div class="aspect-square bg-gradient-to-br from-slate-100 via-white to-rose-50 flex items-center justify-center">
              <img
                src="./assets/pro-workstation.jpg"
                alt="Workstation"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-5 space-y-3">
              <div class="flex items-center justify-between">
                <h3 class="font-semibold text-lg text-slate-900 line-clamp-2">
                  Professional Workstation
                </h3>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <span class="text-amber-500">⭐ 4.9</span>
                <span class="text-slate-500">(67 reviews)</span>
              </div>
              {/* <!-- create date --> */}
              <p class="text-slate-500 text-sm">
                Upload on: <span class="font-semibold">18 Nov 2025</span>
              </p>

              <p class="text-slate-600 text-sm line-clamp-2">
                Dual Xeon processors, 64GB ECC RAM, for professional 3D
                rendering.
              </p>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-slate-900">$8,499</span>
                <span class="text-sm text-emerald-600 font-medium">
                  In Stock (3)
                </span>
              </div>
              <button class="w-full button-primary py-2.5 rounded-lg font-semibold">
                Add to Cart
              </button>
            </div>
          </div>

          {/* <!-- Product Card 4 --> */}
          <div class="soft-card overflow-hidden hover:-translate-y-1 transition-all">
            <div class="aspect-square bg-gradient-to-br from-slate-100 via-white to-rose-50 flex items-center justify-center">
              <img
                src="./assets/ultra-thine.jpeg"
                alt="Ultrabook"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-5 space-y-3">
              <div class="flex items-center justify-between">
                <h3 class="font-semibold text-lg text-slate-900 line-clamp-2">
                  Ultra-thin Ultrabook
                </h3>
                <span class="px-2 py-1 text-xs rounded-full bg-orange-50 text-orange-600 font-semibold">
                  Portable
                </span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <span class="text-amber-500">⭐ 4.5</span>
                <span class="text-slate-500">(89 reviews)</span>
              </div>
              {/* <!-- create date --> */}
              <p class="text-slate-500 text-sm">
                Upload on: <span class="font-semibold">22 Nov 2025</span>
              </p>

              <p class="text-slate-600 text-sm line-clamp-2">
                Lightweight at 2.5 lbs, 16GB RAM, perfect for professionals on
                the go.
              </p>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-slate-900">$1,799</span>
                <span class="text-sm text-emerald-600 font-medium">
                  In Stock (18)
                </span>
              </div>
              <button class="w-full button-primary py-2.5 rounded-lg font-semibold">
                Add to Cart
              </button>
            </div>
          </div>

          {/* <!-- Product Card 5 --> */}
          <div class="soft-card overflow-hidden hover:-translate-y-1 transition-all">
            <div class="aspect-square bg-gradient-to-br from-slate-100 via-white to-rose-50 flex items-center justify-center">
              <img
                src="./assets/pro-workstation.jpg"
                alt="Desktop"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-5 space-y-3">
              <div class="flex items-center justify-between">
                <h3 class="font-semibold text-lg text-slate-900 line-clamp-2">
                  Compact Desktop PC
                </h3>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <span class="text-amber-500">⭐ 4.3</span>
                <span class="text-slate-500">(45 reviews)</span>
              </div>
              {/* <!-- create date --> */}
              <p class="text-slate-500 text-sm">
                Upload on: <span class="font-semibold">10 Nov 2025</span>
              </p>

              <p class="text-slate-600 text-sm line-clamp-2">
                Small form factor, RTX 3080, 16GB RAM, great for home office
                setup.
              </p>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-slate-900">$2,199</span>
                <span class="text-sm text-emerald-600 font-medium">
                  In Stock (8)
                </span>
              </div>
              <button class="w-full button-primary py-2.5 rounded-lg font-semibold">
                Add to Cart
              </button>
            </div>
          </div>

          {/* <!-- Product Card 6 - Loading Skeleton --> */}
          <div class="soft-card overflow-hidden">
            <div class="aspect-square bg-slate-100 animate-pulse"></div>
            <div class="p-4 space-y-3">
              <div class="h-4 bg-slate-200 rounded animate-pulse"></div>
              <div class="h-4 bg-slate-200 rounded animate-pulse w-3/4"></div>
              <div class="h-4 bg-slate-200 rounded animate-pulse w-2/3"></div>
              <div class="h-4 bg-slate-200 rounded animate-pulse w-1/2"></div>
              <button
                class="w-full bg-slate-200 text-white py-2 rounded-lg font-medium mt-2 animate-pulse"
                disabled
              ></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
