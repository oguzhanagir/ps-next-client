import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Layout from "components/layout"
import SubscribeUs from 'sections/subscribe-us';
import ProductPage from 'sections/productPage';
import SectionHeading from 'components/section-heading';
import { Container } from 'theme-ui';
import ProductTest from 'sections/productTest';

export default function Product() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Container>
                    <SectionHeading
                    sx={styles.heading}
                    title="Ürünler"
                />
                </Container>
                <ProductTest/>
                <ProductPage />
                <ProductPage />
                <ProductPage />
                <SubscribeUs />
            </Layout>
        </ThemeProvider>
    )
}

const styles = {
    heading: {
        mt : [150],
        textAlign : 'center',
        p: {
            maxWidth: 500,
            m: '20px auto 0',
        },
    },
}