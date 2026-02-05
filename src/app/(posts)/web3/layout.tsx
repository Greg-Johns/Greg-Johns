
import Footer from '@/components/Footer';
import HmLink from '@/components/HmLink';

export default function PostsLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <article>
            {children}
        </article>
    )
}
