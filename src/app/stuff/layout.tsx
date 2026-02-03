
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function HomeLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <main className='mainGrid'>
            <Header />
            <div className='scroll-shadows'>
                {children}
            </div>
            <Footer />
        </main>
    )
}
