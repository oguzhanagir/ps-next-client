import { rgba } from 'polished';
import { jsx, Box, Container, Button, Image, Label, Input } from 'theme-ui';
import { useFormik } from 'formik';


export default function ForgotPasswordSec() {
    const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            forgotEmail: '',
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
        
    });
    
    return (
        <Box sx={styles.section}>

            <form onSubmit={handleSubmit}>


                <Box sx={styles.form}>
                    <Label sx={styles.label} >Email</Label>
                    <Input sx={styles.inputDetail} name="forgotEmail" onChange={handleChange} value={values.forgotEmail} onBlur={handleBlur} />

                    <br />
                   

                    <br /><br />
                    
                </Box>

                <br /><br />


                <Box sx={styles.buttonWrapper}>
                    <Button type="submit">Mail Gönder</Button>
                </Box>

                <br /><br />


            </form>

        </Box>
    )
}


const styles = {
    section: {

        position: 'flex',
        pt: [105, null, null, 140, 15, null, 110],
        pb: [8, null, null, 140],
        zIndex: 0,
        ':before': {
            backgroundColor: rgba('#FFBD00', 0.7),
            content: ['none', null, null, `''`],
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 1000,
            top: 75,
            zIndex: -1,
        },
    },
    buttonWrapper: {
        textAlign: ['center'],
        position: ['static', null, null, 'relative'],
        left: '50.5%',

        transform: ['unset', null, null, 'translateX(-50%)'],
    },

    form: {
        display: "inline-block",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        ml: '37%',
        height: [100],
        width: [350],
    },
}