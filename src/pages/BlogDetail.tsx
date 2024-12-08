import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { blogPosts, ContentBlock } from '../data/blogPosts';
import { useScrollTop } from '../hooks/useScrollTop';
import ImageModal from '../components/ImageModal';

const ContentRenderer = ({ block }: { block: ContentBlock }) => {
  switch (block.type) {
    case 'heading':
      const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements;
      return (
        <HeadingTag className={`font-bold text-gray-900 mb-4 ${
          block.level === 1 ? 'text-3xl' :
          block.level === 2 ? 'text-2xl mt-8' :
          'text-xl mt-6'
        }`}>
          {block.content}
        </HeadingTag>
      );
    
    case 'paragraph':
      return (
        <p className="text-gray-700 leading-relaxed mb-6">
          {block.content}
        </p>
      );
    
    case 'code':
      return (
        <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6 overflow-x-auto">
          <code className="text-sm font-mono">
            {block.content.trim()}
          </code>
        </pre>
      );
    
    case 'list':
      return (
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          {block.items?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    
    default:
      return null;
  }
};

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useScrollTop();

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <article className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full transition-transform duration-300 hover:scale-[1.02] focus:outline-none"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-xl mb-8"
            />
          </button>
          
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="mr-4">{post.date}</span>
              <Clock className="h-5 w-5 mr-2" />
              <span>{post.readTime}</span>
            </div>

            <div className="mt-8">
              {post.content.map((block, index) => (
                <ContentRenderer key={index} block={block} />
              ))}
            </div>
          </div>
        </div>
      </article>

      {isModalOpen && (
        <ImageModal
          src={post.image}
          alt={post.title}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}