import { blog_section_dataMock as data } from '../../mock/blog_section_data';

  export default function Blog_section() {
    return (
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16  lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {data.posts.length ? (
              data.posts.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between rounded-lg shadow-lg overflow-hidden">
                <div className="w-full h-48 relative">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover rounded-t-lg" />
                  {/*ảnh*/}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  {/*độ mờ*/}
                  <div className='absolute top-0 right-0 p-2 '>
                    {data.decoration.icon_conner}
                  </div>
                  {/*icon phía góc trên*/}
                  <div className="absolute bottom-0 left-0 p-4 text-left text-white flex justify-between items-center w-full font-medium">
                    <div className="flex items-center">
                      <img src='/blog_logo.png' alt='DongMoLake' className='pr-2' />
                      {post.title}
                    </div>
                    <div className="flex items-center">
                      <span className="inline-flex items-center mr-2">
                        {data.decoration.icon_usermore}
                        {data.decoration.text_num}
                        {data.decoration.icon_line}
                      </span>
                      <span className="inline-flex items-center">
                        {data.decoration.icon_star}
                        {data.decoration.text_evaluate}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="group relative mt-4">
                  <p className=" mx-4 my-2 text-lg leading-6 font-semibold text-gray-600"> {post.description}</p>
                  <span className="inline-flex items-center mx-4">
                    {data.decoration.icon_place}
                    {post.place}
                  </span>
                  <span className="inline-flex items-center mx-4 mb-4">
                    {data.decoration.icon_calendar}
                    {post.calendar}
                  </span>
                </div>
              </article>
              ))
            ):(
                // Render thông báo khi không có dữ liệu
                <div className="no-data">
                <p>No posts available.</p>
                </div>
              )
            }
        </div>
      </div>
    </div>
  );
}