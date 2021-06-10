import {styled} from 'frontity'

const NavContainer = styled.nav`
  border-radius: 40px;
  background: #fff;
  max-width: 1290px;
  margin: 0 auto;
  padding-left: 35px;
  padding-right: 35px;
  margin-top: 2.5em;
  display: flex;
  align-items: center;
  height: 75px;
  transition: 0.2s;
  
  & ul {
    align-items: center;
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    white-space: nowrap;
    list-style-type: none;
    padding-left: 20px;
    flex-wrap: nowrap;
    height: 70px;
    justify-items: center;
    padding: 0;
    margin: 0;
    padding-left: 95px;
  }

  & li {
    transition: 0.1s;
    cursor: pointer;
    &:hover {
      color: ${config.collors.primary};
    }
  }
`;

const Container = styled.div`

`

const Footer = () => {
    return (
        <Container>
            <NavContainer>
              <LogoContainer>
                <img src={Logo} alt="Логотип"></img>
              </LogoContainer>
              <ul>
                {categories.map((category) => (
                  <li
                    key={category.id}
                    style={{
                      display: "inline-block",
                      margin: "20px",
                    }}
                  >
                    <Link
                      activeClass="activeCategoryLink"
                      className={category.id}
                      to={category.id.toString()}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-50}
                      onSetActive={() => this.scrollToCategory(category.id)}
                    >
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </NavContainer>
        </Container>
    )    
}