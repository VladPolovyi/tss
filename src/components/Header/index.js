import React, { useState } from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import { RemoveScroll } from "react-remove-scroll"

const ContainerWrapper = styled(Container)``
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.25) 100%);
  z-index: 30;
`

const Gimg = styled(GatsbyImage)`
  max-width: 110px;
  margin: 5px;
  display: flex;
  z-index: 11;

  @media (max-width: 991px) {
    max-width: 80px;
  }
`
const Linkn = styled(Link)`
  text-decoration: none;
  color: white;
  transition: all 0.2s;
  display: block;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 24px;
  padding-left: 30px;
  padding-right: 30px;
  /* or 185% */

  text-transform: uppercase;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 6px;
  }

  &:hover {
    color: #823b3b;

    svg {
      path {
        transition: all 0.2s;

        fill: #823b3b;
      }
    }
  }
`

const Linka = styled.a`
  text-decoration: none;
  color: white;
  transition: all 0.2s;
  display: block;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 24px;
  padding-left: 30px;
  padding-right: 30px;
  /* or 185% */

  text-transform: uppercase;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 6px;
  }

  &:hover {
    color: #823b3b;

    svg {
      path {
        transition: all 0.2s;

        fill: #823b3b;
      }
    }
  }
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ColInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Coll = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 991px) {
    display: none;
  }
`

const Colr = styled(Col)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 991px) {
    display: none;
  }
`
const Twitch = styled.div`
  display: none;

  /* display: flex;
  justify-content: flex-start;
  align-items: center; */

  position: absolute;
  right: 0;
  max-width: fit-content;
  top: 35px;
  right: 30px;
  padding: 0;
  svg {
    height: 22px;
    width: 22px;
    margin-right: 0;
  }

  a {
    padding: 0;
  }

  @media (max-width: 991px) {
    display: block;
  }
`

const Hamburger = styled.div`
  button {
    position: absolute;
    left: 30px;
    top: 35px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 11;

    &:focus {
      outline: none;
    }

    div {
      width: 22px;
      height: 1.5px;
      background: #ffffff;
      border-radius: 50px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      &:first-child {
        transform: rotate(0);
      }

      &:nth-child(2) {
        opacity: 1;
        transform: translateX(0);
      }

      &:nth-child(3) {
        transform: rotate(0);
      }
    }

    &.open {
      div {
        &:first-child {
          transform: rotate(41.8deg);
        }

        &:nth-child(2) {
          opacity: 0;
          transform: translateX(10px);
        }

        &:nth-child(3) {
          transform: rotate(-41.8deg);
        }
      }
    }

    @media (min-width: 768px) {
      display: none;
    }
  }
`

