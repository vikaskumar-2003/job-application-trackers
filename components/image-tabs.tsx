"use client"


import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";
import { useState } from "react";

export default function ImageTabs(){


    const[activeTab,setActiveTab]=useState("organize")

    return(

    <section className=" py-16 border-t bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="flex gap-2 justify-center mb-9 ">
                <Button onClick={()=>setActiveTab("organize")} className={`rounded-lg px-6 py-3 font-medium transition-colors ${activeTab==="organize"?"bg-primary text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`} >Organize Application</Button>
                <Button onClick={()=>setActiveTab("hired")} className={`rounded-lg px-6 py-3 font-medium transition-colors ${activeTab==="hired"?"bg-primary text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`}  >Track Progress</Button>
                <Button  onClick={()=>setActiveTab("board")} className={`rounded-lg px-6 py-3 font-medium transition-colors ${activeTab==="board"?"bg-primary text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`}  >Manage Board</Button>
              </div>
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl " >
                {activeTab=="organize"&&
                <Image
                  src={"/hero-images/hero1.png"}
                  alt="0rganize Applications"
                  width={1200}
                  height={800}
                />}

                {activeTab=="hired"&&
                <Image
                  src={"/hero-images/hero2.png"}
                  alt="0rganize Applications"
                  width={1200}
                  height={800}
                />}

                {activeTab=="board"&&
                <Image
                  src={"/hero-images/hero3.png"}
                  alt="0rganize Applications"
                  width={1200}
                  height={800}
                />
                 }
              </div>
            </div>
          </div>
        </section>)

}