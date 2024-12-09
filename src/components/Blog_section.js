
const posts = [
    {
      id: 1,
      title: 'Dong Mo Lake',
      href: '#',
      description:
        'Dự án bảo tồn thiên nhiên và du lịch sinh thái hồ Đồng Mô.',
      detail: 'CHI TIẾT HD',
      category: { title: 'Marketing', href: '#' },
      place: 'Thạch Thất, Hà Nội.',
      calendar:'Vào thứ 3, thứ 5 hàng tuần.',
      imageUrl:
        '/blog_image_1.png',
    },
    {
      id: 2,
    title: 'Dong Mo Lake',
    href: '#',
    description:
      'Dự án bảo tồn thiên nhiên và du lịch sinh thái hồ Đồng Mô.',
    detail: 'CHI TIẾT HD',
    category: { title: 'SEO', href: '#' },
    place: 'Thạch Thất, Hà Nội.',
    calendar:'Vào thứ 3, thứ 5 hàng tuần.',
    imageUrl:
      '/blog_image_2.png',
  },
  {
    id: 3,
    title: 'Dong Mo Lake',
    href: '#',
    description:
      'Dự án bảo tồn thiên nhiên và du lịch sinh thái hồ Đồng Mô.',
    detail: 'CHI TIẾT HD',
    category: { title: 'Content', href: '#' },
    place: 'Thạch Thất, Hà Nội.',
    calendar:'Vào thứ 3, thứ 5 hàng tuần.',
    imageUrl:
      'blog_image_3.png',
    },
    // More posts...
  ];
  export default function Blog_section() {
    return (
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16  lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.length ? (
              posts.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between rounded-lg shadow-lg overflow-hidden">
                <div className="w-full h-48 relative">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover rounded-t-lg" />
                  {/*ảnh*/}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  {/*độ mờ*/}
                  <div className='absolute top-0 right-0 p-2 '>
                  
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="16" fill="url(#paint0_linear_3968_756)"/>
                    <path d="M24.0003 10.2858C24.0003 11.4982 23.5186 12.661 22.6613 13.5183C21.804 14.3756 20.6413 14.8572 19.4289 14.8572C18.2164 14.8572 17.0537 14.3756 16.1964 13.5183C15.3391 12.661 14.8574 11.4982 14.8574 10.2858C14.8574 9.07337 15.3391 7.91061 16.1964 7.0533C17.0537 6.19599 18.2164 5.71436 19.4289 5.71436C20.6413 5.71436 21.804 6.19599 22.6613 7.0533C23.5186 7.91061 24.0003 9.07337 24.0003 10.2858ZM21.3972 8.0928C21.3236 8.04871 21.2421 8.01954 21.1572 8.00696C21.0723 7.99439 20.9858 7.99865 20.9026 8.01952C20.8194 8.04038 20.7412 8.07743 20.6723 8.12855C20.6034 8.17967 20.5452 8.24386 20.5012 8.31746L18.973 10.8644L18.2586 10.1499C18.1359 10.0273 17.9696 9.95843 17.7962 9.95843C17.6228 9.95843 17.4565 10.0273 17.3338 10.1499C17.2112 10.2726 17.1423 10.4389 17.1423 10.6123C17.1423 10.7857 17.2112 10.9521 17.3338 11.0747L18.3448 12.0843C18.45 12.1897 18.5779 12.2698 18.7187 12.3184C18.8595 12.3669 19.0095 12.3828 19.1574 12.3646C19.3052 12.3465 19.447 12.2949 19.5719 12.2137C19.6968 12.1325 19.8015 12.024 19.8782 11.8962L21.6218 8.9888C21.6659 8.91523 21.6951 8.83368 21.7077 8.74883C21.7202 8.66397 21.716 8.57747 21.6951 8.49427C21.6743 8.41106 21.6372 8.33278 21.5861 8.2639C21.535 8.19501 21.4708 8.13687 21.3972 8.0928Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8569 14.8578C21.9018 15.5751 20.7147 16.0002 19.4283 16.0002C16.2724 16.0002 13.714 13.4419 13.714 10.2859C13.714 8.99956 14.1391 7.81245 14.8564 6.85742H11.9997C11.242 6.85742 10.5152 7.15845 9.97942 7.69428C9.4436 8.23011 9.14258 8.95685 9.14258 9.71463V24.5721C9.14267 24.6775 9.17188 24.7808 9.227 24.8706C9.28211 24.9604 9.36097 25.0332 9.45487 25.0809C9.54877 25.1287 9.65405 25.1496 9.75908 25.1413C9.8641 25.133 9.96479 25.0958 10.05 25.0339L15.9997 20.7069L21.9494 25.0339C22.0347 25.0958 22.1353 25.133 22.2404 25.1413C22.3454 25.1496 22.4507 25.1287 22.5446 25.0809C22.6385 25.0332 22.7173 24.9604 22.7724 24.8706C22.8276 24.7808 22.8568 24.6775 22.8569 24.5721V16.9068V14.8578Z" fill="white"/>
                    <defs>
                    <linearGradient id="paint0_linear_3968_756" x1="-15.3333" y1="10.6667" x2="36.6667" y2="35.3333" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#AA2261"/>
                    <stop offset="1" stop-color="#F55155"/>
                    </linearGradient>
                    </defs>
                    </svg>
                
                  </div>
                  {/*icon phía góc trên*/}
                  <div className="absolute bottom-0 left-0 p-4 text-left text-white flex items-center font-medium">
                    <img src='/blog_logo.png' alt='DongMoLake' className='pr-2'></img> {/*icon góc dưới*/}
                    {post.title}
                  <span className="inline-flex items-center ml-6 mr-2">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.6752 15.3741H16.8606V13.6106C16.8606 13.442 16.7918 13.2808 16.6702 13.1624C16.5486 13.0441 16.3844 12.9781 16.2136 12.9781C16.0429 12.9781 15.8786 13.0441 15.7571 13.1624C15.6355 13.2808 15.5666 13.442 15.5666 13.6106V15.3741H13.7521C13.5813 15.3741 13.4171 15.4401 13.2955 15.5584C13.1739 15.6768 13.1051 15.838 13.1051 16.0066C13.1051 16.1752 13.1739 16.3364 13.2955 16.4547C13.4171 16.573 13.5813 16.639 13.7521 16.639H15.5666V18.4026C15.5666 18.5712 15.6355 18.7324 15.7571 18.8507C15.8786 18.969 16.0429 19.035 16.2136 19.035C16.3844 19.035 16.5486 18.969 16.6702 18.8507C16.7918 18.7324 16.8606 18.5712 16.8606 18.4026V16.639H18.6752C18.8459 16.639 19.0102 16.573 19.1317 16.4547C19.2533 16.3364 19.3222 16.1752 19.3222 16.0066C19.3222 15.838 19.2533 15.6768 19.1317 15.5584C19.0102 15.4401 18.8459 15.3741 18.6752 15.3741Z" fill="white" stroke="white" stroke-width="0.2"/>
                      <path d="M9.54143 11.8495C8.21251 12.3439 7.0614 13.2105 6.23502 14.3425C5.36919 15.5284 4.9026 16.947 4.9 18.4025V18.4027C4.9 18.8537 5.0841 19.2857 5.41089 19.6038C5.7376 19.9218 6.18013 20.1 6.64103 20.1H12.1111C12.2819 20.1 12.4461 20.034 12.5677 19.9157C12.6893 19.7973 12.7581 19.6362 12.7581 19.4676C12.7581 19.2989 12.6893 19.1378 12.5677 19.0194C12.4461 18.9011 12.2819 18.8351 12.1111 18.8351H6.64103C6.52161 18.8351 6.40762 18.7889 6.32398 18.7075C6.24044 18.6262 6.19402 18.5165 6.19402 18.4027C6.1959 16.8773 6.81923 15.4143 7.92821 14.3349C9.03729 13.2553 10.5416 12.6476 12.1112 12.6457C12.1112 12.6457 12.1112 12.6457 12.1112 12.6457L12.1111 12.5457L9.54143 11.8495ZM8.92906 8.28607C8.92908 7.67465 9.11534 7.07673 9.46463 6.5679C9.81396 6.05901 10.3108 5.66198 10.8925 5.42742C11.4743 5.19286 12.1146 5.13145 12.7324 5.25106C13.3502 5.37067 13.9173 5.66585 14.3621 6.09886C14.8069 6.53184 15.1096 7.08316 15.2321 7.68295C15.3547 8.28272 15.2918 8.90443 15.0513 9.46957C14.8108 10.0347 14.4033 10.5183 13.88 10.8586C13.3567 11.199 12.7411 11.3808 12.1112 11.3809C11.2667 11.38 10.4575 11.0531 9.86106 10.4726C9.26476 9.89214 8.9299 9.10573 8.92906 8.28607Z" fill="white" stroke="white" stroke-width="0.2"/>
                    </svg> {/*icon*/}

                    2300

                    <svg width="1" height="16" viewBox="0 0 1 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2'>
                      <line x1="0.5" y1="0.5" x2="0.499999" y2="15.5" stroke="white" stroke-linecap="round"/>
                    </svg> {/*icon gạch sọc*/}

                  </span>
                  <span className="inline-flex items-center">

                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z" stroke="white"/>
                    <path d="M17.5166 10.2075C17.4545 10.0166 17.2896 9.87741 17.0909 9.84854L13.8998 9.38483L12.4726 6.49316C12.3838 6.31316 12.2004 6.19922 11.9997 6.19922C11.799 6.19922 11.6157 6.31316 11.5269 6.4932L10.0997 9.38487L6.90855 9.84858C6.70992 9.87744 6.54486 10.0166 6.48285 10.2075C6.42083 10.3984 6.47258 10.608 6.6163 10.7481L8.92547 12.9989L8.38033 16.1772C8.34641 16.375 8.42772 16.575 8.59011 16.6929C8.75253 16.8109 8.96779 16.8265 9.14547 16.7331L11.9997 15.2325L14.854 16.7331C15.033 16.8272 15.2482 16.81 15.4094 16.6929C15.5718 16.575 15.6531 16.375 15.6192 16.1772L15.074 12.9989L17.3832 10.7481C17.5269 10.6079 17.5786 10.3984 17.5166 10.2075Z" fill="white"/>
                  </svg> {/*icon*/}

                  8.5/10

                  </span>
                  </div>
                </div>

                <div className="group relative mt-4">
                  <p className=" mx-4 my-2 text-lg leading-6 font-semibold text-gray-600"> {post.description}</p>
                  <span className="inline-flex items-center mx-4">
                    {/*icon*/}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3968_759)">
                      <rect width="24" height="24" rx="12" fill="#F6F6F6"/>
                      <path d="M15.5 24L12 20C16.8 12.8 16 7 15 5C17.5 7.16667 22 10.5 24.5 12.5C25.3 22.1 18.8333 24.1667 15.5 24Z" fill="url(#paint0_linear_3968_759)"/>
                      <path d="M12 4C8.69158 4 6 6.74766 6 10.125C6 11.2061 6.2798 12.2689 6.80911 13.1986C6.93251 13.4153 7.07045 13.6266 7.21916 13.8264L11.7393 20H12.2607L16.7808 13.8264C16.9295 13.6266 17.0675 13.4154 17.1909 13.1986C17.7202 12.2689 18 11.2061 18 10.125C18 6.74766 15.3084 4 12 4ZM12 12.1562C10.9028 12.1562 10.0102 11.245 10.0102 10.125C10.0102 9.00497 10.9028 8.09375 12 8.09375C13.0972 8.09375 13.9898 9.00497 13.9898 10.125C13.9898 11.245 13.0972 12.1562 12 12.1562Z" fill="#FFB01C"/>
                      <path d="M12 4V8.09375C13.0972 8.09375 13.9898 9.00497 13.9898 10.125C13.9898 11.245 13.0972 12.1562 12 12.1562V20H12.2607L16.7809 13.8264C16.9296 13.6266 17.0675 13.4154 17.1909 13.1986C17.7202 12.2689 18 11.2061 18 10.125C18 6.74766 15.3084 4 12 4Z" fill="#FF9400"/>
                      </g>
                      <defs>
                      <linearGradient id="paint0_linear_3968_759" x1="12" y1="13.5" x2="22.5" y2="20" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#D4D4D4"/>
                      <stop offset="1" stop-color="#FCFCFC" stop-opacity="0"/>
                      </linearGradient>
                      <clipPath id="clip0_3968_759">
                      <rect width="24" height="24" rx="12" fill="white"/>
                      </clipPath>
                      </defs>
                      </svg> 
                    {/*icon*/}

                      {post.place}
                    </span>
                    <span className="inline-flex items-center mx-4 mb-4">
                    {/*icon*/}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3968_767)">
                      <rect width="24" height="24" rx="12" fill="#F6F6F6"/>
                      <path d="M14.5 27L7 19L18.5 5.5L25.8934 13.8792C26.0431 12.967 26.1008 13.2946 26 14L25.8934 13.8792C25.7955 14.4756 25.6581 15.6022 25.5 17.5C25.1 22.3 18.1667 26.8333 14.5 27Z" fill="url(#paint0_linear_3968_767)"/>
                      <path d="M5 7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V9H5V7Z" fill="#E43434"/>
                      <path d="M12 5H17C18.1046 5 19 5.89543 19 7V9H12V5Z" fill="#CB1D1D"/>
                      <path d="M5 9H19V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V9Z" fill="#FFD9A0"/>
                      <path d="M12 9H19V17C19 18.1046 18.1046 19 17 19H12V9Z" fill="#F6CD8F"/>
                      <ellipse cx="8" cy="12" rx="1" ry="1" fill="white"/>
                      <circle cx="12" cy="12" r="1" fill="white"/>
                      <ellipse cx="12" cy="16" rx="1" ry="1" fill="white"/>
                      <ellipse cx="16" cy="12" rx="1" ry="1" fill="#F6F6F6"/>
                      <circle cx="16" cy="16" r="1" fill="#F6F6F6"/>
                      </g>
                      <defs>
                      <linearGradient id="paint0_linear_3968_767" x1="10.5" y1="11.5" x2="17" y2="21.5" gradientUnits="userSpaceOnUse">
                      <stop offset="0.125" stop-color="#D5D5D5"/>
                      <stop offset="1" stop-color="white" stop-opacity="0"/>
                      </linearGradient>
                      <clipPath id="clip0_3968_767">
                      <rect width="24" height="24" rx="12" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                    {/*icon*/}
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