import Link from "next/link";

export default function SelectPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-blueGray-100">
      <div className="cyber-bg min-h-screen pt-20">
        <section className="py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-blueGray-700 mb-8">
              Willkommen bei MG Solutions
            </h1>
            <p className="text-lg text-blueGray-500 mb-12">
              Bitte wählen Sie aus, ob Sie als Privatperson oder Unternehmen fortfahren möchten.
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/private">
                <a className="bg-blueGray-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blueGray-600 transition">
                  Privatperson
                </a>
              </Link>
              <Link href="/business">
                <a className="bg-blueGray-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blueGray-600 transition">
                  Unternehmen
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}