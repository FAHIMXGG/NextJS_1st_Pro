import Image from 'next/image'
import React from 'react'
import { notFound } from "next/navigation"

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: 'no-store' })

  if (!res.ok) {
    return notFound()
  }
  return res.json()
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc
  }
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div>
      <div className='mt-10 flex justify-between items-center rev gap-20'>
        <div className='flex flex-col gap-5 flex-1'>
          <h1 className='text-2xl font-bold'>{data.title}</h1>
          <h1 className='text-sm font-bold'>User Name: {data.username}</h1>
          <p>{data.body}
          </p>
          <p>
            {data.desc}
          </p>
        </div>
        <div className='flex relative h-[500px] flex-1'>
        <Image
              className="object-cover"
              fill={true}
              src={data.img}
              alt=""
            />
        </div>
      </div>
      <div>
        <h1>{data.content}</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quisquam!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore omnis non assumenda, suscipit ab, eaque minima corporis sequi odio magnam qui pariatur debitis nam exercitationem illum harum quod labore voluptatibus vero! Sint nesciunt odit ullam temporibus consectetur commodi facilis sunt fugit molestiae? Veniam voluptas nostrum optio ea dolorem, cupiditate non distinctio neque sit nulla laudantium odio eveniet exercitationem. Illo voluptatum eveniet consequatur repudiandae provident quasi deleniti, distinctio esse sit odio consequuntur dolor, adipisci officiis, recusandae fugit neque nobis aut eaque vel fugiat omnis! Suscipit quia quidem nemo corrupti odio saepe!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde modi deserunt rem fugit quos officiis? Error itaque ea reprehenderit ad soluta quod necessitatibus similique, quasi velit officiis dolorem blanditiis commodi. Expedita vero facilis alias possimus voluptate repellat earum! Quasi eligendi libero eveniet nihil, neque doloribus ipsam unde. Quas inventore dolorem in eius! Tempora nam id at saepe minima quibusdam fugit ut quisquam eligendi exercitationem quas nobis hic consequuntur totam delectus quae alias necessitatibus deserunt cumque error, atque beatae. Rerum explicabo natus odio. Numquam beatae magnam quaerat vero. Minima fugit qui eligendi veritatis enim, quasi dolore aspernatur sed animi labore, consectetur officiis neque nesciunt nam, porro nobis? Dolore porro soluta error eligendi numquam nulla id recusandae neque ad. Sapiente exercitationem delectus sunt earum expedita accusamus consectetur, ipsam fugiat sed sequi eligendi dolores quis veritatis hic numquam perferendis in commodi modi veniam reiciendis vel repudiandae quo. Cupiditate placeat beatae officia similique sit!</p>
      </div>
    </div>
  )
}

export default BlogPost
