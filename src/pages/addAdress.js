import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Layout from "components/layout"
import AddAdress from 'sections/addAdress';


export default function addAdress() {
    return(
        <div>
            <ThemeProvider theme={theme}>
            <Layout>
                <AddAdress/>
            </Layout>
            </ThemeProvider>
        </div>
    )
}