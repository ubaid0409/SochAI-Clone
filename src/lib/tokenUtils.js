// // src/lib/tokenUtils.js

// // JWT Token decode karne ke liye function
// export const decodeToken = (token) => {
//   try {
//     if (!token) return null;
    
//     // JWT token format: header.payload.signature
//     const parts = token.split('.');
//     if (parts.length !== 3) {
//       throw new Error('Invalid token format');
//     }
    
//     const payload = parts[1];
//     // Base64 decode karein
//     const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
//     const decoded = atob(base64);
    
//     return JSON.parse(decoded);
//   } catch (error) {
//     console.error('Error decoding token:', error);
//     return null;
//   }
// };

// // Token expiration check karne ke liye function
// export const isTokenExpired = (token) => {
//   try {
//     const decoded = decodeToken(token);
//     if (!decoded || !decoded.exp) return true;
    
//     // Convert expiration time to milliseconds
//     const expirationTime = decoded.exp * 1000;
//     return Date.now() >= expirationTime;
//   } catch (error) {
//     console.error('Error checking token expiration:', error);
//     return true;
//   }
// };

// // User ID extract karne ke liye function
// export const getUserIdFromToken = (token) => {
//   try {
//     const decoded = decodeToken(token);
//     return decoded?.user_id || decoded?.userId || null;
//   } catch (error) {
//     console.error('Error getting user ID from token:', error);
//     return null;
//   }
// };

// // Username extract karne ke liye function
// export const getUsernameFromToken = (token) => {
//   try {
//     const decoded = decodeToken(token);
//     return decoded?.username || decoded?.preferred_username || null;
//   } catch (error) {
//     console.error('Error getting username from token:', error);
//     return null;
//   }
// };

// // Email extract karne ke liye function
// export const getEmailFromToken = (token) => {
//   try {
//     const decoded = decodeToken(token);
//     return decoded?.email || null;
//   } catch (error) {
//     console.error('Error getting email from token:', error);
//     return null;
//   }
// };

// // Token validity check karne ke liye function
// export const isValidToken = (token) => {
//   try {
//     if (!token) return false;
//     return !isTokenExpired(token);
//   } catch (error) {
//     console.error('Error validating token:', error);
//     return false;
//   }
// };

// // Token se user information extract karne ke liye function
// export const getUserInfoFromToken = (token) => {
//   try {
//     const decoded = decodeToken(token);
//     if (!decoded) return null;
    
//     return {
//       id: decoded.user_id || decoded.userId || decoded.sub,
//       username: decoded.username || decoded.preferred_username,
//       email: decoded.email,
//       name: decoded.name || decoded.given_name,
//       avatar: decoded.picture || decoded.avatar,
//       expiresAt: decoded.exp ? new Date(decoded.exp * 1000) : null
//     };
//   } catch (error) {
//     console.error('Error getting user info from token:', error);
//     return null;
//   }
// };

// // Demo ke liye test token
// export const testTokenValidity = () => {
//   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOWQzZjdmMmUtNWNkZS00OWU2LWE3ZGItZWU2MTlkZWM5Njg4IiwidXNlcm5hbWUiOiJ3YWl6ODA0IiwiZW1haWwiOiJ3YWl6YW5zYXJpMDFAZ21haWwuY29tIiwiaWF0IjoxNzU2MjkwMjY0LCJleHAiOjE3NTY0NjMwNjR9.TuhdgcQf040dEnndhHP71n5ke37fCAvB2eTM5O9eW5A";
  
//   console.log('Token decoded:', decodeToken(token));
//   console.log('Is token expired:', isTokenExpired(token));
//   console.log('User ID:', getUserIdFromToken(token));
//   console.log('Username:', getUsernameFromToken(token));
//   console.log('Email:', getEmailFromToken(token));
//   console.log('Is valid token:', isValidToken(token));
//   console.log('User info:', getUserInfoFromToken(token));
  
//   return isValidToken(token);
// };

// // Default export
// export default {
//   decodeToken,
//   isTokenExpired,
//   getUserIdFromToken,
//   getUsernameFromToken,
//   getEmailFromToken,
//   isValidToken,
//   getUserInfoFromToken,
//   testTokenValidity
// };