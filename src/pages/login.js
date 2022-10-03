import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Banner from "sections/banner"
import Layout from "components/layout"
import SubscribeUs from 'sections/subscribe-us';

export default function Login() {
    return(
        <div>
            <ThemeProvider theme={theme}>
            <Layout>

            <SubscribeUs/>
            </Layout>
            </ThemeProvider>
            
            
        </div>
    )
}