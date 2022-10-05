import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Banner from "sections/banner"
import Layout from "components/layout"
import SubscribeUs from 'sections/subscribe-us';
import LoginSec from 'sections/login';


export default function Product() {
    return(
        <ThemeProvider theme={theme}>
            <Layout>
                <SubscribeUs/>
            </Layout>
        </ThemeProvider>
    )
}