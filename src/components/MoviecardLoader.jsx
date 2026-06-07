function MovieCardLoading() {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden animate-pulse">
      {/* Poster */}
      <div className="h-[450px] bg-slate-700"></div>

      <div className="p-5 space-y-4">
        {/* Title */}
        <div className="h-8 w-40 bg-slate-700 rounded"></div>

        {/* Rating */}
        <div className="h-6 w-24 bg-slate-700 rounded"></div>

        {/* Date */}
        <div className="h-6 w-36 bg-slate-700 rounded"></div>

        {/* Button */}
        <div className="h-12 w-36 bg-slate-700 rounded"></div>
      </div>
    </div>
  );
}
export default MovieCardLoading;
