import { HiOutlineCube, HiOutlineShoppingCart } from 'react-icons/hi'
import { RiDashboardLine } from 'react-icons/ri'
import { CgShoppingBag } from 'react-icons/cg'
import { FaNetworkWired } from 'react-icons/fa'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <RiDashboardLine />
    },
    {
        key: 'balance',
        label: 'Balance',
        path: '/balance',
        icon: <HiOutlineCube />
    },
    {
        key: 'transaction',
        label: 'Transaction',
        path: '/transaction',
        icon: <HiOutlineShoppingCart />
    },
    {
        key: 'product',
        label: 'Product',
        path: '/product',
        icon: <CgShoppingBag />
    },
    {
        key: 'channel',
        label: 'Channel',
        path: '/channel',
        icon: <FaNetworkWired />
    }
]
