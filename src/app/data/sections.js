import eventData from '@/app/data/event'
import venueData from '@/app/data/venues'
import hotelData from '@/app/data/hotel'
import organizersData from '@/app/data/organizer'
import departmentData from '@/app/data/department'
import teamData from '@/app/data/team'
import supplierData from '@/app/data/supplier'

const sections = {
  event: {
    title: 'Your Events',
    button: '＋ Add Event',
    tabs: ['Running', 'Live', 'Drafts', 'Past', 'Cancelled', 'All', 'Trash'],
    data: eventData,
  },
  venues: {
    title: 'Your Venues',
    button: '＋ Add Venue',
    tabs: ['Active', 'Inactive', 'All', 'Trash'],
    data: venueData,
  },
  hotel: {
    title: 'Your Hotels',
    button: '＋ Add Hotel',
    tabs: ['Active', 'Inactive', 'All', 'Trash'],
    data: hotelData,
  },
  organizers: {
    title: 'Your Organizers',
    button: '＋ Add Organizer',
    tabs: ['Active', 'Inactive', 'All', 'Trash'],
    data: organizersData,
  },
  departments: {
    title: 'Your Departments',
    button: '＋ Add Department',
    tabs: ['Active', 'Inactive', 'All', 'Trash'],
    data: departmentData,
  },
  teams: {
    title: 'Your Teams',
    button: '＋ Add Team',
    tabs: ['Active', 'Inactive', 'All', 'Trash'],
    data: teamData,
  },
  suppliers: {
    title: 'Your Suppliers',
    button: '＋ Add Supplier',
    tabs: ['Active', 'Inactive', 'All', 'Trash'],
    data: supplierData,
  },
}

export default sections
