import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function Card({image, title, year, num, rule, overview}:{image:string, title: string, year:string, num: number, rule: string, overview: string}): JSX.Element {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        color: 'black'
      };
    
    const isPerfectSquare = (x: number) =>{
        let s = parseInt(Math.sqrt(x));
        return (s * s == x);
      }
    
      const isFibonacci = (n: number) => {
        return isPerfectSquare(5 * n * n + 4) ||
            isPerfectSquare(5 * n * n - 4);
      }
    
      const isOdd = (n: number) => {
          return n % 2 !== 0;
      }

      const isPrime = (n: number) => {
        for(let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if(n % i === 0) return false;
        }
        return n > 1;
    }

      let color = '#a10809';
      switch (rule) {
        case 'fibonacci':
            isFibonacci(num)? color = '#a10809' : color = '#a16b09';
            break;
        case 'oddEven':
            isOdd(num)? color = '#a10809' : color = '#a16b09';
            break;
        case 'prime':
            isPrime(num)? color = '#a10809' : color = '#a16b09';
            break;
        default:
            break;
      }
    return (
        <>
         <div className='card' style={{backgroundColor: color }} onClick={handleOpen}>
            <img src={image}></img>
            <div>
                <div className='title'>
                    {title} {num}
                </div>
                <div className='year'>
                    {year}
                </div>
            </div>
        </div>
        <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    {overview}
                </Typography>
                </Box>
            </Modal>
        </>
       
    );
}