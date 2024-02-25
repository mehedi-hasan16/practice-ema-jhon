import logo from '../../assets/Logo.svg'

const Header = () => {
    return (
        <div className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
            <div>
                <h1 className='text-2xl font-bold text-white'>Ema-jhon</h1>
            </div>
            <div className='flex flex-row gap-5 text-white'>
                <a href="#">Order</a>
                <a href="#">Order Review</a>
                <a href="#">Manage Inventory</a>
                <a href="#">Login</a>
            </div>
        </div>
    );
};

export default Header;