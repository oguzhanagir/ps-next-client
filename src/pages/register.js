import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Banner from "sections/banner"
import Layout from "components/layout"
import SubscribeUs from 'sections/subscribe-us';
import RegisterSec from 'sections/register';


export default function Register() {
    return(
        <div>
            <ThemeProvider theme={theme}>
            <Layout>

            <RegisterSec/>
            
            <SubscribeUs/>
            </Layout>
            </ThemeProvider>
        
        </div>
    )
}