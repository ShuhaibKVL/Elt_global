import VectorIcon from '../../assets/images/icons/Vector.png'
export default function Header() {
  return (
    <div className='h-[60px] bg-white pl-[40px] pr-[40px] flex items-center justify-between'>
      <h1 className='text-black text-[24px] font-bold'>Dashboard</h1>
      <img src={VectorIcon} className="w-[22px] h-[22px] block sm:hidden" alt="" />
    </div>
  )
}
