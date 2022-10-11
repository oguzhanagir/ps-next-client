import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Layout from "components/layout"
import SectionHeading from 'components/section-heading';

export default function ProductDetail(){
    return(
      <ThemeProvider theme={theme} >
        <Layout>
        <SectionHeading
                    sx={styles.heading}
                    title="Ürün Detay"
                />
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