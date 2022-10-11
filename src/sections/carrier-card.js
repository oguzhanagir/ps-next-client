import { Box, Container } from 'theme-ui'
import PruductItem from 'components/cards/pruduct-item';
import { Swiper, SwiperSlide } from 'swiper/react';
import avatar1 from 'assets/images/team/member1.png';
import avatar2 from 'assets/images/team/member2.png';
import avatar3 from 'assets/images/team/member3.png';
import avatar4 from 'assets/images/team/member4.png';
import Link from 'next/link';


const data = [
    {
        id: 1,
        avatar: avatar1,
        name: 'Taşıyıcı Adı ',
        designation: 'Taşıyıcı Açıklaması',
        socialLinks: [

        ],
    },
    {
        id: 2,
        avatar: avatar2,
        name: 'Taşıyıcı Adı ',
        designation: 'Taşıyıcı Açıklaması',
        socialLinks: [

        ],
    },
    {
        id: 3,
        avatar: avatar3,
        name: 'Taşıyıcı Adı ',
        designation: 'Taşıyıcı Açıklaması',
        socialLinks: [

        ],
    },
    {
        id: 4,
        avatar: avatar4,
        name: 'Taşıyıcı Adı ',
        designation: 'Taşıyıcı Açıklaması',
        socialLinks: [

        ],
    },
    {
        id: 5,
        avatar: avatar1,
        name: 'Taşıyıcı Adı ',
        designation: 'Taşıyıcı Açıklaması',
        socialLinks: [

        ],
    },
]

export default function CarrierCard(){
    return (
        
        <Box sx={styles.section} >
          
            <Swiper 
                spaceBetween={35}
                slidesPerView={5}
            >
                {data?.map((item) => (
                    <SwiperSlide  key={item.id}>
                        <Link href={`/carrierDetail/`}>
                        <a style={{ textDecoration: 'none', color: '#00CCFF' }}><PruductItem sx={styles.test} member={item} /></a>
                        </Link>
                        
                    </SwiperSlide>
                ))}
            </Swiper>
           
        </Box>
)
}

const styles = {
    test : {
        textDecoration: "none"
    },
    a:{
        textDecotration : "none",
    },
   
    section: {
        pt: [11],
        pb: [11, null, null, 12, null, 14],
        pl: [12],
        pr: [11 ],
        
    },
    heading: {
        p: {
            maxWidth: 500,
            m: '10px auto 0',
        },
    },
    teamWrapper: {
        position: 'relative',
        pl: [6],
        pr: [6, null, null, 0],
        transition: '0.3s ease-in-out 0s',
        '.swiper-arrow': {
            backgroundColor: '#fff',
            border: 0,
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            width: [30, null, null, null, 40, 60],
            height: [30, null, null, null, 40, 60],
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0px 7px 14px rgba(25, 60, 101, 0.06)',
            borderRadius: '50%',
            position: 'absolute',
            zIndex: 2,
            top: 'calc(50% - 40px)',
            transform: 'translateY(-50%)',
            outline: 0,
            
            img: {
                maxWidth: [8, 10, null, null, '100%'],
            },
        },
        '.swiper-arrow-left': {
            left: [3, null, null, null, 20, 50],
            img: {
                transform: 'rotate(180deg)',
                marginLeft: '-4px',
            },
        },
        '.swiper-arrow-right': {
            right: [3, null, null, null, 20, 50],
            img: {
                marginRight: '-4px',
            },
        },
    },
};