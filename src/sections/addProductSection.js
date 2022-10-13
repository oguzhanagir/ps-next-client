import SectionHeading from 'components/section-heading';
import AddProduct1 from "components/addProduct/addProduct1"
import { jsx, Box, Container, Button, Image, Label, Input, Select } from 'theme-ui';
import dynamic from 'next/dynamic';
import React from 'react';
import { rgba } from 'polished';

const ProductPage1 = dynamic(() => import("components/addProduct/addProduct1"), {
    ssr: false
  });

  const ProductPage2 = dynamic(() => import("components/addProduct/addProduct2"), {
    ssr: false
  });

  const ProductPage3 = dynamic(() => import("components/addProduct/addProduct3"), {
    ssr: false
  });

  

export default class AddProductSection extends React.Component{
    constructor(props){
        super(props);
        let details;
        this.state = {
            details : false,
            x : 2,
            y : 3
        };
    }
    showDetails(){
       this.setState({details : true})
    }
    showStatment(){
        this.setState({details : true});
    }

   

    
    render(){
        let view;
        let { details, x ,y } = this.state;
        

        // switch (details) {
        //     case 1:
        //         view = <><ProductPage1/><Button onClick={() =>this.showDetails }>İleri</Button></>
        //         break;
        //     case 2:
        //         view = <><ProductPage2/><Button onClick={() => this.y}>İleri</Button></>
        //         break;
        //     case 3:
        //         view = <><ProductPage3/></>
        //         break;
        //     default:<ProductPage1/>
        //         break;
        // }


        return (
           <Box sx={styles.section}>
          
                <SectionHeading
                    sx={styles.heading}
                    title="Ürün Ekle"
                />
    
                <Box sx={styles.buttonWrapper}>


               {/* {view} */}

                {!details ? (
            <><AddProduct1 /><Button onClick={() => this.showDetails()}>İleri</Button></>
        ) : (
          <><ProductPage2 /></>
        ) }
        {/* {!statment ? ( <Button onClick={() => this.showStatment()}>devam</Button>
            )
            :(
                <ProductPage3/>
            )} */}
                </Box>
          
           </Box>
    
    
        )
    }
    
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
        left: '31%',
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


