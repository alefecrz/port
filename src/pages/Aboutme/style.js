import styled from 'styled-components';

export const Conteiner = styled.div`
  width: 100%;
  padding: 0rem 4rem 4rem 4rem ;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #F9F9F9;

  @media only screen and (max-width: 768px), only screen and (max-height: 520px){
      display: flex;
      padding: 0rem 2rem 2rem 2rem ;
      flex-direction: column;

      * {
        justify-self: center;
        align-self: center;
      }
  }
`;

export const Text = styled.div`
  margin-top: 5rem;

  h1 {
    font-size: 32px;
    color: #0D1C26;
  }

  p {
    font-size: 16px;
    margin-top: 2rem;
    color: #2C4459;
  }

  @media only screen and (max-width: 768px), only screen and (max-height: 520px){
    h1 {
        text-align: center;
    }
  }
`;

export const Image = styled.div`
  justify-self: center;
  align-self: center;

  img {
    filter: grayscale(100%);
    width: 25rem;
  }

  @media only screen and (max-width: 768px), only screen and (max-height: 520px){
    display: none;
  }
`;


// .skills {
//   width: 100%;
//   grid-column-start: 1;
//   grid-column-end: 3;
//   background-color: #0000;
// }

// .skills ul {
//   margin: 0 auto;
//   display: flex;
//   justify-content: space-around;


// }

// .skills ul li {
//   list-style: none;
//   position: relative;
//   width: 15rem;
//   border-radius: 10px;
//   box-shadow: 1px 1px 4px 1px;
//   position: relative;
// }

// .skills ul li div:last-child{
//  margin-bottom: 3rem;
// }

// @keyframes rotation {
//   from {
//       transform: rotate(0deg);
//   }
//   to {
//       transform: rotate(359deg);
//   }
// }

// @-webkit-keyframes rotation {
//   from {
//       -webkit-transform: rotate(0deg);
//   }
//   to {
//       -webkit-transform: rotate(359deg);
//   }
// }

// .skills ul li .icon-content .bg{
//   position: relative;
//   animation: rotation 3s infinite linear;;
//   -webkit-animation: rotation 3s infinite linear;;
// }


// .skills ul li .icon-content .icon{
//   position: absolute;
//   top: 2rem;
//   right: 2rem;
//   width: 35.2px;
// }

// .skills ul li .icon-content {
//   position: absolute;
//   top: -3rem;
//   right: 4rem;
// }



// .skills ul li h2{
//   margin-top: 3rem;
//   text-align: center;
//   font-size: 20px ;
//   color: #2C4459;
//   margin-bottom: 1rem;
// }

// .item {
//   margin: 0.5rem;
//   display: flex;
//   justify-content: flex-start;
//   margin-left: 2rem;
// }

// .item img {
//   margin-right: 2rem;
// }

// .item h3 {
//   font-size: 16px;
//   color: #2C4459;
//   font-weight: 100;
// }


// @media only screen and (max-width: 768px), only screen and (max-height: 520px){
//   .aboutme {
//       display: flex;
//       flex-direction: column;
//   }
//   .text h1 {
//       text-align: center;
//   }

//   .skills ul{
//       flex-direction: column;

//   }

//   .skills ul li{
//       margin-top: 5rem ;
//       list-style: none;
//       width: 100%;
//       border-radius: 10px;
//       box-shadow: 1px 1px 4px 1px;
//       position: relative;
//   }

//   .aboutme *{
//       justify-self: center;
//       align-self: center;
//   }

//   .skills ul li .icon-content .icon{
//       top: 3rem;
//       right: 3.1rem;
//   }

//   .skills ul li .icon-content {
//       position: absolute;
//       top: -3rem;
//       right: 0rem;
//   }

//   .skills ul li h2{
//       margin-top: 5rem;
//       text-align: center;
//       font-size: 20px ;
//       color: #2C4459;
//       margin-bottom: 1rem;
//   }
// }
