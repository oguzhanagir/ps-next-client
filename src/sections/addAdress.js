import { jsx, Box, Container, Image, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import AddUserAdress from 'components/addAdress/addUserAdress';

export default function AddAdress() {
    return(
        <Container>
            <SectionHeading 
            sx={styles.heading}
            title={"Adres Ekle "}
            />
            <AddUserAdress/>
        </Container>
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