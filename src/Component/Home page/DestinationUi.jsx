import React from 'react';

const DestinationUi = () => {
    return (
        <div >
            <section className="py-24 px-8 md:px-16">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
              <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
                Primal <span className="text-[#b1f661] italic block">Destinations</span>
              </h2>
              <p className="text-[#c2cab2] text-lg mb-8 max-w-md">
                We don't just find locations; we uncover hidden dimensions of Earth that challenge your perception of luxury.
              </p>
              <a href="#" className="text-[#fea619] flex items-center gap-2 tracking-widest uppercase text-sm font-bold hover:gap-4 transition-all">
                View All Expeditions <span className="material-symbols-outlined">north_east</span>
              </a>
            </div>

            <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] group cursor-pointer">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHV31JUsNkGZNpUM8yczZdkzQs_algztknF9_bj-0aws-ylph2Lc49kjpXVTfdxV9USe3IBUANzUQoiQACBnR9JBrmP5RijQ3xzZBWvW_PIPMTzMaf_nLK2RAFYTaUFIrzGPOkUdTr7p-p8NH2UT7H7oqNymo0qKkoRoPdf5OseSDw4sY4jdcJSYPoZgmBzxeDDkgDy9FULfw72qA_K5Gr3NPOWLtsv1SfI4Cx81KawGkvssBSYorqQGXlZTlHF3uWUwQJYhxkDg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Patagonia" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1108] p-8 flex flex-col justify-end">
                  <span className="text-[#fea619] text-xs uppercase tracking-widest">Patagonia</span>
                  <h3 className="text-xl italic font-serif">The Granite Spires</h3>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] group cursor-pointer md:mt-12">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0D2lV_MZ0rYwNKgG26oZfQWT3QIHUPZ3K5fbaZ8UwRZdYjwZr3Y9DImqfD_YjfJy9fvmNi1bLO9IlszBX6gYZRx7pGQ-4psiVuzSulK_LMTnuqFMtqJGBZrSEmSLbwofw_KhXqs6auq9RcBrUc_2lOGs-MQv9jtGA1_vMBZs9_XDlNoAN0H3LhqnB_niY9SOMdXr88z9m7A4g-ljl-wliDkruYxGfG1OlVEHTr6HDb1Xji-7d8VBRuHhmyiDeFwsOrwybPIhrRg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Iceland" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1108] p-8 flex flex-col justify-end">
                  <span className="text-[#fea619] text-xs uppercase tracking-widest">Iceland</span>
                  <h3 className="text-xl italic font-serif">Celestial Waters</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        </div>
    );
};

export default DestinationUi;