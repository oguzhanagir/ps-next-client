import { jsx, Box, Container, Image, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import UserInfo from 'components/user/userInfo';
import { rgba } from 'polished';

export default function UserDetail() {
    return(
        <Container sx={styles.section}>
        
        <UserInfo/>
    </Container>
    )
}





const styles = {
    section: {

        position: 'flex',
        pt: [1, null, null, 40, 15, null, 110],
        pb: [8, null, null, 0],
        zIndex: 0,
        display: 'block',
       
        ':before': {
            backgroundColor: rgba('#FFBD00', 0.7),
            content: ['none', null, null, `''`],
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 1000,
            top: 77,
            zIndex: -1,
        },
    },
}