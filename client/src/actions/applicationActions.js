import axios from 'axios';

import {
  GET_APPLICATION,
  GET_APPLICATIONS,
  APPLICATION_LOADING,
  CLEAR_CURRENT_APPLICATION,
  GET_ERRORS,
  SET_CURRENT_USER
} from './types';

// Get current profile
export const getCurrentApplication = () => dispatch => {
  dispatch(setapplicationLoading());
  axios
    .get('/api/application/form')
    .then(res =>
      dispatch({
        type: GET_APPLICATION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_APPLICATION,
        payload: {}
      })
    );
};

// Get profile by handle
export const getProfileByHandle = handle => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(`/api/profile/handle/${handle}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: null
      })
    );
};

// Create Application
export const createApplication = (applicationData, history) => dispatch => {
  axios
    .post('/api/application/form', applicationData)
    .then(res => history.push('/form'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add experience
// export const addExperience = (expData, history) => dispatch => {
//   axios
//     .post('/api/profile/experience', expData)
//     .then(res => history.push('/dashboard'))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// Add education
// export const addEducation = (eduData, history) => dispatch => {
//   axios
//     .post('/api/profile/education', eduData)
//     .then(res => history.push('/dashboard'))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// Delete Experience
// export const deleteExperience = id => dispatch => {
//   axios
//     .delete(`/api/profile/experience/${id}`)
//     .then(res =>
//       dispatch({
//         type: GET_PROFILE,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// Delete Education
// export const deleteEducation = id => dispatch => {
//   axios
//     .delete(`/api/profile/education/${id}`)
//     .then(res =>
//       dispatch({
//         type: GET_PROFILE,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// Get all profiles
// export const getProfiles = () => dispatch => {
//   dispatch(setProfileLoading());
//   axios
//     .get('/api/profile/all')
//     .then(res =>
//       dispatch({
//         type: GET_PROFILES,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_PROFILES,
//         payload: null
//       })
//     );
// };

// Delete account & profile
// export const deleteAccount = () => dispatch => {
//   if (window.confirm('Are you sure? This can NOT be undone!')) {
//     axios
//       .delete('/api/profile')
//       .then(res =>
//         dispatch({
//           type: SET_CURRENT_USER,
//           payload: {}
//         })
//       )
//       .catch(err =>
//         dispatch({
//           type: GET_ERRORS,
//           payload: err.response.data
//         })
//       );
//   }
// };

// Profile loading
export const setApplicaLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile
export const clearCurrentApplication = () => {
  return {
    type: CLEAR_CURRENT_APPLICATION
  };
};
