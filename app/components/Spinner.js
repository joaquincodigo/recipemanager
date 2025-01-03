export default function Spinner() {
  return (
    // OUTER CONTAINER
    <div className="w-16 h-16 relative flex">

      {/* LAYER 1 CONTAINER */}

      <div className="absolute w-16 h-16 flex flex-col animate-spin">
        {/* LINE */}
        <div className="h-1/3 w-full flex items-center justify-center">
          <div className="h-3 w-3 bg-slate-400 rounded-full"></div>
        </div>

        {/* LINE */}
        <div className="h-1/3 w-full flex items-center justify-around">
          <div className="h-3 w-3 bg-slate-400 rounded-full"></div>
          <div className="h-3 w-3 bg-transparent rounded-full"></div>
          <div className="h-3 w-3 bg-slate-400 rounded-full"></div>
        </div>

        {/* LINE */}
        <div className="h-1/3 w-full flex items-center justify-center">
          <div className="h-3 w-3 bg-slate-400 rounded-full"></div>
        </div>
      </div>

      {/* LAYER 2 CONTAINER */}
      <div className="flex absolute rotate-45">
        <div className="w-16 h-16 flex flex-col animate-spin">
          {/* LINE */}
          <div className="h-1/3 w-full flex items-center justify-center">
            <div className="h-3 w-3 bg-slate-400 rounded-full"></div> 	
          </div>

          {/* LINE */}
          <div className="h-1/3 w-full flex items-center justify-around">
            <div className="h-3 w-3 bg-slate-400 rounded-full"></div>
            <div className="h-3 w-3 bg-transparent rounded-full"></div>
            <div className="h-3 w-3 bg-slate-400 rounded-full"></div>
          </div>

          {/* LINE */}
          <div className="h-1/3 w-full flex items-center justify-center">
            <div className="h-3 w-3 bg-slate-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
