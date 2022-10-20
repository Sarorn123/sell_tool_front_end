import "../styles/services.scss"
import { useLocation } from 'react-router-dom';

export const Services = () => {
    const location = useLocation();
    const rightpath = location.pathname;

  return (
    <section className='services'>
        {
            rightpath === "/services" && <div>Hi</div>
        }
    </section>
  )
}