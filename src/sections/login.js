import React from "react";
import { useFormik } from 'formik';
import { jsx, Box, Container, Button, Image, Label, Input } from 'theme-ui';
import { position, rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import validationSchema from '../../validation/validation'
import Link from "next/link";

import image from "../assets/images/team/member1.png"

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

            <Image src={image} sx={styles.image} />


            <Container >

                
                <Box sx={styles.position}>
                    <form onSubmit={handleSubmit}>


                    <SectionHeading
                    sx={styles.heading}
                    title="Giriş Yap "
                />


                        <Box sx={styles.form}>
                            <Label sx={styles.label} >Email</Label>
                            <Input sx={styles.inputDetail} name="email" onChange={handleChange} value={values.email} onBlur={handleBlur} />

                            <br />
                            {errors.email && touched.email && <div className='error'>{errors.email.toLocaleUpperCase()}</div>}

                            <br /><br />
                            <Label sx={styles.label}>Şifre</Label>
                            <Input sx={styles.inputDetail} type={"password"} name="password" onChange={handleChange} value={values.password} onBlur={handleBlur} />
                            <br></br>
                            {errors.password && touched.password && <div className='error'>{errors.password.toLocaleUpperCase()}</div>}
                            <br />
                            <Link href={"/forgotPassword"}><a sx={styles.test}>Şifremi unuttum</a></Link>
                            <Box sx={styles.buttonWrapper}>
                            <Button type="submit">Giriş Yap</Button>
                        </Box>
                        </Box>

                        <br /><br />

                        <br /><br />


                    </form>
                </Box>

            </Container>
        </Box>
    );
}

export default LoginSec;



const styles = {
    image: {
        ml: [120],
        mt: [90],
        position: 'absolute',
        width: 408,
        height: 408,
        borderRadius: 4,

    },


    test: {
        textDecoration: "none",
        color: "black"
    },

    position: {
        mt: [50],
        ml: ['37%'],
        mb: [100],

    },


    inputDetail: {
        height: [50],   
        color: 'black',
        borderColor: 'black',
        boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
    },



    label: {
        textAlign: 'center',
        color: "black",
        fontSize: [20],
    },

    section: {

        position: 'flex',
        pt: [1, null, null, 40, 15, null, 110],
        pb: [8, null, null, 0],
        zIndex: 0,
        display: 'block',

        ':before': {
            backgroundColor: rgba('#fff', 0.7),
            content: ['none', null, null, `''`],
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 1,
            top: 75,
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
        ml: ['46%'],
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
        left: '50.5%',
        mt : [23],
        transform: ['unset', null, null, 'translateX(-50%)'],
    },

    form: {
        display: "inline-block",
        textAlign: 'center',
        ml: '37%',
        size: [320],
    },

};
