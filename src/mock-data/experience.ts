import { Experience, Experience_Preview } from '../app/core/experience/experience';

export const MOCK_EXPERIENCES_PREVIEW: Experience_Preview[] = [
    {
        id: 1,
        status: 1,
        title: 'Join our amazing team in the heart of Scotland',
        min_weeks: 2,
        max_weeks: 4,
        number_volunteers: 4,
        volunteer_hours: 5,
        days_off: 1,
        accomodation_type: 'Private room',
        property: {
            type: 'Hostel',
            country: 'United Kingdom',
        },
        average_ratings: 3.9,
        number_comments: 1,
        url: 'join-our-amazing-team-in-the-heart-of-scotland',
        gallery_pictures_url: ['https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg', 'https://cdn.pixabay.com/photo/2016/01/02/03/39/landscape-1117910_960_720.jpg', 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&w=1000&q=80'],
    },
    {
        id: 1,
        status: 1,
        title: 'The Great Backpack adventure',
        min_weeks: 2,
        max_weeks: 4,
        number_volunteers: 4,
        volunteer_hours: 3,
        days_off: 1,
        accomodation_type: 'Dormitory',
        property: {
            type: 'Hostel',
            country: 'France',
        },
        average_ratings: 4.3,
        number_comments: 3,
        url: 'join-our-amazing-team-in-the-heart-of-scotland',
        gallery_pictures_url: ['https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg', 'https://cdn.pixabay.com/photo/2016/01/02/03/39/landscape-1117910_960_720.jpg', 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&w=1000&q=80'],
    },
    {
        id: 1,
        status: 1,
        title: 'Family Escape in the Northern Norway',
        min_weeks: 2,
        max_weeks: 4,
        number_volunteers: 4,
        volunteer_hours: 3,
        days_off: 1,
        accomodation_type: 'Private room',
        property: {
            type: 'Homestay',
            country: 'Germany',
        },
        average_ratings: null,
        number_comments: 0,
        url: 'join-our-amazing-team-in-the-heart-of-scotland',
        gallery_pictures_url: ['https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg', 'https://cdn.pixabay.com/photo/2016/01/02/03/39/landscape-1117910_960_720.jpg', 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&w=1000&q=80'],
    },
    {
        id: 1,
        status: 1,
        title: 'Beautiful Valley around the Great roof of the World',
        min_weeks: 1,
        max_weeks: 8,
        number_volunteers: 1,
        volunteer_hours: 3,
        days_off: 2,
        accomodation_type: 'Private room',
        property: {
            type: 'Hostel',
            country: 'United Kingdom',
        },
        average_ratings: 2.7,
        number_comments: 10,
        url: 'join-our-amazing-team-in-the-heart-of-scotland',
        gallery_pictures_url: ['https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg', 'https://cdn.pixabay.com/photo/2016/01/02/03/39/landscape-1117910_960_720.jpg', 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&w=1000&q=80'],
    }
] 

export const MOCK_EXPERIENCE: Experience = {
    id: 1,
    status: 1,
    title: 'Join our amazing team in the heart of Scotland',
    min_weeks: 2,
    max_weeks: 4,
    number_volunteers: 4,
    volunteer_hours: 3,
    days_off: 1,
    accomodation_type: 'Private room',
    average_ratings: 4.2,
    number_comments: 2,
    url: 'join-our-amazing-team-in-the-heart-of-scotland',
    gallery_pictures_url: ['https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg', 'https://cdn.pixabay.com/photo/2016/01/02/03/39/landscape-1117910_960_720.jpg', 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&w=1000&q=80'],
    has_breakfast: 1,
    has_lunch: 1,
    has_diner: 1,
    has_food_allowance: 1,
    has_free_activities: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lorem lacus. Mauris rhoncus blandit rutrum. Fusce vitae consectetur tellus, vitae posuere erat. In vel ante ornare, tristique magna quis, gravida libero. Praesent volutpat maximus justo, vitae convallis elit tempor a. Sed facilisis facilisis iaculis. Ut molestie ultricies tempor. Aenean fringilla laoreet congue. Sed molestie nulla sit amet risus tincidunt vehicula. In vestibulum augue ut vulputate gravida. Fusce pulvinar eleifend leo vel porta. Suspendisse at dapibus tellus. Ut sed justo vel diam ullamcorper ullamcorper at et ligula.',
    requirements: 'Aenean fringilla laoreet congue. Sed molestie nulla sit amet risus tincidunt vehicula. In vestibulum augue ut vulputate gravida. Fusce pulvinar eleifend leo vel porta. Suspendisse at dapibus tellus. Ut sed justo vel diam ullamcorper ullamcorper at et ligula.',
    host: {
        is_valid: 1,
        is_premium: 1,
        is_host: 1,
        is_helper: 0,
        premium_until: null,
        firstname: 'Sophie',
        lastname: 'Cohen',
        email: 'sophie.cohen@gmail.com',
        phone: null,
        age: 34,
        description: 'Aenean fringilla laoreet congue. Sed molestie nulla sit amet risus tincidunt vehicula. In vestibulum augue ut vulputate gravida. Fusce pulvinar eleifend leo vel porta. Suspendisse at dapibus tellus. Ut sed justo vel diam ullamcorper ullamcorper at et ligula.',
        city: 'Bordeaux',
        country: 'France',
        profile_picture_url: 'https://c.wallhere.com/photos/51/f8/anime_girls_headphones_original_characters_face_profile_anime-216888.jpg!d',
        recently_online: 1,
        response_rate: 0.9,
        response_time:  5,
    },
    property: {
        type: 'Hostel',
        name: 'The Great Backpacker',
        address: '200 Avenue Legrand',
        zipcode: '33000',
        city: 'Lomond',
        country: 'United Kingdom',
    },
    reviews: {
        ratings: {
            host: 4.1,
            assigments: 3.5,
            atmosphere: 4.6,
            accomodation: 2.1,
        },
        comments: [
            {
                user_firstname: 'Kelly',
                user_profile_picture_url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lorem lacus. Mauris rhoncus blandit rutrum.',
                date: '2019-09-12',
            },
            {
                user_firstname: 'Cédric',
                user_profile_picture_url: 'https://pbs.twimg.com/profile_images/875498876261859329/7iV5CwVY_400x400.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lorem lacus. Mauris rhoncus blandit rutrum.',
                date: '2020-02-23',
            },
        ],
    },
}