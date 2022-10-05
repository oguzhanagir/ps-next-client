import React from "react";
import { useFormik } from 'formik';
import { jsx, Box, Container, Button, Image, Label, Input } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import validationSchema from '../components/validation/validation'

function LoginSec() {

    const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
        validationSchema,
    });


    return (
        <Box sx={styles.section} >
            <Container>
                <SectionHeading
                    sx={styles.heading}
                    title="Giriş Yap "
                />
                <form onSubmit={handleSubmit}>


                    <Box sx={styles.form}>
                        <Label sx={styles.label} >Email</Label>
                        <Input sx={styles.inputDetail} name="email" onChange={handleChange} value={values.email} onBlur={handleBlur} />

                        <br/>
                        {errors.email && touched.email && <div className='error'>{errors.email.toLocaleUpperCase()}</div>}

                        <br /><br />
                        <Label sx={styles.label}>Şifre</Label>
                        <Input sx={styles.inputDetail} type={"password"} name="password" onChange={handleChange} value={values.password} onBlur={handleBlur} />
                        <br></br>
                        {errors.password && touched.password && <div className='error'>{errors.password.toLocaleUpperCase()}</div>}

                    </Box>

                    <br /><br />

                    
                    <Box sx={styles.buttonWrapper}>
                        <Button type="submit">Giriş Yap</Button>
                    </Box>

                    <br /><br />


                </form>

            </Container>
        </Box>
    );
}

export default LoginSec;

const styles = {
    inputDetail:{
        height: [50],
    },

    label: {
        textAlign: 'center',
        color: "black",
        fontSize: [20],
    },

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
            zIndex: -1,
        },
    },
    contentWrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    heading: {
        mb: [50],
        ml: ['42%'],
        maxWidth: [null, null, null, 500, 560, 730],
        h2: {
            fontSize: [8, null, null, 8, 9, 10, 11],
            lineHeight: [1.57],
        },
        p: {
            fontSize: [1, null, null, 3],
            lineHeight: [1.87, null, null, 2.33],
        },
    },
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

        transform: ['unset', null, null, 'translateX(-50%)'],
    },

    form: {
        display: "inline-block",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        ml: '37%',
        size : [320],
    },

};
