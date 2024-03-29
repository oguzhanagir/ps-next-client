import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Layout from "components/layout"
import { Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';


export default function CarrierDetail(){
    return(
        <ThemeProvider theme={theme}>
            <Layout>
            <Container>
            <SectionHeading
                    sx={styles.heading}
                    title="Taşıyıcı Detay"
                />
            </Container>
            </Layout>
        </ThemeProvider>
    )
}



const styles = {
    heading: {
        mt : [140],
        textAlign : 'center',
        p: {
            maxWidth: 500,
            m: '20px auto 0',
        },
    },
}