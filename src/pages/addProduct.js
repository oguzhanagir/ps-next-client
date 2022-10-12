import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Layout from "components/layout"


import AddProductSection from 'sections/addProductSection';



export default function AddProduct(){
    return(
        <ThemeProvider theme={theme}>
            <Layout>
            <AddProductSection/>
            </Layout>
        </ThemeProvider>
    )
}

