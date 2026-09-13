export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="no-print w-full bg-gray-900 border-t border-gray-800 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
    
        <div className="text-center sm:text-left">
          <p className="text-xs font-semibold text-gray-400 tracking-wide">
            &copy; {currentYear} Ward Sacrament Planner. All rights reserved.
          </p>
          <p className="text-[10px] text-gray-500 mt-1 max-w-md leading-relaxed">
            This platform is an independent educational practice deployment built for 
            WDD 430 and is not officially sponsored by or affiliated with The Church of 
            Jesus Christ of Latter-day Saints.
          </p>
        </div>

    
        <div className="flex items-center gap-2 bg-gray-800/50 border border-gray-700/50 rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">
            Production Cluster Secure
          </span>
        </div>

      </div>
    </footer>
  );
}
