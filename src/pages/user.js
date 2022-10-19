import Layout from "components/layout"
import theme from "theme"
import { ThemeProvider } from 'theme-ui';

import userInfo from "sections/userInfo";

export default function User() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <userInfo />
            </Layout>
        </ThemeProvider>
    )
}

