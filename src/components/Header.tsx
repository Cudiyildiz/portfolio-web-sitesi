import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import ImageModal from './ImageModal';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const sections = [
    { name: 'Hakkımda', id: 'hakkimda' },
    { name: 'Projelerim', id: 'proje' },
    { name: 'Blog', id: 'blog' },
    { name: 'İletişim', id: 'iletisim' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="transition-transform duration-300 hover:scale-105 focus:outline-none"
              >
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQFekJj7qEFDLg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704900835219?e=1739404800&v=beta&t=KMa3cMdKImW0ERxu4wJjsdlL1FSqsBYLtBL3D20d5Qk"
                  alt="Cudi Yıldız"
                  className="h-12 w-12 rounded-full object-cover"
                />
              </button>
              <span className="ml-3 text-xl font-bold text-gray-900">Cudi Yıldız</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavigation(section.id)}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {section.name}
                </button>
              ))}
              <div className="flex items-center space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:contact@example.com" className="text-gray-600 hover:text-gray-900">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavigation(section.id)}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 w-full text-left"
                >
                  {section.name}
                </button>
              ))}
              <div className="flex space-x-4 px-3 py-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:contact@example.com" className="text-gray-600 hover:text-gray-900">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Image Modal */}
      {isModalOpen && (
        <ImageModal
          src="https://media.licdn.com/dms/image/v2/D4D03AQFekJj7qEFDLg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704900835219?e=1739404800&v=beta&t=KMa3cMdKImW0ERxu4wJjsdlL1FSqsBYLtBL3D20d5Qk"
          alt="Cudi Yıldız"
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
