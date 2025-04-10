import { useEffect, useState } from 'react';

export default function Card({image, title, year, num, rule}:{image:string, title: string, year:string, num: number, rule: string}): JSX.Element {

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
        <div className='card' style={{backgroundColor: color }}>
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
    );
}