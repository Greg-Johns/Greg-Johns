import MainNav from "./MainNav";
import styled from "@emotion/styled";


const GJHeader = (props) => {
  const Header = styled.header`
    &:before {
        content: '${props.premsg}';
      }
      &:after {
        content: '${props.postmsg}';
      }
    }
  `;

  return (<>
    <Header>GREG JOHNS</Header>
    <MainNav />
  </>
)
};

export default GJHeader;
