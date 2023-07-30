import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Button = styled.button`
  display: block;
  max-width: 300px;
  width: 100%;
  background: #0F1B2D;
  padding: 13px 35px;
  border: 3px solid #0F1B2D;
  border-radius: 65px;
  color: #FFF;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  cursor: poiner;

  ${breakpoint('desktop')`
    max-width: 350px;
    padding: 15px 41px;
  `}
`;