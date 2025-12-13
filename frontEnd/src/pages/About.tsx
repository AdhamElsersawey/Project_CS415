import Layout from '../components/layout/Layout';
import Mission from '../components/about/Mission';
import TechStack from '../components/about/TechStack';
// import Team from '../components/about/Team';

export default function About() {
    return (
        <Layout>
            <div className="pt-6 sm:pt-10">
                <div className="container mx-auto px-4 sm:px-6 mb-6 sm:mb-8 text-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">About Us</h1>
                    <p className="mt-3 sm:mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">Pioneering the intersection of artificial intelligence and genomic medicine.</p>
                </div>
                <Mission />
                <TechStack />
                {/* <Team /> */}
            </div>
        </Layout>
    );
}
