import React, { useState, useEffect } from 'react';
//Nhập React và các hook useState và useEffect từ thư viện React. 
//useState được sử dụng để quản lý trạng thái của component
//useEffect được dùng để thực hiện các hiệu ứng phụ (side effects) như thiết lập và dọn dẹp các interval.

const slides = [
  { id: 1, url: '/slide_image_1.png' },
  { id: 2, url: '/slide_image_2.jpg' },
  { id: 3, url: '/slide_image_3.jpg' },
];
//Định nghĩa một mảng các đối tượng, mỗi đối tượng đại diện cho một slide với các thuộc tính id và url

const Slide_show = () => {
//Khởi tạo một functional component có tên là Slideshow
  const [currentSlide, setCurrentSlide] = useState(0);
  //Khai báo state currentSlide với giá trị khởi tạo là 0, đại diện cho chỉ số của slide hiện tại. 
  //setCurrentSlide là hàm để cập nhật giá trị của currentSlide.
  useEffect(() => {
  //Thiết lập một effect để thực hiện các side effects khi component được render. 
  //Trong trường hợp này, effect được sử dụng để thiết lập một interval.
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      //Cập nhật giá trị của currentSlide bằng cách tăng giá trị hiện tại và lấy modulo với tổng số slides, 
      //đảm bảo rằng khi đạt đến slide cuối cùng, nó quay lại slide đầu tiên.
    }, 3000);
    //Thiết lập một interval để cập nhật currentSlide mỗi 3 giây. 
    //setInterval sẽ gọi hàm bên trong sau mỗi 3 giây.
    return () => clearInterval(interval); 
    //Trả về một hàm dọn dẹp, sẽ được gọi khi component unmount hoặc khi effect cần được cập nhật. 
    //Hàm này dừng interval để tránh rò rỉ bộ nhớ.
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  //Hàm để chuyển đến slide kế tiếp.
  //Cập nhật currentSlide bằng cách tăng giá trị hiện tại và quay lại đầu nếu đã đến slide cuối cùng.

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };
  //Hàm để chuyển đến slide trước đó. 
  //Cập nhật currentSlide bằng cách giảm giá trị hiện tại và quay lại cuối nếu đã đến slide đầu tiên.

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-between px-4"
      >
        <button
          className="slide-button "
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="slide-button "
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
      <div className="w-full h-96">
        <img
          src={slides[currentSlide].url}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slide_show;
