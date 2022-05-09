import React, {FC, useState} from "react";

export interface IDropDownItem {
  title: string,
  content: string
}

export const DropDownItem: FC<IDropDownItem> = (params) => {
  const {
    title, content
  } = params;

  const[open,setOpen] = useState(false);

  return (
    <div className="border-black border-t px-6 py-8">
      <div className=" cursor-pointer" onClick={() => setOpen(!open)} >
        {open?<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>:<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>}
        <div className="inline-block font-bold ml-3">{title}</div>
      </div>
      {open?<div className="animation-fade-in ml-5">{content}</div>:<></>}
    </div>
  )
}