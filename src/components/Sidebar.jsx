import classNames from 'classnames'
import React from 'react'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS } from '../data'

const linkClasses = 'flex items-center gap-2 font-bold  px-3 py-2 hover:no-underline rounded-sm text-base'

export default function Sidebar() {
    return (
        <div className="bg-[#FCFCFF] w-72 flex flex-col text-center">
            <div className="text-3xl font-bold text-[#545DFF] mt-11">
                <span>SalesDash</span>
            </div>
            <div className="py-10 flex flex-col gap-4 ml-4">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
            </div>
            <div className="px-3 border-t border-x-[100px] border-x-[#fcfcff] border-[#C4C4C4]" />
            <div className="px-3">
                <div className={classNames('text-[#7A7A7A] mt-3', linkClasses)}>
                    <span className="text-xl">
                        <RiLogoutBoxRLine />
                    </span>
                    Logout
                </div>
            </div>
        </div>
    )
}

function SidebarLink({ item }) {
    const { pathname } = useLocation()

    return (
        <Link
            to={item.path}
            className={classNames(
                pathname === item.path ? 'text-[#545DFF] border-r-4 border-[#545DFF] rounded-l-lg' : 'text-[#7A7A7A]',
                linkClasses
            )}
        >
            <span className="text-xl">{item.icon}</span>
            {item.label}
        </Link>
    )
}
