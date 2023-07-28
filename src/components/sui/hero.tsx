import React from "react"
import poster from "./images/poster.png"

export const Hero = (props: React.ComponentProps<"div">) => {
  return (
    <div className="flex flex-col" {...props}>
      <img src={poster} />

      <div className="flex flex-col pt-14 pb-20 justify-center items-center text-center">
        <h1 className="text-6xl font-semibold leading-tight">
          Antalpha HackerHouse
        </h1>
        <h1 className="text-6xl font-semibold underline decoration-2 decoration-double decoration-blue-700">
          # MOVE
        </h1>
        <p className="text-3xl leading-normal text-web-gray/70 mt-6">
          Sep 3rd - Sep 24th, 2023
        </p>
        <p className="text-3xl leading-normal text-web-gray/70">@Dali, China</p>
        <a
          href="http://google.com"
          target="_blank"
          rel="external"
          className="inline-flex py-4 px-10 uppercase text-xs font-semibold bg-web-black text-white rounded-sm border border-web-black mt-6 hover:opacity-80 transition"
        >
          Apply to join
        </a>
      </div>
    </div>
  )
}
