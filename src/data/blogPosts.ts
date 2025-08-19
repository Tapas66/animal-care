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
    title: 'Understanding Animal Rights: A Foundation for Compassion',
    excerpt: 'Explore the fundamental principles of animal rights and why every creature deserves protection from cruelty and exploitation.',
    content: 'Animal rights represent the belief that animals have inherent value and deserve to live free from human exploitation and cruelty...',
    author: 'Pranav Sahu',
    date: '2025-08-15',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Education'
  },
  {
    id: '2',
    title: 'Factory Farming: The Hidden Truth Behind Our Food',
    excerpt: 'Uncover the harsh realities of industrial farming and learn how your food choices can make a difference for animal welfare.',
    content: 'Factory farming represents one of the most widespread forms of animal cruelty in modern society...',
    author: 'Swadha Shubhangi',
    date: '2025-08-14',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Investigation'
  },
  {
    id: '3',
    title: 'Wildlife Conservation: Protecting Endangered Species',
    excerpt: 'Discover how human activities threaten wildlife and what we can do to protect endangered species from extinction.',
    content: 'Wildlife conservation is critical in our fight against animal cruelty and species extinction...',
    author: 'Ambuj Rai',
    date: '2025-08-14',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/133459/pexels-photo-133459.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Conservation'
  },
  {
    id: '4',
    title: 'Pet Abandonment: A Growing Crisis',
    excerpt: 'Learn about the pet abandonment epidemic and how responsible pet ownership can help reduce animal suffering.',
    content: 'Pet abandonment has reached crisis levels in many communities worldwide...',
    author: 'Ayush Kumar',
    date: '2025-08-16',
    readTime: '4 min',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Pet Care'
  },
  {
    id: '5',
    title: 'The Entertainment Industry and Animal Exploitation',
    excerpt: 'Examine how animals are used in entertainment and the ethical concerns surrounding circuses, zoos, and marine parks.',
    content: 'The use of animals for entertainment has a long and troubling history...',
    author: 'Tapas Pandey',
    date: '2025-08-15',
    readTime: '7 min',
    image: 'https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Entertainment'
  },
  {
    id: '6',
    title: 'Animal Testing: Alternatives and Ethics',
    excerpt: 'Explore the world of animal testing, its ethical implications, and the promising alternatives being developed.',
    content: 'Animal testing remains one of the most controversial aspects of scientific research...',
    author: 'Mohank Saini',
    date: '2025-08-13',
    readTime: '9 min',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Science'
  },
  {
    id: '7',
    title: 'Street Animals: Compassion in Action',
    excerpt: 'Learn about the plight of street animals worldwide and how communities are working together to help them.',
    content: 'Street animals face countless challenges in their daily struggle for survival...',
    author: 'Priyanshu Prasad',
    date: '2025-08-15',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Community'
  },
  {
    id: '8',
    title: 'Fashion Industry: The Cost of Fur and Leather',
    excerpt: 'Investigate the impact of the fashion industry on animals and discover ethical alternatives to animal-derived materials.',
    content: 'The fashion industry has long relied on animal products, often obtained through cruel practices...',
    author: 'Vedant Jha ',
    date: '2025-08-14',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/128817/pexels-photo-128817.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fashion'
  }
];