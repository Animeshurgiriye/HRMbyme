// import React, { createContext, useEffect, useState } from "react";

// import { auth } from "../firebase";

// const CreateFirebaseAPI = () => {
//   const [user, setUser] = useState("");
//   const handleAuthResult = async (authResult) => {
//     let formattedUser = null;
//     if (authResult) {
//       formattedUser = {
//         uid: authResult.uid,
//         email: authResult.email,
//         name: authResult.displayName,
//         provider: authResult.providerData[0].providerId,
//         photoUrl: authResult.photoURL,
//       };
//     }
//     setUser(formattedUser);
//   };
//   const login = (email, password) => {
//     auth.signInWithEmailAndPassword(email, password).catch((err) => {
//       console.log(err);
//     });
//   };
//   const logout = () =>
//     auth
//       .signOut()
//       .then(() => {
//         handleAuthResult(null);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(handleAuthResult);

//     return unsubscribe;
//   }, []);

//   return { user, logout, login };
// };

// const firebaseAPIContext = createContext();

// const AuthProvider = (props) => {
//   // eslint-disable-next-line react/prop-types
//   const { children } = props;
//   const authAPI = CreateFirebaseAPI();
//   return (
//     <firebaseAPIContext.Provider value={authAPI}>
//       {children}
//     </firebaseAPIContext.Provider>
//   );
// };

// export default firebaseAPIContext;
// export { AuthProvider };
