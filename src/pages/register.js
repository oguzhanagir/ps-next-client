import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Banner from "sections/banner"
import Layout from "components/layout"
import SubscribeUs from 'sections/subscribe-us';
import RegisterSection from 'sections/register';


export default function Register() {
    return(
        <div>
            <ThemeProvider theme={theme}>
            <Layout>
            <RegisterSection/>
            <SubscribeUs/>
            </Layout>
            </ThemeProvider>
        
        </div>
    )
}