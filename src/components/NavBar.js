import {
  MDBCollapse,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarToggler
} from 'mdb-react-ui-kit';
// import React, { useEffect, useState } from 'react';
// // import '../App.css';
// import './NavBar.css';
// ;

// export default function App() {
//   const [openNavRight, setOpenNavRight] = useState(false);
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolling(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <MDBNavbar expand='lg' light={!scrolling} bgColor={scrolling ? 'dark' : 'transparent'} fixed='top'>
//       <MDBContainer fluid>
//         <MDBNavbarBrand active aria-current='page' href='#' style={{ color: scrolling ? 'white' : 'white' }}>
//           {/* <img src={logo} alt="Logo" height="30" /> */}
//           <i class="fa-solid fa-paw fa-0.5x" ></i>
//            &nbsp;
//           Tail Talk
//         </MDBNavbarBrand>
//         <MDBNavbarToggler
//           aria-controls='navbarSupportedContent'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//           onClick={() => setOpenNavRight(!openNavRight)}
//         >
//           <MDBIcon icon='bars' fas />
//         </MDBNavbarToggler>

//         <MDBCollapse  navbar open={openNavRight}>
//         <MDBNavbarNav  className='mb-2 mb-lg-0'>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='/tail-talk' active aria-current='page'  style={{ color: 'white' }}>
//                 Home
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='/tail-talk/AI' active aria-current='page'  style={{ color: 'white' }}>
//                 Try our AI
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='/tail-talk/data' style={{ color: scrolling ? 'white' : 'white' }}>
//                 Data
//               </MDBNavbarLink>
//             </MDBNavbarItem>

            // <MDBNavbarItem>
            //   <MDBDropdown>
            //     <MDBDropdownToggle tag='a' style={{ color: 'white' }} className='nav-link' role='button' >
            //       Approach
            //     </MDBDropdownToggle>
            //     <MDBDropdownMenu>
            //       <MDBDropdownItem link href='/tail-talk/LLM'>LLMs</MDBDropdownItem>
            //       <MDBDropdownItem link href='/tail-talk/RAG'>RAG</MDBDropdownItem>
            //     </MDBDropdownMenu>
            //   </MDBDropdown>
            // </MDBNavbarItem>

            // <MDBNavbarItem>
            //   <MDBNavbarLink href='/tail-talk/Analysis' style={{ color: 'white' }}>
            //     Analysis
            //   </MDBNavbarLink>
            // </MDBNavbarItem>

            // <MDBNavbarItem>
            //   <MDBNavbarLink href='/tail-talk/Team' style={{ color: 'white' }}>
            //     Team
            //   </MDBNavbarLink>
            // </MDBNavbarItem>
//           </MDBNavbarNav>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }
// import {
//   MDBCollapse,
//   MDBContainer,
//   MDBIcon,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBNavbarNav,
//   MDBNavbarToggler
// } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import './NavBar.css';

export default function App() {
  const [openNavRight, setOpenNavRight] = useState(false);
  const [scrolling, setScrolling] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <MDBNavbar expand='lg' light={!scrolling} bgColor={scrolling ? 'dark' : 'transparent'} fixed='top'>
      <MDBContainer fluid>
        <MDBNavbarBrand active aria-current='page' href='/tail-talk' style={{ color: scrolling ? 'white' : 'white' }} className='navbar-brand'>
          <i class="fa-solid fa-paw fa-0.5x"></i>
          &nbsp;
          <b><i>Tail Talk</i></b>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavRight(!openNavRight)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openNavRight} className='justify-content-end'>
          <MDBNavbarNav className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink href='/tail-talk' active aria-current='page' style={{ color: scrolling ? 'white' : 'white' }} >
              {/* <MDBNavbarLink href='/tail-talk' active={activeLink === 'Home'} onClick={() => handleLinkClick('Home')} className={activeLink === 'Home' ? 'navbar-link-active' : 'white'}> */}

                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            {/* Add other navbar items here */}
            <MDBNavbarItem>
              <MDBNavbarLink href='/tail-talk/#/AI'  aria-current='page' style={{ color: scrolling ? 'white' : 'white' } }>
                Try our AI
             </MDBNavbarLink>
            </MDBNavbarItem>
           <MDBNavbarItem>
              <MDBNavbarLink href='/tail-talk/#/data' style={{ color: scrolling ? 'white' : 'white' }}>
                Data
              </MDBNavbarLink>
             </MDBNavbarItem>

             <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' style={{ color: 'white' }} className='nav-link' role='button' >
                  Approach
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href='/tail-talk/#/LLM'>LLMs</MDBDropdownItem>
                  <MDBDropdownItem link href='/tail-talk/#/RAG'>RAG</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='/tail-talk/#/Analysis' style={{ color: 'white' }}>
                Analysis
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='/tail-talk/#/Team' style={{ color: 'white' }}>
                Team
              </MDBNavbarLink>
            </MDBNavbarItem>
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}