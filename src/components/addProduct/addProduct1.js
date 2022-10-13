import { rgba } from 'polished';
import { jsx, Box, Container, Button, Image, Label, Input, Select } from 'theme-ui';
import { useFormik } from 'formik';



export default function AddProduct1(){
    
        const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
            initialValues: {
                name: '',
                description: '',
                title: '',
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
                                <Input  formMethod='post' sx={styles.inputDetail} type="file" name="image" id="image" />
                            </Box>
                            <br />
                            <Box >
                                <Label sx={styles.label} >Ürün İsmi</Label>
                                <Input formMethod='post' sx={styles.inputDetail} name="name" onChange={handleChange} value={values.name} onBlur={handleSubmit} />
                            </Box>
                            <br />
                            <Box >
                                <Label sx={styles.label} >Ürün Açıklaması</Label>
                                <Input formMethod='post' sx={styles.inputDetail} name="description" onChange={handleChange} value={values.description} onBlur={handleSubmit} />
                            </Box>
                            <br />
                            <Box >
                                <Label sx={styles.label} >Ürün Başlığı</Label>
                                <Input formMethod='post' sx={styles.inputDetail} name="title" onChange={handleChange} value={values.title} onBlur={handleSubmit}  />
                            </Box>
                            <br />
                           
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