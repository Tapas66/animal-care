export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Vedant Jha',
    role: 'Student',
    image: 'https://cdn-icons-png.flaticon.com/512/1999/1999625.png' // cartoon boy
  },
  {
    id: '2',
    name: 'Swadha Shubhangi',
    role: 'Student',
    image: 'https://cdn-icons-png.flaticon.com/512/1999/1999629.png' // cartoon girl
  },
  {
    id: '3',
    name: 'Mohank Saini',
    role: 'Student',
    image: 'https://cdn-icons-png.flaticon.com/512/1999/1999625.png' // cartoon boy
  },
  {
    id: '4',
    name: 'Priyanshu Prasad',
    role: 'Student',
    image: 'https://cdn-icons-png.flaticon.com/512/1999/1999625.png' // cartoon boy
  }
];
