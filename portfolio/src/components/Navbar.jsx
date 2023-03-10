import React from 'react'
import logo from "../assets/logo-react.png";
import Search from "../assets/search-icon.svg";

const Navbar = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex w-3/4   justify-between md:p-2   '>
                <div className='flex items-center gap-2.5'>
                    <img  src={logo} className="h-12" />
                    <ul className=' none md:flex gap-5 list-none  '>
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>About</li>
                        <li className='cursor-pointer'>Work</li>
                        <li className='cursor-pointer'>Contact</li>
                    </ul>
                </div>
                <div className='flex items-center gap-5'>
                    <img  src={Search} className=" w-5 cursor-pointer "/>
                    <button className='w-25 p-2.5 bg-[#00337C] text-white rounded cursor-pointer border-none'>Hire Now</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;



// import React from "react";
// import styled from "styled-components";

// const Section = styled.div`
//   display: flex;
//   justify-content: center;
//   @media only screen and (max-width: 768px) {
//     width: 100%;
//   }
// `;

// const Container = styled.div`
//   width: 1400px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 0px;
//   @media only screen and (max-width: 768px) {
//     width: 100%;
//     padding: 10px;
//   }
// `;

// const Links = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 50px;
// `;

// const Logo = styled.img`
//   height: 50px;
// `;

// const List = styled.ul`
//   display: flex;
//   gap: 20px;
//   list-style: none;
//   @media only screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// const ListItem = styled.li`
//   cursor: pointer;
// `;

// const Icons = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
// `;

// const Icon = styled.img`
//   width: 20px;
//   cursor: pointer;
// `;

// const Button = styled.button`
//   width: 100px;
//   padding: 10px;
//   background-color: #da4ea2;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const Navbar = () => {
//   return (
//     <Section>
//       <Container>
//         <Links>
//           <Logo src="./img/logo.png" />
//           <List>
//             <ListItem>Home</ListItem>
//             <ListItem>Studio</ListItem>
//             <ListItem>Works</ListItem>
//             <ListItem>Contact</ListItem>
//           </List>
//         </Links>
//         <Icons>
//           {/* Changed the image due to copyright problems */}
//           <Icon src="./img/search.png" />
//           <Button>Hire Now</Button>
//         </Icons>
//       </Container>
//     </Section>
//   );
// };

// export default Navbar;