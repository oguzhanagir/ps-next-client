import React from "react";
import { useFormik } from 'formik';
import { jsx, Box, Container, Button, Image, Label, Input } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import validationSchema from '../../validation/validation'
import image from '../assets/images/team/member2.png'



export default function RegisterSec() {
    const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            phone: '',
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
            <Image src={image} sx={styles.image} />
            <Container>

                <Box sx={styles.position}>
                    <form onSubmit={handleSubmit}>


                        <SectionHeading
                            sx={styles.heading}
                            title="Kayıt Ol "
                        />
                        <Box sx={styles.form}>

                            <Box sx={styles.test}>
                                <Label sx={styles.label} >İsim</Label>
                                <Input sx={styles.inputDetailName} name="name" onChange={handleChange} value={values.name} onBlur={handleBlur} />
                            </Box>

                            <Box sx={styles.test2}>
                                <Label sx={styles.label} >Soyad</Label>
                                <Input sx={styles.inputDetailSurname} name="surname" onChange={handleChange} value={values.surname} onBlur={handleBlur} />
                            </Box>
                            <br /><br />

                            <Label sx={styles.label} >Email</Label>
                            <Input sx={styles.inputDetail} name="email" onChange={handleChange} value={values.email} onBlur={handleBlur} />

                            <br />
                            {errors.email && touched.email && <div className='error'>{errors.email.toLocaleUpperCase()}</div>}

                            <br />


                            <Label sx={styles.label} >Telefon Numarası</Label>
                            <Input sx={styles.inputDetail} name="phone" onChange={handleChange} value={values.phone} onBlur={handleBlur} />

                            <br />
                            {errors.phone && touched.phone && <div className='error'>{errors.phone.toLocaleUpperCase()}</div>}

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

                            <Box sx={styles.buttonWrapper}>
                                <Button type="submit">Kayıt Ol</Button>
                            </Box>

                        </Box>

                        <br />
                        <br /><br />

                    </form>

                </Box>

            </Container>



        </Box>

    )
};

const styles = {

    image: {
        ml: ['61%'],
        mt: [140],
        position: 'absolute',
        width: 408,
        height: 408,
        borderRadius: 4,

    },

    position: {
        mt: [50],
        mr: ['65%'],
        mb: [100],

    },

    test: {
        display: 'inline-block',
        pr: [5],

    },
    test2: {
        display: 'inline-block',

    },


    label: {
        textAlign: 'center',
        color: "black",
        fontSize: [20],
    },

    inputDetail: {
        height: [35],
        display: "inline-block",
        width: [253],
        borderColor: 'black',
        boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
    },
    inputDetailName: {
        height: [35],
        position: 'flex',
        width: [115],
        borderColor: 'black',
        boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
    },
    inputDetailSurname: {
        height: [35],
        position: 'absulute',
        width: [114],
        borderColor: 'black',
        boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
    },

    section: {
        position: 'flex',
        pt: [20, null, null, 140, 15, null, 90],
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
            height: 1000,
            top: 77,
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
       
        ml: ['52%'],
        maxWidth: [null, null, null, 500, 560, 730],
        h2: {
            fontSize: [8, null, null, 8, 9, 10, 9],
            lineHeight: [0.5],
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
        left: '47%',
        transform: ['unset', null, null, 'translateX(-50%)'],
        mt: [4],
        mb: [55],
    },

    form: {
        mt: [7],
        ml: '39%',

    },

};