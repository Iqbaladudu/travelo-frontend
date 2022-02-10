import { ReactNode } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

type Props = {
    children: ReactNode
    noFooter?: true
}

const Layout = ({ children, noFooter }: Props) => {
    return (
        <>
            <Header />
            {children}
            {noFooter ? (
                null
            ) : (
                <Footer />
            )}
        </>
    )
}

export default Layout