export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  location?: string;
  date?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    title: 'Rescued Puppy Recovery',
    description: 'A beautiful transformation story of a puppy rescued from neglect, now healthy and happy.',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Rescue',
    location: 'Local Shelter',
    date: '2026-01-26'
  },
  {
    id: '2',
    title: 'Wildlife Rehabilitation Center',
    description: 'Our dedicated team caring for injured wildlife before releasing them back to nature.',
    image: 'https://images.pexels.com/photos/133459/pexels-photo-133459.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Wildlife',
    location: 'Nature Reserve',
    date: '2026-01-26'
  },
  {
    id: '3',
    title: 'Educational Workshop',
    description: 'Teaching children about compassionate treatment of animals in our community outreach program.',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Education',
    location: 'Community Center',
    date: '2026-01-26'
  },
  {
    id: '4',
    title: 'Farm Animal Sanctuary',
    description: 'Rescued farm animals living peacefully in our sanctuary, free from exploitation.',
    image: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Sanctuary',
    location: 'Farm Sanctuary',
    date: '2026-01-26'
  },
  {
    id: '5',
    title: 'Volunteer Training Day',
    description: 'New volunteers learning proper animal handling techniques and safety protocols.',
    image: 'https://images.pexels.com/photos/5731895/pexels-photo-5731895.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Volunteers',
    location: 'Training Center',
    date: '2026-01-26'
  },
  {
    id: '6',
    title: 'Marine Life Protection',
    description: 'Our team working to protect marine animals from pollution and harmful fishing practices.',
    image: 'https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Wildlife',
    location: 'Coastal Area',
    date: '2026-01-26'
  },
  {
    id: '7',
    title: 'Adoption Success Story',
    description: 'Happy families with their newly adopted pets, giving animals a second chance at life.',
    image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Adoption',
    location: 'Adoption Center',
    date: '2026-01-26'
  },
  {
    id: '8',
    title: 'Emergency Rescue Operation',
    description: 'Our rapid response team rescuing animals from a natural disaster area.',
    image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Rescue',
    location: 'Disaster Zone',
    date: '2026-01-26'
  },
  {
    id: '9',
    title: 'Veterinary Care Program',
    description: 'Providing free medical care to animals from low-income families in our community.',
    image: 'https://images.pexels.com/photos/6235234/pexels-photo-6235234.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Medical',
    location: 'Mobile Clinic',
    date: '2026-01-26'
  },
  {
    id: '10',
    title: 'Awareness Campaign',
    description: 'Community members joining our march against animal cruelty and promoting compassion.',
    image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Advocacy',
    location: 'City Center',
    date: '2026-01-26'
  },
  {
    id: '11',
    title: 'Shelter Renovation',
    description: 'Volunteers helping to renovate and improve living conditions at our animal shelter.',
    image: 'https://images.pexels.com/photos/7516366/pexels-photo-7516366.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Volunteers',
    location: 'Animal Shelter',
    date: '2026-01-26'
  },
  {
    id: '12',
    title: 'Research and Documentation',
    description: 'Our research team documenting animal behavior and welfare conditions for policy advocacy.',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Research',
    location: 'Research Facility',
    date: '2026-01-26'
  }
];
