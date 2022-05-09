import React from "react";

import { DropDownItem, IDropDownItem } from '../../components/DropDownItem';

const dropdowndata: IDropDownItem[] = [
  { title: 'What is The Possessed?', content: 'A contained outbreak of 10,000 animated NFTs.' },
  { title: 'What do I get with the NFT?', content: 'Every Possessed NFT will include a fully animated character with 2 static pfps - one of each state (Blessed and Possessed). Holders will be able to select which state to use as their pfp.' },
  { title: 'When does The Possessed mint?', content: 'The mint will take place between April and June of 2022 - no specific date is set yet. Our focus is to create the best possible collection we can; unique traits, good variation, exciting rares and a contract that is safe and gas efficient. The mint date will be announced on all PSSSSD official accounts with plenty of notice.' },
  { title: 'What is the utility of The Possessed?', content: "The PSSSSD lab is dedicated to enhancing your creativity. We'll be releasing a roadmap of future experiments in the coming weeks and months." },
  { title: "Is there a Discord?", content: "The PSSSSD Lab is now open. You can enter here." },
  { title: "What are the Clinical Trials?", content: "The Possessed Clinical Trials is commonly known as a whitelist or allowlist etc. To gain access to the trials you must be selected as a Test Subject." },
  { title: "How do I become a Test Subject?", content: "We are constantly adding new Test Subjects to the trials via Twitter. We're rewarding community members who are early, engaged, kind, patient and creative. Some have become Test Subjects by discovering hidden messages in our content - others by helping out fellow members of the posse. We are also partnering with other great projects to bring access to their communities." },
  { title: "How do I stay updated and safe?", content: "Follow the official PSSSSD twitter account. All announcements will be made there. We will never surprise mint. Be careful of copycats, scammers and always check you are on the official twitter or website." },
]

const Info = () => {
  return (
    <div className="section-beige py-8 px-4 z-30 relative">
      <div className="container mx-auto flex flex-col md:flex-row md:space-x-3 space-x-0 md:space-y-0 space-y-3">
        <div className=" border border-black md:w-1/2">
          <h2>FAQs</h2>
          {
            dropdowndata.map((d, i) => (
              <DropDownItem key={i} title={d.title} content={d.content} />
            ))
          }

        </div>
        <div className=" border border-black md:w-1/2">
          <h2>TEAM</h2>
          <div className="creator">
            <div className="flex items-end space-x-5">
              <img src={`${process.env.PUBLIC_URL}/img/furrAvatar-V5TVEJEG.svg`} className="w-16 mb-4" alt="" />
              <img src={`${process.env.PUBLIC_URL}/img/barcode-furr-XMXTHTJK.svg`} className="barcode" alt="" />
            </div>
            <h3 className="mb-4">JOE
              <a className="underline" href="https://twitter.com/whatthefurr" target="_blank" rel="noreferrer noopener">@whathefurr</a>
              <br />Artist &amp; Co-Creator</h3><p>Leading creative experiments in the Lab. Working away in a dark room to bring to life new ideas and identify the growing number of Possessed traits.</p>
            <p className="my-4">
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" className="h-5 w-5 inline mr-2 align-text-bottom" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
              <a href="https://mirror.xyz/whatthefurr.eth/glbQ_atZlEQj3UFhM3THuXKm4dj8C-G_yAkMFTlf4Vo" target="_blank" className="underline" rel="noreferrer noopener">Read more about Joe here</a>
            </p>
          </div>
          <div className="creator">
            <div className="flex items-end space-x-5">
              <img src={`${process.env.PUBLIC_URL}/img/tmwAvatar-A7ECAWWV.svg`} className="w-16 mb-4" alt="" />
              <img src={`${process.env.PUBLIC_URL}/img/barcode-furr-XMXTHTJK.svg`} className="barcode" alt="" />
            </div>
            <h3 className="mb-4">JOE
              <a className="underline" href="https://twitter.com/whatthefurr" target="_blank" rel="noreferrer noopener">@whathefurr</a>
              <br />Artist &amp; Co-Creator</h3><p>Mad scientist turned good. Heading up the technical development at pssssd labs, building state of the art technology to enhance the Possessed experience.</p>
            <p className="my-4">
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" className="h-5 w-5 inline mr-2 align-text-bottom" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
              <a href="https://mirror.xyz/whatthefurr.eth/glbQ_atZlEQj3UFhM3THuXKm4dj8C-G_yAkMFTlf4Vo" target="_blank" className="underline" rel="noreferrer noopener">Read more about Joe here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info;