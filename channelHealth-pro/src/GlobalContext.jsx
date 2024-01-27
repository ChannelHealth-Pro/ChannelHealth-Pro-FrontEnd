// import { createContext, useContext, useEffect, useState } from "react";

// const GlobalContext = createContext();

// function GlobalProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         setUser("customer");
//       } catch (err) {}
//       setLoading(false);
//     };

//     fetchUser();
//   }, []);

//   return (
//     <GlobalContext.Provider value={{ user, setUser }}>
//       {loading ? <div>loading</div> : <>{children}</>}
//     </GlobalContext.Provider>
//   );
// }

// export default GlobalProvider;

// export function useGlobal() {
//   return useContext(GlobalContext);
// }
