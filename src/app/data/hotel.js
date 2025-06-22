const hotelData = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330467/AIG_Event_Software/DummyImages/event4_btqkhq.jpg',
    title: 'India Medical Innovation Summit 2025',
    status: 'Active',
    dates: 'June 15, 2025',
    location: 'New Delhi, India',
    lastModifiedBy: {
      avatar:
        'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330453/AIG_Event_Software/DummyImages/avatar5_deyztf.jpg',
      timeAgo: '2 days ago',
    },
    registrationLink: 'https://example.com/register/1',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330467/AIG_Event_Software/DummyImages/event4_btqkhq.jpg',
    title: 'National Cardiology Conference – Delhi Chapter',
    status: 'Inactive',
    dates: 'June 18, 2025',
    location: 'Delhi, India',
    lastModifiedBy: {
      avatar:
        'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330453/AIG_Event_Software/DummyImages/avatar5_deyztf.jpg',
      timeAgo: '1 day ago',
    },
    registrationLink: 'https://example.com/register/2',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330467/AIG_Event_Software/DummyImages/event4_btqkhq.jpg',
    title: 'Ayush & Integrative Medicine Expo',
    status: 'Active',
    dates: 'June 27, 2025',
    location: 'Mau, Uttar Pradesh',
    lastModifiedBy: {
      avatar:
        'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330453/AIG_Event_Software/DummyImages/avatar5_deyztf.jpg',
      timeAgo: '3 days ago',
    },
    registrationLink: 'https://example.com/register/3',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330467/AIG_Event_Software/DummyImages/event4_btqkhq.jpg',
    title: 'Global Health & Wellness Conclave – Mumbai',
    status: 'Inactive',
    dates: 'June 8, 2025',
    location: 'Mumbai, India',
    lastModifiedBy: {
      avatar:
        'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330453/AIG_Event_Software/DummyImages/avatar5_deyztf.jpg',
      timeAgo: '4 days ago',
    },
    registrationLink: 'https://example.com/register/4',
  },
  {
    id: 5,
    image:
      'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330467/AIG_Event_Software/DummyImages/event4_btqkhq.jpg',
    title: 'AI in Healthcare India Summit',
    status: 'Active',
    dates: 'June 29, 2025',
    location: 'Kolkata, West Bengal',
    lastModifiedBy: {
      avatar:
        'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330453/AIG_Event_Software/DummyImages/avatar5_deyztf.jpg',
      timeAgo: '5 days ago',
    },
    registrationLink: 'https://example.com/register/5',
  },
  {
    id: 6,
    image:
      'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330466/AIG_Event_Software/DummyImages/event5_m89q9h.jpg',
    title: 'Pediatric Care Congress India',
    status: 'Inactive',
    dates: 'June 30, 2025',
    location: 'Miami, FL',
    lastModifiedBy: {
      avatar:
        'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330453/AIG_Event_Software/DummyImages/avatar5_deyztf.jpg',
      timeAgo: '6 days ago',
    },
    registrationLink: 'https://example.com/register/6',
  },
  {
    id: 7,
    image:
      'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330466/AIG_Event_Software/DummyImages/event5_m89q9h.jpg',
    title: 'MedTech India Expo & Conference',
    status: 'Active',
    dates: 'July 1, 2025',
    location: 'Denver, CO',
    lastModifiedBy: {
      avatar:
        'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330453/AIG_Event_Software/DummyImages/avatar5_deyztf.jpg',
      timeAgo: '7 days ago',
    },
    registrationLink: 'https://example.com/register/7',
  },
  {
    id: 8,
    image:
      'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330466/AIG_Event_Software/DummyImages/event5_m89q9h.jpg',
    title: 'NeuroScience Forum India',
    status: 'Inactive',
    dates: 'July 2, 2025',
    location: 'Boston, MA',
    lastModifiedBy: {
      avatar:
        'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330453/AIG_Event_Software/DummyImages/avatar5_deyztf.jpg',
      timeAgo: '8 days ago',
    },
    registrationLink: 'https://example.com/register/8',
  },
  {
    id: 9,
    image:
      'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330466/AIG_Event_Software/DummyImages/event5_m89q9h.jpg',
    title: 'Indian Oncology Symposium',
    status: 'Active',
    dates: 'July 3, 2025',
    location: 'San Francisco, CA',
    lastModifiedBy: {
      avatar:
        'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330453/AIG_Event_Software/DummyImages/avatar5_deyztf.jpg',
      timeAgo: '9 days ago',
    },
    registrationLink: 'https://example.com/register/9',
  },
  {
    id: 10,
    image:
      'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330466/AIG_Event_Software/DummyImages/event5_m89q9h.jpg',
    title: 'Rural Health Mission Forum 2025',
    status: 'Inactive',
    dates: 'July 4, 2025',
    location: 'Houston, TX',
    lastModifiedBy: {
      avatar:
        'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330453/AIG_Event_Software/DummyImages/avatar5_deyztf.jpg',
      timeAgo: '10 days ago',
    },
    registrationLink: 'https://example.com/register/10',
  },
  {
    id: 11,
    image:
      'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330463/AIG_Event_Software/DummyImages/event1_kwv6yt.png',
    title: 'Public Health Policy & Practice Conference',
    status: 'Active',
    dates: 'July 5, 2025',
    location: 'Philadelphia, PA',
    lastModifiedBy: {
      avatar:
        'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330450/AIG_Event_Software/DummyImages/avatar3_gdef6k.jpg',
      timeAgo: '11 days ago',
    },
    registrationLink: 'https://example.com/register/11',
  },
  {
    id: 12,
    image:
      'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330463/AIG_Event_Software/DummyImages/event1_kwv6yt.png',
    title: 'Global Ayurveda Summit – Kochi Edition',
    status: 'Inactive',
    dates: 'July 6, 2025',
    location: 'Phoenix, AZ',
    lastModifiedBy: {
      avatar:
        'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330450/AIG_Event_Software/DummyImages/avatar3_gdef6k.jpg',
      timeAgo: '12 days ago',
    },
    registrationLink: 'https://example.com/register/12',
  },
  {
    id: 13,
    image:
      'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330463/AIG_Event_Software/DummyImages/event1_kwv6yt.png',
    title: 'Diabetes Awareness & Research Meet – Pune',
    status: 'Active',
    dates: 'July 7, 2025',
    location: 'San Diego, CA',
    lastModifiedBy: {
      avatar:
        'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330450/AIG_Event_Software/DummyImages/avatar3_gdef6k.jpg',
      timeAgo: '13 days ago',
    },
    registrationLink: 'https://example.com/register/13',
  },
  {
    id: 14,
    image:
      'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330463/AIG_Event_Software/DummyImages/event1_kwv6yt.png',
    title: 'Infectious Diseases India Forum',
    status: 'Inactive',
    dates: 'July 8, 2025',
    location: 'Dallas, TX',
    lastModifiedBy: {
      avatar:
        'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330450/AIG_Event_Software/DummyImages/avatar3_gdef6k.jpg',
      timeAgo: '14 days ago',
    },
    registrationLink: 'https://example.com/register/14',
  },
  {
    id: 15,
    image:
      'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330463/AIG_Event_Software/DummyImages/event1_kwv6yt.png',
    title: 'Women’s Health & Fertility Conference',
    status: 'Active',
    dates: 'July 9, 2025',
    location: 'San Jose, CA',
    lastModifiedBy: {
      avatar:
        'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330450/AIG_Event_Software/DummyImages/avatar3_gdef6k.jpg',
      timeAgo: '15 days ago',
    },
    registrationLink: 'https://example.com/register/15',
  },
  {
    id: 16,
    image:
      'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330464/AIG_Event_Software/DummyImages/event2_xwvpkz.png',
    title: 'All India Medical Students’ Convention',
    status: 'Inactive',
    dates: 'July 10, 2025',
    location: 'Jacksonville, FL',
    lastModifiedBy: {
      avatar:
        'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330450/AIG_Event_Software/DummyImages/avatar3_gdef6k.jpg',
      timeAgo: '16 days ago',
    },
    registrationLink: 'https://example.com/register/16',
  },
  {
    id: 17,
    image:
      'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330464/AIG_Event_Software/DummyImages/event2_xwvpkz.png',
    title: 'Orthopedics & Sports Medicine Meet – Bangalore',
    status: 'Active',
    dates: 'July 11, 2025',
    location: 'Columbus, OH',
    lastModifiedBy: {
      avatar:
        'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330450/AIG_Event_Software/DummyImages/avatar3_gdef6k.jpg',
      timeAgo: '17 days ago',
    },
    registrationLink: 'https://example.com/register/17',
  },
  {
    id: 18,
    image:
      'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330464/AIG_Event_Software/DummyImages/event2_xwvpkz.png',
    title: 'Pharmaceutical Sciences & Drug Discovery India',
    status: 'Inactive',
    dates: 'July 12, 2025',
    location: 'Indianapolis, IN',
    lastModifiedBy: {
      avatar:
        'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330450/AIG_Event_Software/DummyImages/avatar3_gdef6k.jpg',
      timeAgo: '18 days ago',
    },
    registrationLink: 'https://example.com/register/18',
  },
  {
    id: 19,
    image:
      'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330464/AIG_Event_Software/DummyImages/event2_xwvpkz.png',
    title: 'Mental Health & Wellbeing Symposium – Chennai',
    status: 'Active',
    dates: 'July 13, 2025',
    location: 'Charlotte, NC',
    lastModifiedBy: {
      avatar:
        'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330450/AIG_Event_Software/DummyImages/avatar3_gdef6k.jpg',
      timeAgo: '19 days ago',
    },
    registrationLink: 'https://example.com/register/19',
  },
  {
    id: 20,
    image:
      'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330464/AIG_Event_Software/DummyImages/event2_xwvpkz.png',
    title: 'National Emergency Medicine Congress',
    status: 'Inactive',
    dates: 'July 14, 2025',
    location: 'San Antonio, TX',
    lastModifiedBy: {
      avatar:
        'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330450/AIG_Event_Software/DummyImages/avatar3_gdef6k.jpg',
      timeAgo: '20 days ago',
    },
    registrationLink: 'https://example.com/register/20',
  },
  {
    id: 14,
    image: '/images/event4.JPG',
    title: 'Infectious Diseases India Forum',
    status: 'Cancelled',
    dates: 'July 8, 2025',
    location: 'Dallas, TX',
    lastModifiedBy: {
      avatar:
        'https://res.cloudinary.com/dr5kn8993/image/upload/v1750330450/AIG_Event_Software/DummyImages/avatar3_gdef6k.jpg',
      timeAgo: '14 days ago',
    },
    registrationLink: 'https://example.com/register/14',
  },
]

export default hotelData
