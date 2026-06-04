"use client";

import React from "react";

const Dashboard = () => {
  return (
    <div className=" font-body-md">

      <main className=" mx-auto px-6 py-10">

        {/* HEADER */}
        <section className="relative rounded-xl overflow-hidden mb-10">

          <div
            className="h-72 md:h-80 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKNDWD_D6fT_pXMkp1DEx3IGKKcRzMur2MCv8oeAhAto2cXzsemA8AduGZPoUE93RoUCakUce8l9IukdgtDzvELiMW2cRlH1JWz79DRceMC4skrZ7EPk2KycZXy4TBHV0W5cZPy53zdZpTqkH4xmw1_bcKvemUe5IG7uHOJJMPKDftmQ2inEWieVTL8gnWgMEHCA3NMGordfEJ-ZVk0jQAmREH72CMXIq1OvMQsQqqEyGC_fdazqQop86mAweFkwG1Zg-tQ_tDLw')",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col md:flex-row gap-6 items-end">

            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr-dlhmRGDEgCmoSMv2MbAkBM_npLt0IkmtcfW2XSw_RSj7WtUc0sQmGc5D6KNtqX1qDsLVVdQB2bxD2EAxRu0OmXoSKOFQXTrAdKDnm4Mu11HEot8_DpyRiDDX7S1YQ3PineopXyvHf5NHTyTQRMw46YeJRIbgBVgqFU2ARNrW2Vhy2t_W63Lfi0Y7GUrzco92xqZx0RgKW4zga7vnUkiKakTQ3syHwBeAoj2JJWigwrF6-ZbILjZNgl-tbhuZsxDKi2fx7Yvsw"
              alt="profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl border-4 border-white object-cover"
            />

            <div className="flex-1 text-white">
              <h1 className="text-2xl md:text-3xl font-bold">
                Alex "The Nomad" Rivers
              </h1>

              <p className="text-white/70 max-w-2xl">
                Seeking the unseen and trekking the untraveled.
              </p>
            </div>

            <div className="flex gap-3">
              <button className="bg-primary text-white px-6 py-3 rounded-xl">
                Edit Profile
              </button>

              <button className="p-3 border rounded-xl text-white">
                ⚙️
              </button>
            </div>
          </div>
        </section>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-8 space-y-10">

            {/* STATS */}
            <div className="grid sm:grid-cols-3 gap-6">

              <div className="p- rounded-2xl text-center">
                <h2 className="text-3xl font-bold">42</h2>
                <p>Expeditions Completed</p>
              </div>

              <div className="p-6  rounded-2xl text-center">
                <h2 className="text-3xl font-bold">18</h2>
                <p>Countries Visited</p>
              </div>

              <div className="p-6  rounded-2xl text-center">
                <h2 className="text-3xl font-bold">Master</h2>
                <p>Explorer Level</p>
              </div>

            </div>

            {/* ACTIVE */}
            <div className="rounded-3xl overflow-hidden relative">

              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZI5Hv9tJ0VNxIdi5FguHyUZsFzOoyBzJMcS3mdFbnehV7SFHOlWQFyzI8NpeNm2atjk9hwXRCHrOwtr4x78GIWSxecNs1ZHemCJG4C4OP9O83q7DtLrm-NBLJyWKlHHDage3inuembbdKoEc82Ydpmpk292Ri-HMCfywcrazozheMhYkLNTtIzdWR-Itbx6ClLfl47i1ZFF3bN6YOllkSReoffgb0dHD21NH3JARtGTJ6DYlA4xz0UaLBFnP51VfKFkfsTxs5gg"
                alt="expedition"
                className="w-full h-64 object-cover"
              />

              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
                <h2 className="text-2xl font-bold">Patagonia Trek</h2>
                <p>Oct 12 - Oct 28</p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:col-span-4 space-y-8">

            {/* SETTINGS */}
            <div className=" p-6 rounded-3xl">
              <h3 className="text-xl font-bold mb-4">Account Settings</h3>

              {["Edit Profile", "Privacy", "Notifications", "Payments"].map((item) => (
                <div key={item} className="p-3 border-b">
                  {item}
                </div>
              ))}

              <button className="mt-6 w-full bg-red-100 text-red-600 py-3 rounded-xl">
                Logout
              </button>
            </div>

            {/* CARD */}
            <div className="bg-primary text-white p-6 rounded-3xl">
              <h3 className="text-xl font-bold">Weekend Warrior</h3>
              <p className="mt-2">
                Complete a 10km trek this weekend
              </p>
              <button className="mt-4 bg-white text-primary px-4 py-2 rounded-xl">
                Join Challenge
              </button>
            </div>

          </aside>

        </div>
      </main>

  

    </div>
  );
};

export default Dashboard;