import { rgba } from 'polished';
import { jsx, Box, Container, Button, Image, Label, Input, Select } from 'theme-ui';
import { useFormik } from 'formik';

export default function AddUserAdress() {
    const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            title: '',
            adressLine: '',
            city: '',
            zip_code: '',
            
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));

        },
    });
    return (
        <Box sx={styles.section}>
            <Container>
                
                <form onSubmit={handleSubmit}>

                    <Box sx={styles.form}>

                        
                        <Box >
                            <Label sx={styles.label} >Adres Başlığı</Label>
                            <Input formMethod='post' sx={styles.inputDetail} name="title" onChange={handleChange} value={values.title} onBlur={handleBlur} />
                        </Box>
                        <br />
                        <Box >
                            <Label sx={styles.label} >Adres </Label>
                            <Input formMethod='post' sx={styles.inputDetail} name="adressLine" onChange={handleChange} value={values.adressLine} onBlur={handleBlur} />
                        </Box>
                        <br />
                        <Box >
                            <Label sx={styles.label} >Şehir </Label>
                            <Input formMethod='post' sx={styles.inputDetail} name="city" onChange={handleChange} value={values.city} onBlur={handleBlur} />
                        </Box>
                        <br />
                        <Box >
                            <Label sx={styles.label} >Posta Kodu</Label>
                            <Input formMethod='post' sx={styles.inputDetail} name="zip_code" onChange={handleChange} value={values.zip_code} onBlur={handleBlur}  />
                        </Box>
                        <br />

                        <br />
                    </Box>
                    <br />
                    <Box sx={styles.buttonWrapper}>
                        <Button  type="submit" >Adres Ekle</Button>
                    </Box>
                </form>
            </Container>
        </Box>

    )
}



const styles = {
    
    illustration: {
        display: ['block', null, null, 'flex'],
        position: 'relative',
        img: {
            display: ['none', null, null, 'block'],
            maxWidth: ['90%'],
            m: ['0 auto'],
        },
    },

    buttonWrapper: {
        textAlign: ['center'],
        position: ['static', null, null, 'relative'],
        left: '50%',
        mt : [23],
        transform: ['unset', null, null, 'translateX(-50%)'],
    },
   
    
    contentWrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    form: {
        mt: [8],
        ml: '19%',
        mr: '19%',

    },
    label: {
        textAlign: 'center',
        color: "black",
        fontSize: [20],
    },
    inputDetail: {
        height: [50],   
        color: 'black',
        borderColor: 'black',
        boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
    },
    selectDetail: {
        borderColor: 'white',
        backgroundColor: rgba('#FFBD00', 0.2),
        '&:focus': {
            borderColor: 'white',
            boxShadow: t => `0 0 0 2px white`,
            outline: 'none',
        },
    },

}