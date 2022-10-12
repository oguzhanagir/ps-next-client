import SectionHeading from 'components/section-heading';
import AddProduct1 from "components/addProduct/addProduct1"
import { jsx, Box, Container, Button, Image, Label, Input, Select } from 'theme-ui';


export default function AddProductSection() {



    return (
        <>
            <SectionHeading
                sx={styles.heading}
                title="Ürün Ekle"

            />
            <AddProduct1 />

        </>


    )
}


const styles = {
    heading: {
        mt: [140],
        textAlign: 'center',
        p: {
            maxWidth: 500,
            m: '20px auto 0',
        },
    },
}


