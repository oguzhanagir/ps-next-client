import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Layout from "components/layout"
import SubscribeUs from 'sections/subscribe-us';
import LoginSection from 'sections/login';


export default function Login() {
    
    return(
        <div>
            <ThemeProvider theme={theme}>
            <Layout  >
            <LoginSection/>
            <SubscribeUs/>
            </Layout>
            </ThemeProvider>
            
            
        </div>
    )
}


