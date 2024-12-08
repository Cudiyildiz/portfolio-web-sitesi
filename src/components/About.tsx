import { Download, Code, Database, PenTool } from 'lucide-react';

const skills = [
  { name: 'Flutter', level: 85 },
  { name: 'Firebase', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'UI/UX Design', level: 70 },
];

export default function About() {
  return (
    <section id="hakkimda" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Hakkımda</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
            Merhaba, ben mobil geliştirmeyle yakından ilgilenen tutkulu bir Junior Flutter Geliştiricisi olan Cudi Yıldız
              ve bulut teknolojileri. Flutter, Firebase ve Python uzmanlığımla kusursuz mobil uygulamalar yaratıyorum
              Kullanıcıları memnun eden ve gerçek dünyadaki sorunları çözen deneyimler.
            </p>
            <div className="flex space-x-4">
              <button 
              onClick={() => window.open('/files/cv.pdf', '_blank')}
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="h-5 w-5 mr-2" />
                CV İndir
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-4">
              <div className="p-6 bg-white rounded-xl shadow-sm text-center">
                <Code className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                <h3 className="font-semibold">Flutter</h3>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm text-center">
                <Database className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                <h3 className="font-semibold">Firebase</h3>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm text-center">
                <PenTool className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                <h3 className="font-semibold">Python</h3>
              </div>
            </div>

            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}