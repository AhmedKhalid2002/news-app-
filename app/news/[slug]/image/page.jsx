import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image'
import React from 'react'

export default function ImagePage({params}) {
    console.log(params);
    const newItems=DUMMY_NEWS.find((news)=>news.slug===params.slug);
    if(!newItems){
        notFound();
    }
  return (
    <div className='fullscreen-imge'>
        <h1>Ahmed</h1>
        <Image
            src={`/images/news/${newItems?.image}`}
            alt={params.slug}
            width={600}
            height={400}
        />
    </div>
  )
}
