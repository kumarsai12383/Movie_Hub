function HeroLoading() {
  return (
    <div className="h-screen bg-slate-700 animate-pulse relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-5 flex flex-col gap-6">
        
        {/* Title */}
        <div className="h-16 w-80 bg-slate-600 rounded"></div>

        {/* Overview */}
        <div className="space-y-3">
          <div className="h-6 w-[600px] bg-slate-600 rounded"></div>
          <div className="h-6 w-[550px] bg-slate-600 rounded"></div>
          <div className="h-6 w-[500px] bg-slate-600 rounded"></div>
        </div>

        {/* Rating */}
        <div className="h-8 w-72 bg-slate-600 rounded"></div>

        {/* Buttons */}
        <div className="flex gap-4">
          <div className="h-12 w-32 bg-slate-600 rounded"></div>
          <div className="h-12 w-32 bg-slate-600 rounded"></div>
        </div>

      </div>
    </div>
  );
}
export default HeroLoading;
