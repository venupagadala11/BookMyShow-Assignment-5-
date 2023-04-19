import e1 from './images/events/e1.avif';
import e2 from './images/events/e2.avif';
import e3 from './images/events/e3.avif';
import e4 from './images/events/e4.avif';
import e5 from './images/events/e5.avif';

import m1 from './images/movies/ant-man.avif';
import m2 from './images/movies/bear.avif';
import m3 from './images/movies/fast-x.avif';
import m4 from './images/movies/selfie.avif';
import m5 from './images/movies/shehzada.avif';

import f1 from './images/fun-events/3.avif';
import f2 from './images/fun-events/f1.avif';
import f3 from './images/fun-events/f2.avif';
import f4 from './images/fun-events/f4.avif';
import f5 from './images/fun-events/f5.avif';

import cr1 from './images/carousel/cr-1.avif';
import cr2 from './images/carousel/cr-2.avif';
import cr3 from './images/carousel/cr-3.avif';
import cr4 from './images/carousel/cr-4.avif';

import s1 from './images/footer/cusomer-care.png';
import s3 from './images/footer/new-letter.jpg';
import s2 from './images/footer/tickets.jpg';

import sm1 from './images/footer/fb.png';
import sm2 from './images/footer/insta.jpg';
import sm3 from './images/footer/twitter.png';
import sm4 from './images/footer/youtube.png';
import sm5 from './images/footer/linked-in.png';

import mscr1 from './images/movie section carousel/img-1.avif';
import mscr2 from './images/movie section carousel/img-2.avif';
import mscr3 from './images/ms-carousel/cr1.avif';
import mscr4 from './images/ms-carousel/cr2.avif';

const carouselData = [cr1,cr2,cr3,cr4];
const socialMediaData = [sm1, sm2, sm3, sm4, sm5];
const movieSectionCarousel = [mscr1, mscr2, mscr3, mscr4];

const footerServicesData = [
    {src:s1, desc:'24/7 CUSTOMER CARE'},
    {src:s2, desc:'RESEND BOOKING CONFORMATION'},
    {src:s3, desc:'SUBSCRIBE TO THE NEWSLETTER'}]


const eventsData = [
    {name:'Paraboni 2023-ekok',src:e1,desc:'Bharathiya Vidya Bhavan: Hyderabad'},
    {name:'RCF 9 Cincert-Ft Armaan.',src:e2,desc:'Raman Vidya Bhavan: Hyderabad'},
    {name:'Mohabbat Zimdhagi',src:e3,desc:'Lakshman Mandhir Bhavan: Hyderabad'},
    {name:'Good Boy better show',src:e4,desc:'Hunuman Mahal Bhavan: Hyderabad'},
    {name:'Space Cadet by Varun',src:e5,desc:'Bharathiya Vidya Bhavan Hyderabad'}];

const data = [
    {name:'And-man',src:m1, desc:'Action/Visuals'},
    {name:'Bear',src:m2, desc:'Action/Emotional'},
    {name:'Fast Ann Furious',src:m3, desc:'Action/Adventure'},
    {name:'Selfie',src:m4, desc:'Comedy/Desi'},
    {name:'Shehzada',src:m5, desc:'Family/Comedy'}];

const movieSectionData = [
        {name:'And-man',src:m1, desc:'Action/Visuals'},
        {name:'Bear',src:m2, desc:'Action/Emotional'},
        {name:'Fast Ann Furious',src:m3, desc:'Action/Adventure'},
        {name:'Selfie',src:m4, desc:'Comedy/Desi'},
        {name:'Shehzada',src:m5, desc:'Family/Comedy'},
        {name:'Rangotsav',src:f1, desc:'Holi-special'},
        {name:'Rang de hyderabad',src:f2, desc:'Hot Holi'},
        {name:'Rangesh Ree',src:f4, desc:'Post Holi'},
        {name:'Ramesh',src:f3, desc:'Pre Holi'},
        {name:'Color dee',src:f5, desc:'Vache Holi'},
        {name:'And-man',src:m1, desc:'Action/Visuals'},
        {name:'Bear',src:m2, desc:'Action/Emotional'},];

const searchedData = [
    {title:'RRR', catogery:'movie'},
    {title:'HOLI ITSAV - HYDERABAD', catogery:'Activities'},
    {title:'IPL 2023 - RCB Tickets Pre-Registration', catogery:'Sports'},
    {title:'Holi Hai 4.0 At Prism Club & Kitchen', catogery:'Actibvities'},
    {title:'HOLI-ke Rank 2023', catogery:'Actibvities'},
    {title:'Gang Leader (1991)', catogery:'movie'},
    {title:'Sri (Telugu)', catogery:'movie'},
    {title:'Gulaal Holi', catogery:'Activities'},
    {title:'Saalar updates', catogery:'movie'},
    {title:'Sankranthi', catogery:'Activities'}
]

const funEvents = [
    {name:'Rangotsav',src:f1, desc:'Holi-special'},
    {name:'Rang de hyderabad',src:f2, desc:'Hot Holi'},
    {name:'Rangesh Ree',src:f4, desc:'Post Holi'},
    {name:'Ramesh',src:f3, desc:'Pre Holi'},
    {name:'Color dee',src:f5, desc:'Vache Holi'}];

const languages = ['English','Telugu','Hindi','Malyalam','Tamil','Punjabi','Kanada','Hariyani'];

const genres = ['Action','Drama','Comedy','Adventure','Triller','Romantic','Romantic','Mistery','Suspense','Pshyco'];

const  format = ['2D','3D','4DX','IMAX 2D','MX4D','4DX 3D']

export default eventsData;
export {data, searchedData, funEvents,languages, genres, format, movieSectionData,carouselData, footerServicesData, socialMediaData, movieSectionCarousel};
