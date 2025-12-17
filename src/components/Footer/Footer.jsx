const Footer = () => {
  return (
    <>
      <footer class="bg-white border-t border-slate-200 mt-12">
        <div class="max-w-6xl mx-auto px-4 py-12">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 class="font-semibold mb-3 text-slate-900">About TechHub</h4>
              <p class="text-slate-600 text-sm leading-relaxed">
                Your trusted source for premium tech products and cutting-edge
                electronics.
              </p>
            </div>
            <div>
              <h4 class="font-semibold mb-3 text-slate-900">Quick Links</h4>
              <ul class="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" class="hover:text-slate-900">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-slate-900">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-slate-900">
                    Deals
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-slate-900">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-3 text-slate-900">
                Customer Service
              </h4>
              <ul class="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" class="hover:text-slate-900">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-slate-900">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-slate-900">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-slate-900">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-3 text-slate-900">Follow Us</h4>
              <div class="flex gap-4 text-slate-600">
                <a href="#" class="hover:text-slate-900">
                  Twitter
                </a>
                <a href="#" class="hover:text-slate-900">
                  Facebook
                </a>
                <a href="#" class="hover:text-slate-900">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div class="border-t border-slate-200 pt-8 text-center text-slate-600 text-sm">
            <p>&copy; 2025 Learn with sumit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
