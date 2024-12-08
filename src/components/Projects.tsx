import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Anımsatıcı',
    description: 'Anımsatıcı uygulaması, Flutter kullanarak geliştirdiğim ve SQLite ile güçlendirdiğim bir not alma uygulaması.',
    image: 'img/animsatici.png',
    github: 'https://github.com/Cudiyildiz/Animsatici_app',
    demo: 'https://dosya.co/mknz9apnef1n/app-armeabi-v7a-release.apk.html',
    tags: ['Flutter', 'SQLite', 'Bloc Pattern'],
  },
  {
    title: 'Dunya Ulkeleri',
    description: 'Dünya Ülkeleri, Flutter ile geliştirdiğim ve Shared Preferences ile favori ülkeleri kaydetme özelliği sunduğum bir bilgi uygulaması.',
    image: 'img/dunya.png',
    github: 'https://github.com/Cudiyildiz/dunya_ulkeleri_app',
    demo: 'https://dosya.co/bjvncl7vexbk/app-armeabi-v7a-release.apk.html',
    tags: ['Flutter', 'REST API', 'Shered Preferences'],
  },
  {
    title: 'Easy Join',
    description: 'Easy Join, Flutter kullanarak geliştirdiğim ve Firebase entegrasyonu ile güçlendirdiğim bir kullanıcı kayıt ve giriş uygulaması.',
    image: 'img/easy.png',
    github: 'https://github.com/Cudiyildiz/easy_join_app',
    demo: 'https://dosya.co/ke32lxh21w1f/app-armeabi-v7a-release.apk.html',
    tags: ['Flutter', 'Firebase'],
  },
  
];

const PROJECTS_PER_PAGE = 3;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <section id="proje" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Öne Çıkan Projeler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center items-center space-x-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-full ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              } transition-colors`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <span className="text-gray-600">
              Sayfa {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              } transition-colors`}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}