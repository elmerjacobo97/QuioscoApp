import {Roboto} from '@next/font/google';
import {QuioscoProvider} from "../context";
import 'animate.css';
import '../styles/globals.css';

const roboto = Roboto({
    weight: ['400', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

export default function App({Component, pageProps}) {
    return (
        <main className={roboto.className}>
            <QuioscoProvider>
                <Component {...pageProps} />
            </QuioscoProvider>
        </main>
    )
}
