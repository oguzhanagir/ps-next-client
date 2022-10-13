import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Layout from "components/layout"
import AddCarrierSection from 'sections/addCarrierSection';


export default function AddCarrier (){
    return(
       <ThemeProvider theme={theme}>
        <Layout>
            <AddCarrierSection/>
        </Layout>
       </ThemeProvider>
    )
}