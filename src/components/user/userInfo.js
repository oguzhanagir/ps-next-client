import { jsx, Box, Container, Image, Text, Button } from 'theme-ui';
import userImage from '../../assets/images/user/user1.png'



export default function UserInfo() {
    return(
        <Container>
            <Box sx={styles.userBox}>
                <Image src={userImage} sx={styles.userAvatar} />
            </Box>
            <Box sx={styles.userInfo} >
                <h3>İsim : APİ </h3>
                <h3>Soyad : APİ </h3>
                <h3>Email : APİ </h3>
                <h3>Phone Number : APİ </h3>
                <h3>Araba : APİ </h3>
                <h3>Adress : APİ </h3>
            </Box>
            <Button sx={styles.buttonWrapper} >
                Bilgileri Güncelle
            </Button>
        </Container>
    )
    
}


const styles = {
    userAvatar : {
        size:[120],
        borderRadius: 100,
        boxShadow: 'rgba(10, 10, 20, 0.74) 1px 3px 8px',
        mt : [80],
        mb : [30],
    },
    userBox : {
        position: 'flex',
    },
    buttonWrapper: {
        textAlign: ['center'],
        position: ['static', null, null, 'relative'],
        left: '7.5%',
        mt : [23],
        transform: ['unset', null, null, 'translateX(-50%)'],
        backgroundColor: '#00CCFF',
    },
    userInfo: {
        ml : [3],
    }
}