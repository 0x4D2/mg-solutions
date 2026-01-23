// This page has been removed — redirect to the business page to keep the route safe.

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/business",
      permanent: false,
    },
  };
}

export default function PrivatePage() {
  return null;
}
                      <text x="12" y="16" textAnchor="middle" fontSize="12" fill="currentColor">2</text>
                    </svg>
                  ),
                  title: "Sicherheits-Paket buchen",
                  desc: "Sie erhalten Ihren persönlichen Schutz – ohne Technikstress."
                },
                {
                  icon: (
                    <svg className="w-10 h-10 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <text x="12" y="16" textAnchor="middle" fontSize="12" fill="currentColor">3</text>
                    </svg>
                  ),
                  title: "Soforthilfe & Updates",
                  desc: "Wir sind für Sie da, wenn es darauf ankommt – und halten Sie immer auf dem neuesten Stand."
                }
              ].map((step, i) => (
                <div key={i} className="text-white bg-gray-800/60 rounded-2xl shadow-xl border border-blue-700 p-8 text-center flex flex-col items-center">
                  {step.icon}
                  <h2 className="text-xl font-bold mb-2">{step.title}</h2>
                  <p className="text-gray-300">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-16"
            >
              Das sagen unsere Kunden
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-8 overflow-x-auto pb-4 snap-x"
            >
              {[
                {
                  quote: "Endlich verstehe ich, wie ich mich schützen kann! Die Erklärungen sind so verständlich - kein Technik-Kauderwelsch.",
                  author: "Helga B., 68 Jahre",
                  rating: 5
                },
                {
                  quote: "Nachdem mein Sohn unser WLAN 'gehackt' hat, haben wir MG Solutions engagiert. Jetzt haben wir Ruhe - und Sicherheit.",
                  author: "Familie Schneider",
                  rating: 5
                },
                {
                  quote: "Die regelmäßigen Update-Erinnerungen sind Gold wert. Ich wusste gar nicht, wie oft ich Updates vergessen habe.",
                  author: "Thomas K., Freiberufler",
                  rating: 4
                },
                {
                  quote: "Der Darknet-Scan hat tatsächlich ein geleaktes Passwort von mir gefunden! Unglaublich wichtiger Service.",
                  author: "Sarah M., Journalistin",
                  rating: 5
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className=" text-white min-w-[320px] bg-gray-800/70 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-700 snap-center"
                >
                  <div className="flex mb-4">
                    <>
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className={`w-5 h-5 ${j < item.rating ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </>
                  </div>
                  <blockquote className="text-gray-300 italic mb-6">"{item.quote}"</blockquote>
                  <div className="flex items-center">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">
                      {item.author.charAt(0)}
                    </div>
                    <p className="text-gray-400 font-medium">{item.author}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 animate-gradient-x text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-6"
            >
              Bereit für sorgenfreie <span className="text-blue-300">Sicherheit</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-blue-200 max-w-3xl mx-auto mb-10"
            >
              Kontaktieren Sie uns noch heute für eine kostenlose Erstberatung.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Jetzt Termin vereinbaren
            </button> */}
              <a
                href="tel:+4917675468985"
                className="bg-transparent hover:bg-white hover:text-blue-800 text-white font-bold px-8 py-4 rounded-full border-2 border-white transition-all duration-300 flex items-center justify-center"
                style={{ textDecoration: "none" }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +49 176 75468985
              </a>
            </motion.div>
          </div>

        </section>

      </motion.div>
      <Footer />
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}