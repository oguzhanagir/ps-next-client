import React from "react";
import { useFormik } from 'formik';
import { jsx, Box, Container, Button, Image, Label, Input } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import validationSchema from '../components/validation/validation'

export default function RegisterSec() {
    const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            password: '',
            confirmPassword: '',
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
                    title="Kayıt Ol "
                />
                <form onSubmit={handleSubmit}>


                    <Box sx={styles.form}>
                        <Label sx={styles.label} >İsim</Label>
                        <Input sx={styles.inputDetailName} name="name" onChange={handleChange} value={values.name} onBlur={handleBlur} />

                        <br/>

                        <Label sx={styles.label} >Soyad</Label>
                        <Input sx={styles.inputDetailSurname} name="surname" onChange={handleChange} value={values.surname} onBlur={handleBlur} />

                        <br />

                        <Label sx={styles.label} >Email</Label>
                        <Input sx={styles.inputDetail} name="email" onChange={handleChange} value={values.email} onBlur={handleBlur} />

                        <br />
                        {errors.email && touched.email && <div className='error'>{errors.email.toLocaleUpperCase()}</div>}

                        <br />
                        <Label sx={styles.label}>Şifre</Label>
                        <Input sx={styles.inputDetail} type={"password"} name="password" onChange={handleChange} value={values.password} onBlur={handleBlur} />
                        <br></br>
                        {errors.password && touched.password && <div className='error'>{errors.password.toLocaleUpperCase()}</div>}

                        <br />

                        <Label sx={styles.label} >Confirm Password</Label>
                        <Input sx={styles.inputDetail} type={"password"} name="confirmPassword" onChange={handleChange} value={values.confirmPassword} onBlur={handleBlur} />
                        {errors.confirmPassword && touched.confirmPassword && <div className='error'>{errors.confirmPassword.toLocaleUpperCase()}</div>}

                        <br /><br />

                    </Box>

                    <br /><br />

                    
                    <Box sx={styles.buttonWrapper}>
                        <Button type="submit">Giriş Yap</Button>
                    </Box>



                    <br /><br />


                </form>

            </Container>
        </Box>

    )
};

const styles = {

    label: {
        textAlign: 'center',
        color: "black",
        fontSize: [20],
    },

    inputDetail: {
        height: [30],
        display: "inline-block",
        width: [220],
    },
    inputDetailName: {
        height: [30],
        
        width: [220],
    },
    inputDetailSurname: {
        height: [30],
        
        width: [220],
    },

    section: {
        position: 'flex',
        pt: [50, null, null, 140, 15, null, 110],
        pb: [8, null, null, 0],
        zIndex: 0,
        ':before': {
            backgroundColor: rgba('#689d6a', 1),
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
        mb: [40],
        ml: ['42.3%'],
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
        ml: '41%',

    },

};