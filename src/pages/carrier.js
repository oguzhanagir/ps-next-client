import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Layout from "components/layout"
import SectionHeading from 'components/section-heading';
import { Container } from 'theme-ui';
import CarrierCard from 'sections/carrier-card';

export default function Carrier() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Container>
                    <SectionHeading
                        sx={styles.heading}
                        title="Yolcular"
                    />
                </Container>
                <CarrierCard />
                <CarrierCard />
                <CarrierCard />
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