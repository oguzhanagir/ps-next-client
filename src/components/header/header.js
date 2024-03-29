
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import Sticky from 'react-stickynode';
import Logo from 'components/logo';
import { DrawerProvider } from 'contexts/drawer/drawer-provider';
import Link from 'next/link';


export default function Header() {


  return (
    <DrawerProvider>
      <Box sx={styles.headerWrapper}>
        <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={100}>
          <Box as="header" sx={styles.header}>
            <Container>
              <Box sx={styles.headerInner}>
                <Logo sx={styles.logo} />
                <Box as="nav" sx={styles.navbar} className="navbar">

                  <Box as="ul" sx={styles.navList}>

                    <li className='nav-item'></li>
                    <li ><Link href={"/"} className="nav-item"><a className="nav-item">Ana Sayfa</a></Link></li>
                    <li ><Link href={"/product"}><a className="nav-item">Ürünler</a></Link></li>
                    <li><Link href={"/carrier"}><a className="nav-item">Yolcular</a></Link></li>
                    <li ><Link href={"/aboutUs"}><a className="nav-item">Hakkımızda</a></Link></li>
                    <li ><Link href={"/contact"}><a className="nav-item">İletişim</a></Link></li>

                    <li className='nav-item'></li>

                  </Box>

                  <Button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/login';
                  }}
                    variant="text"
                    sx={styles.getStartedDesktop}
                  >Login
                  </Button>

                  <Button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/register';
                  }}
                    variant="text"
                    sx={styles.getStartedDesktop}
                  >Hadi Başlayalım
                  </Button>

                  {/* <a href='/login' style={{ textDecoration: 'none', color: '#00CCFF' }} sx={styles.getStartedDesktop} >

                  </a> */}

                  {/* <a href='/register' style={{ textDecoration: 'none', color: '#00CCFF' }} sx={styles.getStartedDesktop} >
                    Hadi Başlayalım
                  </a> */}


                </Box>

                <Button variant="text" sx={styles.getStartedMobile}>
                  <a href='/register' style={{ textDecoration: 'none', color: '#00CCFF' }}>Get Started</a>
                </Button>
                {/* <NavbarDrawer /> */}
              </Box>
            </Container>
          </Box>
        </Sticky>
      </Box>
    </DrawerProvider>
  );
}

const styles = {
  headerWrapper: {
    backgroundColor: 'transparent',
    '.is-sticky': {
      header: {
        backgroundColor: 'white',
        boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
        paddingTop: '15px',
        paddingBottom: '15px',
      },
    },
  },
  header: {
    position: 'fixed',
    left: 0,
    right: 0,
    py: 4,
    transition: 'all 0.3s ease-in-out 0s',
    '&.is-mobile-menu': {
      backgroundColor: 'white',
    },
  },
  headerInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    mr: [null, null, null, null, 6, 12],
  },
  navbar: {
    display: ['none', null, null, null, 'flex'],
    alignItems: 'center',
    flexGrow: 1,
    // justifyContent: 'center',
  },
  navList: {

    display: ['flex'],
    listStyle: 'none',
    // marginLeft: 'auto',
    flexGrow: 1,
    p: 0,
    'li:last-child': {
      ml: ['auto'],

    },
    '.nav-item': {
      cursor: 'pointer',
      fontWeight: 400,
      padding: 0,
      margin: [0, 0, 0, 0, '0 20px'],
      textDecoration: "none",
      color: "black"
    },
    '.active': {
      color: 'primary',
    },
  },
  getStartedDesktop: {
    color: 'primary',
    display: ['none', 'none', 'none', 'none', 'flex'],

  },
  getStartedMobile: {
    color: 'primary',
    fontSize: [1],
    minHeight: 30,
    m: ['0 15px 0 auto'],
    padding: '0 11px',
    display: ['flex', null, null, null, 'none'],
  },
  closeButton: {
    height: '32px',
    padding: '4px',
    minHeight: 'auto',
    width: '32px',
    ml: '3px',
    path: {
      stroke: 'text',
    },
  },
};
