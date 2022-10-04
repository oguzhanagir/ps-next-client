import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Banner from "sections/banner"
import Layout from "components/layout"
import SubscribeUs from 'sections/subscribe-us';
import LoginSec from 'sections/login';

export default function Login() {
    
    return(
        <div>
            <ThemeProvider theme={theme}>
            <Layout >
            <LoginSec/>
            <SubscribeUs/>
            </Layout>
            </ThemeProvider>
            
            
        </div>
    )
}
