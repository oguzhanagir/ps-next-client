import SectionHeading from 'components/section-heading';
import { jsx, Box, Container, Button, Image, Label, Input, Select } from 'theme-ui';
import { useState } from 'react';
import { rgba } from 'polished';
import { useFormik } from 'formik';


import ProductPage2 from 'components/addProduct/addProduct2';
import ProductPage1 from '../components/addProduct/addProduct1'
import ProductPage3 from '../components/addProduct/addProduct3'

export default function AddProductSection() {


    const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            
            name: '',
            description: '',
            title: '',
            weight: '',
            width: '',
            height: '',
            adress: '',
            price: '',
            size: '',
            image: '',
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));

        },
    });



    const component = () => {
        switch (page) {
            case 0:
                return (
                    <Box sx={styles.section}>
                <Container>
                    
                    <form onSubmit={handleSubmit}>
    
                        <Box sx={styles.form}>
    
                            <Box>
                                <Label sx={styles.label} >Ürün Fotoğrafı</Label>
                                <Input  formMethod='post' sx={styles.inputDetail} type="file" name="image" id="image" />
                            </Box>
                            <br />
                            <Box >
                                <Label sx={styles.label} >Ürün İsmi</Label>
                                <Input formMethod='post' sx={styles.inputDetail} name="name" onChange={handleChange} value={values.name} onBlur={handleBlur} />
                            </Box>
                            <br />
                            <Box >
                                <Label sx={styles.label} >Ürün Açıklaması</Label>
                                <Input formMethod='post' sx={styles.inputDetail} name="description" onChange={handleChange} value={values.description} onBlur={handleBlur} />
                            </Box>
                            <br />
                            <Box >
                                <Label sx={styles.label} >Ürün Başlığı</Label>
                                <Input formMethod='post' sx={styles.inputDetail} name="title" onChange={handleChange} value={values.title} onBlur={handleBlur}  />
                            </Box>
                            <br />

                            <br />
                        </Box>
                        <br />
                        <Box sx={styles.buttonWrapper}>
                            <Button  onClick={pageChange} >Gönder</Button>
                        </Box>
                    </form>
                </Container>
            </Box>
                )
                break;
            case 1:
                return (
                    <Box sx={styles.section}>
                <Container>
                    
                    <form onSubmit={handleSubmit}>
    
    
                        <Box sx={styles.form}>
                            
                           
                            <Box >
                                <Label sx={styles.label} >Ürünün Ağırlığı (kg)</Label>
                                <Input formMethod='post' sx={styles.inputDetail} name="weight" onChange={handleChange} value={values.weight} onBlur={handleSubmit} />
                            </Box>
                            <br />
                            <Box >
                                <Label sx={styles.label} >Ürünün Eni (cm) </Label>
                                <Input formMethod='post' sx={styles.inputDetail} name="width" onChange={handleChange} value={values.width} onBlur={handleSubmit} />
                            </Box>
                            <br />
                            <Box >
                                <Label sx={styles.label} >Ürünün Boyu (cm) </Label>
                                <Input formMethod='post' sx={styles.inputDetail} name="height" onChange={handleChange} value={values.height} onBlur={handleSubmit} />
                            </Box>
                            <br />
                            
                            <br />
                        </Box>
                        <br />
                        <Box sx={styles.buttonWrapper}>
                            <Button type="submit" onClick={pageChange} >Gönder</Button>
                        </Box>
                    </form>
                </Container>
            </Box>
                )
                break;
            case 2:
                return (
                    <Box sx={styles.section}>
                <Container>
                    
                    <form onSubmit={handleSubmit}>
    
    
                        <Box sx={styles.form}>
                         
                           
                            <br />
                            <Box >
                                <Label sx={styles.label} >Ürünün Gönderileceği Adres </Label>
                                <Select formMethod='post' sx={styles.selectDetail} name="adress" onChange={handleChange} value={values.adress} onBlur={handleBlur} >
                                    <option>test1</option>
                                    <option>test2</option>
                                </Select>
                            </Box>
                            <br />
                        </Box>
                        <br />
                        <Box sx={styles.buttonWrapper}>
                            <Button type="submit" onClick={pageChange} >Gönder</Button>
                        </Box>
                    </form>
                </Container>
            </Box>
                )
                break;
            default: <ProductPage1 />
                break;
        }
    }
    const [page, setPage] = useState(0);
    function pageChange() {
        setPage(page + 1);
    }

    return (
        <Box sx={styles.section}>

            <SectionHeading
                sx={styles.heading}
                title="Ürün Ekle"
            />
            {component()}
            <Box sx={styles.buttonWrapper}>

                

            </Box>

        </Box>


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
    buttonWrapper: {
        textAlign: ['end'],
        position: ['static', null, null, 'relative'],
        left: '25%',
        transform: ['unset', null, null, 'translateX(-50%)'],
        mb: [50],
    },
    section: {
        position: 'flex',
        pt: [50, null, null, 140, 15, null, 0],
        pb: [0, null, null, 0],
        zIndex: 0,
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


