// // import { CAMPSITES } from '../../app/shared/CAMPSITES';
// import { createSlice } from '@reduxjs/toolkit';
// // import { baseUrl } from '../../app/shared/baseUrl';
// import { CAROUSEL } from '../../app/shared/CAROUSEL';

// const initialState = {
//     carouselArray: CAROUSEL
// }

// const carouselSlice = createSlice({
//     name: 'carousel',
//     initialState,
//     reducers: {}

// })

// export const carouselReducer = carouselSlice.reducer

// export const selectAllCarousel = (state) => {
//     return state.carousel.carouselArray;
// }

// // export const selectRandomCarousel = () => {
// //     return CAROUSEL[Math.floor(CAROUSEL.length * Math.random())];
// // }

// export const selectCarouselById = (id) => (state) => {
//     return state.carousel.carouselArray.find(
//         (carousel) => carousel.id === parseInt(id)
//     );
// }

// // export const selectFeaturedCarousel = (state) => {
// //     return {
// //         featuredItem: state.carousel.carouselArray.find(
// //             (carousel) => carousel.featured
// //         ),
// //         isLoading: state.carousel.isLoading,
// //         errMsg: state.carousel.errMsg
// //     };
// // };

