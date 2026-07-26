import { LoaderCircle } from "lucide-react";

export default function Loading() {
    return (
      <div className="flex flex-col h-full w-full items-center justify-center">
        {/* <div className="w-full flex flex-row items-center rounded-full justify-center">
          <LoaderCircle
            size={80}
            className="animate-spin text-blue-500"
            strokeWidth={2.5}
          />
        </div> */}
        <div className="flex flex-row items-center justify-center gap-2">
          <div>
                    <p>Data is loading {"  "}</p>
          </div>
          <div>
            <div className="flex gap-x-8 ">
              <span
                className="h-4 w-4 animate-ping rounded-full bg-black"
                style={{ animationDelay: "0ms" }}
              ></span>
              <span
                className="h-4 w-4 animate-ping rounded-full bg-blue-500"
                style={{ animationDelay: "150ms" }}
              ></span>
              <span
                className="h-4 w-4 animate-ping rounded-full bg-slate-400"
                style={{ animationDelay: "300ms" }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    );
}
