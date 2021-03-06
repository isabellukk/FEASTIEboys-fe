import Input from './Input';
import styled from 'styled-components';

const Content = styled.body`
  background-image: url('https://images.pexels.com/photos/6692128/pexels-photo-6692128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  font-family: 'Open Sans Condensed', sans-serif;
`;

function Pantry() {
  return (
    <div className="pantryContent">
      <Content>
        <div className="pant">
          <div className="pantContainer">
            <h1 className="pant">What's In Your Pantry?</h1>
            <h4 className="inputInstructions">
              Enter as many ingredients as you want! We'll take care of the rest
              :)
            </h4>
            <Input />
          </div>
        </div>
      </Content>
    </div>
  );
}

export default Pantry;
