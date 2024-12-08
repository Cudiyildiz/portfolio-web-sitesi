import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  const sections = [
    { name: 'Hakkımda', id: 'hakkimda' },
    { name: 'Projelerim', id: 'proje' },
    { name: 'Blog', id: 'blog' },
    { name: 'İletişim', id: 'iletisim' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cudi Yıldız</h3>
            <p className="text-gray-400">
             Junior Flutter Developer, güzel ve işlevsel mobil uygulamalar yaratma konusunda tutkulu.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => {
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {section.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Adresler</h3>
            <p className="text-gray-400">
              Email: cudi36y@gmail.com<br />
              Lokasyon: Küçükçekmece, İstanbul, Türkiye
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {year} Cudi Yıldız. Tüm Hakkları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}