const MenuWrapperMobile = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: flex-start !important;
  background: #2c2f33;
  height: 100vh !important;
  max-width: 100%;
  width: 100vw;
  text-align: left;
  transform: translateX(-100vw) !important;
  // padding: 2rem;
  position: absolute;
  top: 0 !important;
  left: 0 !important;
  bottom: 0 !important;
  transition: transform 0.3s ease-in-out !important;
  z-index: 10;

  nav {
    height: 100%;
    display: block !important;
  }

  ul {
    // padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 180px;
    align-items: center;
    height: 100%;
    list-style: none;
    margin: 0;

    li {
      padding-bottom: 25px;
      color: #ffffff;
      font-size: 24px;

      a {
        color: #ffffff;

        line-height: 1;
      }
    }
  }

  &.open {
    transform: translateX(0) !important;
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, placeholder: BLURRED)
        }
      }
    }
  `)

  const image = getImage(data.logo)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper>
      <ContainerWrapper>
        <Row>
          <Hamburger>
            <button
              aria-label="Menu Toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`${isOpen ? "open" : ""}`}
            >
              <div></div>
              <div></div>
              <div></div>
            </button>
          </Hamburger>

          <RemoveScroll enabled={isOpen}>
            <MenuWrapperMobile className={`${isOpen ? "open" : "closed"}`}>
              <nav>
                <ul>
                  <li>
                    <LinkWrapper>
                      <Linkn to="/">HOME</Linkn>
                    </LinkWrapper>
                  </li>
                  <li>
                    <LinkWrapper>
                      <Linkn to="/about/">ABOUT US</Linkn>
                    </LinkWrapper>
                  </li>
                  <li>
                    <LinkWrapper>
                      <Linkn to="/official-tmog/">OFFICIAL TMOG</Linkn>
                    </LinkWrapper>
                  </li>
                  <li>
                    <LinkWrapper>
                      <Linkn to="/roster/">ABOMINATIONS</Linkn>
                    </LinkWrapper>
                  </li>

                  <li>
                    <LinkWrapper>
                      <Linka target="_blank" href="https://discord.gg/k6uCZ26">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="15"
                          viewBox="0 0 19 15"
                          fill="none"
                        >
                          <g clipPath="url(#clip0)">
                            <path
                              d="M16.0843 1.33577C14.8733 0.769483 13.5747 0.352265 12.2169 0.113307C12.1922 0.108695 12.1675 0.12022 12.1548 0.143271C11.9877 0.446002 11.8027 0.840938 11.6732 1.15136C10.2128 0.928538 8.75994 0.928538 7.3295 1.15136C7.19993 0.834038 7.00822 0.446002 6.84046 0.143271C6.82772 0.12099 6.80302 0.109464 6.77829 0.113307C5.42126 0.351502 4.12265 0.76872 2.91091 1.33577C2.90042 1.34038 2.89143 1.34807 2.88546 1.35806C0.422268 5.10844 -0.252502 8.76664 0.0785176 12.3795C0.0800154 12.3972 0.0897511 12.4141 0.103232 12.4248C1.72837 13.6411 3.3026 14.3795 4.8476 14.869C4.87232 14.8767 4.89852 14.8674 4.91426 14.8467C5.27973 14.338 5.60551 13.8017 5.88484 13.2377C5.90132 13.2047 5.88558 13.1655 5.85189 13.1524C5.33515 12.9527 4.8431 12.7091 4.36979 12.4325C4.33235 12.4102 4.32935 12.3556 4.36379 12.3295C4.46339 12.2535 4.56302 12.1743 4.65813 12.0944C4.67534 12.0798 4.69932 12.0767 4.71955 12.0859C7.82902 13.5328 11.1954 13.5328 14.2682 12.0859C14.2884 12.076 14.3124 12.079 14.3303 12.0936C14.4255 12.1735 14.5251 12.2535 14.6254 12.3295C14.6599 12.3556 14.6576 12.4102 14.6202 12.4325C14.1469 12.7145 13.6548 12.9527 13.1373 13.1517C13.1036 13.1647 13.0886 13.2047 13.1051 13.2377C13.3905 13.8009 13.7162 14.3373 14.075 14.8459C14.0899 14.8674 14.1169 14.8767 14.1416 14.869C15.6941 14.3795 17.2683 13.6411 18.8935 12.4248C18.9077 12.4141 18.9167 12.3979 18.9182 12.3802C19.3144 8.2034 18.2546 4.5752 16.109 1.35882C16.1038 1.34807 16.0948 1.34038 16.0843 1.33577ZM6.34918 10.1796C5.41302 10.1796 4.64165 9.30372 4.64165 8.228C4.64165 7.15228 5.39806 6.27636 6.34918 6.27636C7.30777 6.27636 8.07168 7.15997 8.0567 8.228C8.0567 9.30372 7.30028 10.1796 6.34918 10.1796ZM12.6625 10.1796C11.7264 10.1796 10.955 9.30372 10.955 8.228C10.955 7.15228 11.7114 6.27636 12.6625 6.27636C13.6211 6.27636 14.385 7.15997 14.37 8.228C14.37 9.30372 13.6211 10.1796 12.6625 10.1796Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0">
                              <rect width="19" height="15" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        DISCORD
                      </Linka>
                    </LinkWrapper>
                  </li>
                  <li>
                    {" "}
                    <LinkWrapper>
                      <Linka
                        target="_blank"
                        href="https://www.youtube.com/c/TheScarletScourge"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="14"
                          viewBox="0 0 19 14"
                          fill="none"
                        >
                          <path
                            d="M18.5716 2.08091C18.3343 1.308 17.7409 0.654001 16.9102 0.416183C15.4269 -1.06313e-07 9.49347 0 9.49347 0C9.49347 0 3.56005 -1.06313e-07 2.0767 0.416183C1.24602 0.654001 0.652676 1.24855 0.415339 2.08091C0.118668 3.56728 0 5.1131 0 6.65892C0 8.20474 0.118668 9.75057 0.415339 11.2369C0.652676 12.0098 1.24602 12.6638 2.0767 12.9017C3.56005 13.3178 9.49347 13.3178 9.49347 13.3178C9.49347 13.3178 15.4269 13.3178 16.9102 12.9017C17.7409 12.6638 18.3343 12.0693 18.5716 11.2369C18.8683 9.75057 18.9869 8.20474 18.9869 6.65892C18.9869 5.1131 18.8683 3.56728 18.5716 2.08091ZM7.59478 9.51275V3.8051L12.5195 6.65892L7.59478 9.51275Z"
                            fill="white"
                          />
                        </svg>
                        YOUTUBE
                      </Linka>
                    </LinkWrapper>
                  </li>
                </ul>
              </nav>
            </MenuWrapperMobile>
          </RemoveScroll>

          <Coll lg={5}>
            <ColInner>
              <LinkWrapper>
                <Linkn to="/about/">ABOUT</Linkn>
                <Linkn to="/roster/">ABOMINATIONS</Linkn>
                <Linkn to="/official-tmog/">OFFICIAL TMOG</Linkn>
              </LinkWrapper>
            </ColInner>
          </Coll>
          <Col lg={2}>
            <ColInner>
              <Linkn to="/">
                <Gimg image={image} alt="Logo" />
              </Linkn>
            </ColInner>
          </Col>
          <Twitch>
            <LinkWrapper>
              <Linka
                href="https://www.twitch.tv/tss_milan"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.70131 0L0.42514 3.26088V16.5894H4.96218V19H7.51452L9.92514 16.5894H13.6119L18.5749 11.6264V0H1.70131V0ZM16.8728 10.7762L14.0371 13.6119H9.50002L7.08939 16.0225V13.6119H3.26089V1.70129H16.8728V10.7762V10.7762ZM14.0371 4.96296V9.92038H12.3358V4.96296H14.0371V4.96296ZM9.50002 4.96296V9.92038H7.79872V4.96296H9.50002V4.96296Z"
                    fill="white"
                  />
                </svg>
              </Linka>
            </LinkWrapper>
          </Twitch>
          <Colr lg={5}>
            <ColInner>
              <LinkWrapper>
                <Linka
                  target="_blank"
                  href="https://discord.gg/k6uCZ26"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="15"
                    viewBox="0 0 19 15"
                    fill="none"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M16.0843 1.33577C14.8733 0.769483 13.5747 0.352265 12.2169 0.113307C12.1922 0.108695 12.1675 0.12022 12.1548 0.143271C11.9877 0.446002 11.8027 0.840938 11.6732 1.15136C10.2128 0.928538 8.75994 0.928538 7.3295 1.15136C7.19993 0.834038 7.00822 0.446002 6.84046 0.143271C6.82772 0.12099 6.80302 0.109464 6.77829 0.113307C5.42126 0.351502 4.12265 0.76872 2.91091 1.33577C2.90042 1.34038 2.89143 1.34807 2.88546 1.35806C0.422268 5.10844 -0.252502 8.76664 0.0785176 12.3795C0.0800154 12.3972 0.0897511 12.4141 0.103232 12.4248C1.72837 13.6411 3.3026 14.3795 4.8476 14.869C4.87232 14.8767 4.89852 14.8674 4.91426 14.8467C5.27973 14.338 5.60551 13.8017 5.88484 13.2377C5.90132 13.2047 5.88558 13.1655 5.85189 13.1524C5.33515 12.9527 4.8431 12.7091 4.36979 12.4325C4.33235 12.4102 4.32935 12.3556 4.36379 12.3295C4.46339 12.2535 4.56302 12.1743 4.65813 12.0944C4.67534 12.0798 4.69932 12.0767 4.71955 12.0859C7.82902 13.5328 11.1954 13.5328 14.2682 12.0859C14.2884 12.076 14.3124 12.079 14.3303 12.0936C14.4255 12.1735 14.5251 12.2535 14.6254 12.3295C14.6599 12.3556 14.6576 12.4102 14.6202 12.4325C14.1469 12.7145 13.6548 12.9527 13.1373 13.1517C13.1036 13.1647 13.0886 13.2047 13.1051 13.2377C13.3905 13.8009 13.7162 14.3373 14.075 14.8459C14.0899 14.8674 14.1169 14.8767 14.1416 14.869C15.6941 14.3795 17.2683 13.6411 18.8935 12.4248C18.9077 12.4141 18.9167 12.3979 18.9182 12.3802C19.3144 8.2034 18.2546 4.5752 16.109 1.35882C16.1038 1.34807 16.0948 1.34038 16.0843 1.33577ZM6.34918 10.1796C5.41302 10.1796 4.64165 9.30372 4.64165 8.228C4.64165 7.15228 5.39806 6.27636 6.34918 6.27636C7.30777 6.27636 8.07168 7.15997 8.0567 8.228C8.0567 9.30372 7.30028 10.1796 6.34918 10.1796ZM12.6625 10.1796C11.7264 10.1796 10.955 9.30372 10.955 8.228C10.955 7.15228 11.7114 6.27636 12.6625 6.27636C13.6211 6.27636 14.385 7.15997 14.37 8.228C14.37 9.30372 13.6211 10.1796 12.6625 10.1796Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="19" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  DISCORD
                </Linka>
              </LinkWrapper>
              <LinkWrapper>
                <Linka
                  target="_blank"
                  href="https://www.youtube.com/c/TheScarletScourge"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="14"
                    viewBox="0 0 19 14"
                    fill="none"
                  >
                    <path
                      d="M18.5716 2.08091C18.3343 1.308 17.7409 0.654001 16.9102 0.416183C15.4269 -1.06313e-07 9.49347 0 9.49347 0C9.49347 0 3.56005 -1.06313e-07 2.0767 0.416183C1.24602 0.654001 0.652676 1.24855 0.415339 2.08091C0.118668 3.56728 0 5.1131 0 6.65892C0 8.20474 0.118668 9.75057 0.415339 11.2369C0.652676 12.0098 1.24602 12.6638 2.0767 12.9017C3.56005 13.3178 9.49347 13.3178 9.49347 13.3178C9.49347 13.3178 15.4269 13.3178 16.9102 12.9017C17.7409 12.6638 18.3343 12.0693 18.5716 11.2369C18.8683 9.75057 18.9869 8.20474 18.9869 6.65892C18.9869 5.1131 18.8683 3.56728 18.5716 2.08091ZM7.59478 9.51275V3.8051L12.5195 6.65892L7.59478 9.51275Z"
                      fill="white"
                    />
                  </svg>
                  YOUTUBE
                </Linka>
              </LinkWrapper>
              <LinkWrapper>
                <Linka
                  href="https://www.twitch.tv/tss_milan"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitch"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.70131 0L0.42514 3.26088V16.5894H4.96218V19H7.51452L9.92514 16.5894H13.6119L18.5749 11.6264V0H1.70131V0ZM16.8728 10.7762L14.0371 13.6119H9.50002L7.08939 16.0225V13.6119H3.26089V1.70129H16.8728V10.7762V10.7762ZM14.0371 4.96296V9.92038H12.3358V4.96296H14.0371V4.96296ZM9.50002 4.96296V9.92038H7.79872V4.96296H9.50002V4.96296Z"
                      fill="white"
                    />
                  </svg>
                  TWITCH
                </Linka>
              </LinkWrapper>
            </ColInner>
          </Colr>
        </Row>
      </ContainerWrapper>
    </Wrapper>
  )
}

export default Header
