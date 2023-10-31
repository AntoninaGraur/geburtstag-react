import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationLink = styled(NavLink)`
  color: #040925;
  outline: transparent;
  background-color: rgb(243 237 4);
  padding: 22px 20px;
  border-radius: 25px;
  font-size: 55px;
  font-weight: 700;
  width: 400px;
  border: transparent;
  transition: all 1s ease-in-out;
  text-shadow: 4px 4px 4px #e91e63a3;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  &:hover {
    transform: scale(1.5);
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  opacity: unset;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 254px;
`;

export const Image = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
`;
export const Image2 = styled.img`
  width: 410px;
  height: 265px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
`;

export const Image3 = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
`;



export const ImageList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const SecondNavLink = styled(NavLink)`
  color: #040925;
  outline: transparent;
  background-color: rgb(243 237 4);
  padding: 22px 20px;
  border-radius: 25px;
  font-size: 55px;
  font-weight: 700;
  width: 400px;
  border: transparent;
  transition: all 1s ease-in-out;
  text-shadow: 4px 4px 4px #e91e63a3;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 15px; 
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  &:hover {
    transform: scale(1.3);
  }
`;