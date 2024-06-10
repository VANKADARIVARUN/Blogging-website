let firebaseConfig = {
    apiKey: "AIzaSyCyf_iW1rKFWBc_m5qyb4hAOjfNfPQYj_Y",
    authDomain: "blogging-website-7db67.firebaseapp.com",
    projectId: "blogging-website-7db67",
    storageBucket: "blogging-website-7db67.appspot.com",
    messagingSenderId: "339843635528",
    appId: "1:339843635528:web:0ef034b344e3efd6c0bb7d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

// Export the db object for use in other scripts
export { db };
  