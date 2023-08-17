const addBaseUrl = (src) => {
//    const baseURL = process.env;
   const baseURL = window.location.origin;
    return baseURL + src;
  };
  
  export const UtilService = {
    addBaseUrl,
  };