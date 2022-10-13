import SectionHeading from 'components/section-heading';
import AddProduct1 from "components/addProduct/addProduct1"
import { jsx, Box, Container, Button, Image, Label, Input, Select } from 'theme-ui';
import dynamic from 'next/dynamic';
import {useState} from 'react';
import { rgba } from 'polished';

 

  import ProductPage2 from 'components/addProduct/addProduct2';

  import ProductPage1 from '../components/addProduct/addProduct1'
  import ProductPage3 from '../components/addProduct/addProduct3'
  
   export default function AddProductSection() {
    
    const component = ()=>{
        switch (page) {
            case 0:
                return <><ProductPage1 /></>
                break;
            case 1:
                return <ProductPage2/>
                break;
            case 2:
                return <ProductPage3/>
                break;
            default:<ProductPage1/>
                break;
        }
    }
    const [page , setPage] = useState(0);
        function handleSubmit() {
            setPage(page+1);
        }
        
    return (
        <Box sx={styles.section}>
       
             <SectionHeading
                 sx={styles.heading}
                 title="Ürün Ekle"
             />
                {component()}
             <Box sx={styles.buttonWrapper}>

             {page == 2 ? "" :<Button onClick={handleSubmit}>İleri</Button>}
             
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


