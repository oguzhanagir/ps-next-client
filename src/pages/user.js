import Layout from "components/layout"
import theme from "theme"
import { ThemeProvider } from 'theme-ui';
import UserDetail from "sections/userInfo";

export default function User() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
           <UserDetail/>
            </Layout>
            
        </ThemeProvider>
    )
}

