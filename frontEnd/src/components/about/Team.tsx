import { Github, Linkedin, User } from 'lucide-react';

const team = [
    { name: "Amr", role: "Developer", bio: "Full stack development and AI integration specialist." },
    { name: "Ahmed", role: "Developer", bio: "Full stack development and AI integration specialist." },
    { name: "Anwar", role: "Developer", bio: "Full stack development and AI integration specialist." },
    { name: "Seif", role: "Developer", bio: "Full stack development and AI integration specialist." },
    { name: "Adham", role: "Developer", bio: "Full stack development and AI integration specialist." }
];

export default function Team() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">Meet Our Team</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
                        A multidisciplinary team of geneticists, data scientists, and engineers working together to solve healthcare's biggest challenges.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
                    {team.map((member, index) => (
                        <div key={index} className="group relative bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="aspect-square bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                                <User className="w-20 h-20 sm:w-24 sm:h-24 text-slate-300 dark:text-slate-600" />
                            </div>
                            <div className="p-4 sm:p-6 relative bg-white dark:bg-slate-900">
                                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">{member.name}</h3>
                                <div className="text-primary dark:text-cyan-400 text-xs sm:text-sm font-medium mb-2 sm:mb-3">{member.role}</div>
                                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4 min-h-[60px]">{member.bio}</p>

                                <div className="flex gap-2 sm:gap-3">
                                    <a href="#" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"><Github className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600 dark:text-slate-400" /></a>
                                    <a href="#" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"><Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600 dark:text-slate-400" /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
