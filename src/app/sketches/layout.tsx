
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function SketchesLayout({ children }: {
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
