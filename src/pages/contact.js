import Layout from "components/layout"
import theme from "theme"
import { ThemeProvider } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { Container } from 'theme-ui';

export default function Contact() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Container>
                    <SectionHeading title={"İletişim"} />
                </Container>
            </Layout>
        </ThemeProvider>
    )
}