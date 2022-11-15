// import axios from "../api/axios";
// export const LoginSubmit = async (e, user, email, pwd, navigate, dispatch) => {
//   e.preventDefault();
//   if (user && email && pwd) {
//     try {
//       const res = await axios.post(
//         LoginUrl,
//         {
//           username: { user },
//           email: { email },
//           password: { pwd },
//         },
//         { headers: { "content-Type": "application/json" } }
//       );
//       const data = res.data;
//       console.log(data);
//       console.log(res);
//       dispatch(
//         login({
//           name: data.username,
//           email: data.email,
//           isVerified: data.isVerified,
//         })
//       );
//       setUser("");
//       setPwd("");
//       setEmail("");
//       if (data.isVerified) {
//         navigate("/");
//       } else if (!data.isVerified) {
//         navigate("/verify");
//       }
//     } catch (err) {
//       alert("error");
//       if (err.request) {
//         alert("Network error occured");
//       }
//       if (err.response) {
//         if (err.response.status >= 400 && res.status < 500) {
//           alert("email or userName incorrect");
//         } else {
//           alert("server error occured");
//         }
//       }
//     }
//   } else {
//     alert("please input all required fields");
//     return;
//   }
// };
