import Layout from '../components/layout/Layout';
import SystemExplanation from '../components/description/SystemExplanation';
import Workflow from '../components/description/Workflow';
import SupportedDiseases from '../components/description/SupportedDiseases';

export default function Description() {
    return (
        <Layout>
            <div className="pt-6 sm:pt-10">
                <div className="container mx-auto px-4 sm:px-6 mb-6 sm:mb-8 text-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">System Architecture & Workflow</h1>
                    <p className="mt-3 sm:mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">Comprehensive overview of how our AI technology processes genetic data to deliver precise insights.</p>
                </div>
                <SystemExplanation />
                <Workflow />
                <SupportedDiseases />
            </div>
        </Layout>
    );
}
