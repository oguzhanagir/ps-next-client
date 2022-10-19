import { jsx, Box, Container, Image, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';


export default function userInfo() {
    return(
        <Container>
        <SectionHeading
            sx={styles.heading}
            title="Kullanıcı Ekranı"
        />
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