import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Typography, Button } from '@mui/material';
import { colors } from 'themes';

export function Credits() {

  const Anchor = (props: { url: string, text: string }) => {
    return (
      <a
        href={props.url}
        target='_blank'
        style={{ color: colors.secondary }}
      >
        {props.text}
      </a>
    );
  }

  return (
    <>
      <Helmet>
        Web Bomberman - Credits
      </Helmet>
      <Typography
        variant='h2'
        color='text.primary'
      >
        Credits
      </Typography>
      <Typography
        variant='body1'
        color='text.primary'
        sx={{ marginTop: '64px', textAlign: 'center' }}
      >
        This project was made by <Anchor url='https://github.com/eldskald'
        text='Rafael Bordoni' />.
      </Typography>
      <Typography
        variant='body1'
        color='text.primary'
        sx={{ marginTop: '16px', textAlign: 'center' }}
      >
        This webpage was made with React and TypeScript, and the API was made
        with TypeScript, both are open source licensed under the MIT license.
        Both were made as exercises. The API in particular is a great example
        of OOP and its many design patterns. Feel free to look at the source
        code and learn from it!
      </Typography>
      <Typography
        variant='body1'
        color='text.primary'
        sx={{ marginTop: '16px', textAlign: 'center' }}
      >
        <Anchor
          text="Web page's repository"
          url='https://github/web-bomberman/web'
        />
        <br/>
        <Anchor
          text="API's repository"
          url='https://github/web-bomberman/api'
        />
      </Typography>
      <Button
        variant='outlined'
        color='primary'
        size='large'
        component={Link}
        to='/'
        sx={{ marginTop: '64px' }}
      >
        Back to the main page
      </Button>
    </>
  );
}