import { rgba } from 'polished';
import { jsx, Box, Container, Button, Image, Label, Input, Select } from 'theme-ui';
import { useFormik } from 'formik';



export default function AddProduct1(){
    
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
    
    
        return (
            <Box sx={styles.section}>
                <Container>
                    
                    <form onSubmit={handleSubmit}>
    
    
                        <Box sx={styles.form}>
    
                            <Box>
                                <Label sx={styles.label} >Ürün Fotoğrafı</Label>
                                <Input formMethod='post' sx={styles.inputDetail} type="file" name="image" id="image" />
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
                                <Input formMethod='post' sx={styles.inputDetail} name="title" onChange={handleChange} value={values.title} onBlur={handleBlur} />
                            </Box>
                            <br />
                            {/* <Box >
                                <Label sx={styles.label} >Ürünün Ağırlığı (kg)</Label>
                                <Input formMethod='post' sx={styles.inputDetail} name="weight" onChange={handleChange} value={values.weight} onBlur={handleBlur} />
                            </Box>
                            <br />
                            <Box >
                                <Label sx={styles.label} >Ürünün Eni (cm) </Label>
                                <Input formMethod='post' sx={styles.inputDetail} name="width" onChange={handleChange} value={values.width} onBlur={handleBlur} />
                            </Box>
                            <br />
                            <Box >
                                <Label sx={styles.label} >Ürünün Boyu (cm) </Label>
                                <Input formMethod='post' sx={styles.inputDetail} name="height" onChange={handleChange} value={values.height} onBlur={handleBlur} />
                            </Box>
                            <br />
                            <Box >
                                <Label sx={styles.label} >Ürünün Gönderileceği Adres </Label>
                                <Select formMethod='post' sx={styles.selectDetail} name="adress" onChange={handleChange} value={values.adress} onBlur={handleBlur} >
                                    <option>test1</option>
                                    <option>test2</option>
                                </Select>
                            </Box> */}
                            <br />
                        </Box>
                        <br />
                        
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
            height: [55],
            display: "inline-block",
            width: [753],
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