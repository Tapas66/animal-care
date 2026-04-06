export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Fashion Industry: The Cost of Fur and Leather',
    excerpt: 'Investigate the impact of the fashion industry on animals and discover ethical alternatives to animal-derived materials.',
    content: 'The fashion industry has long relied on animal products, often obtained through cruel practices...',
    author: 'Vedant Jha ',
    date: '2026-02-26',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/128817/pexels-photo-128817.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fashion'
  },
  {
    id: '2',
    title: 'Factory Farming: The Hidden Truth Behind Our Food',
    excerpt: 'Uncover the harsh realities of industrial farming and learn how your food choices can make a difference for animal welfare.',
    content: 'Factory farming represents one of the most widespread forms of animal cruelty in modern society...',
    author: 'Swadha Shubhangi',
    date: '2026-02-26',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Investigation'
  },
  {
   id: '3',
    title: 'Street Animals: Compassion in Action',
    excerpt: 'Learn about the plight of street animals worldwide and how communities are working together to help them.',
    content: 'Street animals face countless challenges in their daily struggle for survival...',
    author: 'Priyanshu Prasad',
    date: '2026-02-26',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Community' 
  },
  {
    id: '4',
    title: 'Animal Testing: Alternatives and Ethics',
    excerpt: 'Explore the world of animal testing, its ethical implications, and the promising alternatives being developed.',
    content: 'Animal testing remains one of the most controversial aspects of scientific research...',
    author: 'Mohank Saini',
    date: '2026-02-26',
    readTime: '9 min',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Science'
  },
];