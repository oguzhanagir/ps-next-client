/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useCallback } from 'react';
import { jsx, Box, Container, Button, Flex, Checkbox, Label } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Input from 'components/input';
import illustration from 'assets/images/subscribe-bg.png';

const SubscribeUs = () => {
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted.');
  };

  const handleCheckbox = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return (
    <Box as="section" sx={styles.section} variant="section.subscribe">
      <Container>
        <Box sx={styles.contentWrapper}>
          <SectionHeading
            sx={styles.heading}
            title="Hizmetimizi beğendiniz mi? Bize abone olun"
            description="Binden fazla kullanıcımız var tasarruf ediyor"
          />
          <Box as="form" sx={styles.subscribe} onSubmit={handleSubmit}>
            <Flex sx={styles.inputGroup}>
              <Label htmlFor="email" variant="styles.srOnly">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                className="email-input"
                placeholder="Email Adresinizi Giriniz"
              />
              <Button variant="secondary">Abone Olun</Button>
            </Flex>

          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SubscribeUs;

const styles = {
  section: {
    background: [
      'none',
      null,
      null,
      `#F8F0EA url(${illustration}) no-repeat center bottom / contain`,
    ],
    pt: [8, null, null, null, 10],
    pb: [8, null, null, 9, 11],
  },
  contentWrapper: {
    backgroundColor: '#fff',
    borderRadius: 15,
    p: [null, null, null, '40px 110px 50px', '50px 50px', '40px'],
    gap: '50px',
    display: ['block', null, 'grid', 'block', 'grid'],
    alignItems: 'center',
    gridTemplateColumns: ['repeat(2, 1fr)'],
  },
  heading: {
    textAlign: ['center', null, 'left', 'center', 'left'],
    mb: ['30px', null, null, null, 0],
    ml: 0,
    h2: {
      fontSize: [6, null, null, null, null, 8, 9],
    },
    p: {
      lineHeight: 1.87,
      marginTop: 1,
      ml: ['auto', null, null, null, 0],
      mr: ['auto', null, null, null, 0],
      maxWidth: 420,
    },
  },
  subscribe: {
    '.email-input': {
      mr: [0, null, null, '15px'],
      minHeight: ['50px', '50px', '60px'],
    },
    button: {
      minHeight: ['50px', '50px', '60px'],
      fontSize: ['14px', '14px', '16px'],
      mt: ['15px', null, null, 0],
    },
  },
  inputGroup: {
    flexDirection: ['column', null, null, 'row'],
  },

};
