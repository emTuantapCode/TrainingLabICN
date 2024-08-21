import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { nav_bar_dataMock as data } from '../../mock/nav_bar_data';

export default function Nav_bar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
  //Hiển thị trên pc
    <nav className="bg-white py-4 px-6 shadow-md flex">
      <div className="container mx-auto flex justify-between items-center">
  {/* hình ảnh logo */}
        <Link href="/">
          <Image
            src="/nav_logo.png"
            alt="logo home"
            width={170}
            height={100}
          />
        </Link>
  {/* các địa chỉ nav */}
        <div className='hidden md:flex space-x-10 ml-auto'>
          {data.navs.length ? (
                  data.navs.map((nav) => (
                      <div key={nav.id} >
                        <Link href="/">
                          <span className="nav-link">{nav.title}</span>
                        </Link>
                      </div>
                    ))
                ):(
                  // Render thông báo khi không có dữ liệu
                <div className="no-data">
                <p>No posts available.</p>
                </div>
                )
          }
        </div>
  {/* các icon thêm */}
        <div className='hidden md:flex space-x-4 ml-auto'>
          {data.icons.length ? (
                  data.icons.map((icon) => (
                      <div key={icon.id}>
                        <Link href="/">
                          <span className="cursor-pointer">{icon.link}</span>
                        </Link>
                      </div>
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
{/* Hiển thị trên mobile */}
        <div className="md:hidden flex items-center space-x-2">
{/* các icon thêm */}
        {data.icons.length ? (
                  data.icons.map((icon) => (
                      <div key={icon.id}>
                        <Link href="/">
                          <span className="cursor-pointer">{icon.link}</span>
                        </Link>
                      </div>
                    ))
                ):(
                  // Render thông báo khi không có dữ liệu
                <div className="no-data">
                <p>No posts available.</p>
                </div>
                )
          }
{/* icon 3 gạch hiện ra nav */}
          <button onClick={toggleMobileMenu} className="ml-4 text-blue-500 focus:outline-none">
            {/* icon 3 gạch */}
            {data.HamburgerIcon.link}

          </button>
        </div>
{/* các nav bên trong hiện ra */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute right-0 top-16 flex flex-col space-y-4 bg-white shadow-lg py-4 px-6 z-10">
          {data.navs.length ? (
                  data.navs.map((nav) => (
                      <div key={nav.id} >
                        <Link href="/">
                          <span className="nav-link">{nav.title}</span>
                        </Link>
                      </div>
                    ))
                ):(
                  // Render thông báo khi không có dữ liệu
                <div className="no-data">
                <p>No posts available.</p>
                </div>
                )
          }
        </div>
      )}
    </nav>
  );
}





