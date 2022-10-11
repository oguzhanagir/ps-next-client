import Layout from "components/layout"
import theme from "theme"
import { ThemeProvider } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { Container } from 'theme-ui';

export default function User() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Container>
                    <SectionHeading
                        sx={styles.heading}
                        title="Kullanıcı Ekranı"
                    />
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