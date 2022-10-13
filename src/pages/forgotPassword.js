import SectionHeading from 'components/section-heading';
import { Container } from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Layout from "components/layout"
import ForgotPasswordSec from 'sections/forgotPasswordSec';

export default function ForgotPassword() {
    return(
        <ThemeProvider theme={theme}>
            <Layout>
                <Container>
                <SectionHeading
                        sx={styles.heading}
                        title="Napim"
                    />
                <ForgotPasswordSec/>
                   
                </Container>
            </Layout>
        </ThemeProvider>
    )
}


const styles = {
    heading: {
        mt: [140],
        textAlign: 'center',
        p: {
            maxWidth: 500,
            m: '20px auto 0',
        },
    },
    
}