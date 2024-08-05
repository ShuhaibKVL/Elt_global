import ProfileImg from '../../assets/images/0348e55cb7230a23b65bb5c91a5c76ad (2).jpeg'

export default function Profile() {
    return (
    <div className='w-200px] h-[163px] pt-[18px] pr-[10px] pb-[24px] pl-[10px] border-b-2 '>
        <div className='rounded-full w-16 h-16'>
            <img src={ProfileImg} className='w-full h-full object-cover rounded-full' alt="Loading..." />
        </div>
        <h1 className='font-semibold text-[22px]'>John Doe</h1>
        <p className='font-normal'>Intermediate</p>
    </div>
    )
}
