import Link from 'next/link';
import Image from 'next/image';
import { agendaMock as data } from '../../mock/agenda';

function formatTime(time) {
    const [hours, minutes] = time.split(':');
    const hoursInt = parseInt(hours);
    const period = hoursInt >= 12 ? 'PM' : 'AM';
    const formattedHours = hoursInt % 12 || 12; // Chuyển đổi về 12 giờ và xử lý trường hợp 12 giờ
    return `${formattedHours}:${minutes} ${period}`;
}

export default function Section() {
  const formattedStartTime = formatTime(data.when.start_time);
    const formattedEndTime = formatTime(data.when.end_time);
    
    return(
        <div className='section-bgr flex flex-col md:flex-row'>
            <div className='mx-12 my-12 w-3/5 sm:w-4/5'>
                <div className='the-first-title'>{data.when.title}</div>
                <div className='text-section-text text-2xl mb-4'>{data.when.date}<br />{formattedStartTime} - {formattedEndTime}<br />{data.when.zone_code}</div>
                <div className='the-first-title'>{data.where.title}</div>
                <div className='text-section-text text-2xl mb-2 uppercase'>{data.where.location}</div>
                <div className='text-section-note mb-4' dangerouslySetInnerHTML={{ __html: data.where.description }}></div>
                <Link href="/" className="text-section-register cursor-pointer flex items-center">{data.where.link.url_text}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2'>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.27916 11.3673C3.64044 11.7166 3.93332 12 3.93332 12L10.125 6.00007C10.125 6.00007 9.84534 5.71679 9.48406 5.36744L3.93332 0C3.93332 0 3.6404 0.283272 3.27912 0.632625C2.91783 0.981978 2.625 1.26512 2.625 1.26512L7.52158 6L2.625 10.7349C2.625 10.7349 2.91788 11.0179 3.27916 11.3673Z" fill="#7E9FFF"/>
                    </svg>
                </Link>
            </div>
            <div className='mx-12 my-12'>
                <div className='the-first-title'>{data.what.title}</div>
                <div className='relative grid grid-cols-1'>
                {data.what.items.length ? (
                  data.what.items.map((item) => (
                      <div key={item.id} className="flex-1 min-w-[200px] px-4 pb-4  relative">
                        <div className=''>
                        {data.what.icon}
                        {item.id < 6 && <div className="absolute w-[1px] bg-section-timeline left-0 top-7 bottom-0 -translate-x-1/2"></div>}
                        </div>
                        <h2 className="text-lg font-semibold text-section-text">{item.title}</h2>
                        {item.time && <p className="text-sm text-section-note ">{item.time}</p>}
                        {item.description && <p className="text-sm text-section-note">{item.description}</p>}
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
        </div>
    )
}