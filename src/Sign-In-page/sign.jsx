// // // import React, { useState } from 'react'; 

// // // const LoginForm = () => {
// // //   const [formData, setFormData] = useState({
// // //     username: '',
// // //     password: '',
// // //   });

// // //   const [errors, setErrors] = useState({
// // //     username: '',
// // //     password: '',
// // //   });

// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //     setErrors({ ...errors, [name]: '' });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     // Validate the form data here
// // //     let newErrors = { ...errors };

// // //     if (formData.username === '') {
// // //       newErrors.username = 'Username is required';
// // //     }

// // //     if (formData.password === '') {
// // //       newErrors.password = 'Password is required';
// // //     }

// // //     setErrors(newErrors);
// // //   };

// // //   return (
// // //     <div className="container mt-5">
// // //       <form onSubmit={handleSubmit}>
// // //         <div className="form-group">
// // //           <label htmlFor="username">Username:</label>
// // //           <input
// // //             type="text"
// // //             className={`form-control ${formData.username !== '' ? 'text-success' : ''}`}
// // //             id="username"
// // //             name="username"
// // //             value={formData.username}
// // //             onChange={handleInputChange}
// // //           />
// // //           <small className="text-danger">{errors.username}</small>
// // //         </div>
// // //         <div className="form-group">
// // //           <label htmlFor="password">Password:</label>
// // //           <input
// // //             type="password"
// // //             className="form-control"
// // //             id="password"
// // //             name="password"
// // //             value={formData.password}
// // //             onChange={handleInputChange}
// // //           />
// // //           <small className="text-danger">{errors.password}</small>
// // //         </div>
// // //         <button type="submit" className="btn btn-primary">
// // //           Login
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default LoginForm;
// // import React, { useState } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // const FacebookForm = () => {
// //   const [userFirstname, setuserFirstname] = useState("");
// //   const [Firstname, setFirstname] = useState("Enter Your Name");
// //   const [showuserfirstnameerror, setshowuserfirstnameerror] = useState(false);
// //   const [userSurname, setuserSurname] = useState("");
// //   const [Surname, setSurname] = useState("Enter Your Surname");
// //   const [showuserSurnameerror, setshowSurnameerror] = useState(false);
// //   const [userMobilenumber, setuserMobilenumber] = useState("");
// //   const [Mobilenumber, setMobilenumber] = useState("Enter Your Mobile number or Email Address");
// //   const [showusermobilenumbererror, setshowusermobilenumbererror] = useState(false);
// //   const [userpassword, setuserpassword] = useState("");
// //   const [showuserPassworderror, setshowuserPassworderror] = useState(false);
// //   const [Password, setPassword] = useState("Enter Your Password");

// //   const userFirstnamehandler = (e) => {
// //     setuserFirstname(e.target.value);
// //     if (userFirstname !== "") {
// //       setFirstname("Looks Good");
// //     }
// //   };

// //   const userSurnamehandler = (e) => {
// //     setuserSurname(e.target.value);
// //     if (userSurname !== "") {
// //       setSurname("Looks Good");
// //     }
// //   };

// //   const userMobilenumberhandler = (e) => {
// //     setuserMobilenumber(e.target.value);
// //     if (userMobilenumber !== "") {
// //       setMobilenumber("Looks Good");
// //     }
// //   };

// //   const userPasswordhandler = (e) => {
// //     setuserpassword(e.target.value);
// //     if (userpassword !== "") {
// //       setPassword("Looks Good");
// //     }
// //   };

// //   const usersubmithandlar = (e) => {
// //     e.preventDefault();

// //     if (userFirstname === "") {
// //       setshowuserfirstnameerror(true);
// //     }

// //     if (userSurname === "") {
// //       setshowSurnameerror(true);
// //     }

// //     if (userMobilenumber === "") {
// //       setshowusermobilenumbererror(true);
// //     }

// //     if (userpassword === "") {
// //       setshowuserPassworderror(true);
// //     }
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <h1 className="text-center font-weight-bold">Facebook</h1>
// //       <section className="container">
// //         <header className="text-center">Create a new account</header>
// //         <p className="text-center">It's quick and easy</p>
// //         <form onSubmit={usersubmithandlar}>
// //           <div className="row">
           
// //             <div class="input-box">
         
// //          <input value={userpassword} onChange={userPasswordhandler} type="password" placeholder="New password"  />
// //          {showuserPassworderror && <p class={`${Password ==="Looks Good" ? "text-success":"text-danger"}`}> {Password} </p>}
// //        </div>
  
            
// //           </div>
          
          
// //           <div className="text-center">
// //             <button type="submit" className="btn btn-primary px-5">
// //               Sign up
// //             </button>
// //           </div>
// //         </form>
// //       </section>
// //     </div>
// //   );
// // };

// // export default FacebookForm;
// import React, { useState } from 'react';

// const ModalForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//     // You can add further logic like sending data to the server
//     // Reset the form data if needed
//     setFormData({ username: '', email: '', password: '' });
//   };

//   return (
//     <div className="container">
//       <button
//         type="button"
//         className="btn btn-primary"
//         data-toggle="modal"
//         data-target="#exampleModal"
//       >
//         Open Form
//       </button>

//       <div
//         className="modal fade"
//         id="exampleModal"
//         tabIndex="-1"
//         role="dialog"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 Modal Form
//               </h5>
//               <button
//                 type="button"
//                 className="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <form onSubmit={handleSubmit}>
//               <div className="modal-body">
//                 <div className="form-group">
//                   <label htmlFor="username">Username:</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="username"
//                     name="username"
//                     value={formData.username}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="email">Email:</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="password">Password:</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   data-dismiss="modal"
//                 >
                  
//                   Close
//                 </button>
//                 <button type="submit" className="btn btn-primary">
//                   Save changes
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalForm;

