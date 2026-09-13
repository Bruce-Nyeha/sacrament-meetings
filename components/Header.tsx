import NavLinks from "./NavLinks";

    export default function Header() {
        return (
            <header className="no-print w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadows-xs">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                    <div className="flex items-center gap-3">
                        <span className="text-xl font-black tracking-widest text-indigo-900 uppercase">
                            Ward<span className="text-indigo-600 font-medium text-lg">Planner</span>
                        </span>
                        <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-bold text-gray-500 bg-gray-100 rounded-md tracking-wider uppercase">
                            LDS Service
                        </span>
                    </div>

            <NavLinks />

                </div>
            </header>
        );
    }