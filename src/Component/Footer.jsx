import React from 'react';

const Footer = () => {
    return (

            <footer className="bg-black text-white border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <span className="text-4xl font-black text-lime-500">
              Gotur
            </span>

            <p className="mt-4 text-white/50 max-w-sm">
              Designing the future of exploration. Bold journeys for
              those who never stop looking for the next horizon.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-lime-500">
              Company
            </h4>

            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <a className="hover:text-white" href="#">
                  Our Story
                </a>
              </li>

              <li>
                <a className="hover:text-white" href="#">
                  Sustainability
                </a>
              </li>

              <li>
                <a className="hover:text-white" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-lime-500">
              Connect
            </h4>

            <div className="flex gap-4 text-white/70">
              <span className="hover:text-lime-500 cursor-pointer">
                🌍
              </span>

              <span className="hover:text-lime-500 cursor-pointer">
                🔗
              </span>

              <span className="hover:text-lime-500 cursor-pointer">
                ✉️
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex justify-between text-[10px] uppercase tracking-widest text-white/30">
          <p>© 2024 GOTUR // CINEMATIC HORIZON</p>

          <div className="flex gap-8">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    );
};

export default Footer;