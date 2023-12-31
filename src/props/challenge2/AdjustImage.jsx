/* eslint-disable react/prop-types */
import { getImageUrl } from '../challenge2/utils.jsx';
 
function Avatar({ person, size }) {
    let imgThumbnail = 's';
    let imgRounded = '';
    if(size > 90) {
        imgThumbnail = 'b';
        imgRounded = 'avatar rounded-full';
    } else {
        imgRounded = 'avatar rounded-lg';
    }
 return (
    <div className='text-center py-5'>
        <img
            className={imgRounded}
            src={getImageUrl(person, imgThumbnail)}
            alt={person.name}
            width={size}
            height={size}
        />
    </div>
 );
}
 
export default function AdjustImage() {
 return (
    <>
        <Avatar
            size={40}
            person={{ 
                name: 'Gregorio Y. Zara', 
                imageId: '7vQD0fP'
            }}
        />
        <Avatar
            size={140}
            person={{ 
                name: 'Mc Gregor', 
                imageId: '7vQD0fP'
            }}
        />
    </>
 );
}