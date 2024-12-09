import Link from 'next/link';
import Image from 'next/image';

export default function Section() {
    return(
        <div className='section-bgr flex'>
            <div className='mx-14 my-12'>
                <div className='text-section-title mb-2'>WHEN</div>
                <div className='text-section-text text-2xl mb-4'>Tuesday,12 March<br />10:00AM - 12:00PM<br />(AEDT)</div>
                <div className='text-section-title mb-2'>WHERE</div>
                <div className='text-section-text text-2xl mb-2'>Canberra</div>
                <div className='text-section-note mb-4'>Microsoft Offices<br />Level 4, HWL Ebsworth Lawyers Building<br />6 National Circuit<br />Barton, ACT 2600</div>
                <Link href="/" className="text-section-register cursor-pointer flex items-center">Register for another city
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2'>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.27916 11.3673C3.64044 11.7166 3.93332 12 3.93332 12L10.125 6.00007C10.125 6.00007 9.84534 5.71679 9.48406 5.36744L3.93332 0C3.93332 0 3.6404 0.283272 3.27912 0.632625C2.91783 0.981978 2.625 1.26512 2.625 1.26512L7.52158 6L2.625 10.7349C2.625 10.7349 2.91788 11.0179 3.27916 11.3673Z" fill="#7E9FFF"/>
                    </svg>
                </Link>
            </div>
            <div className='mx-32 my-12'>
                <div className='text-section-title mb-2'>AGENDA</div>
                <div className='grid grid-cols-1 gap-y-2'>
                  {posts.length ? (
                    

                  ):(
                    // Render thông báo khi không có dữ liệu
                    <div className="no-data">
                      <p>No posts available.</p>
                    </div>
                  )}
                  <div>
                    <h1>REGISTRATION</h1>
                    <h2>Light refreshments</h2>
                  </div>
                  <div>
                    <h1>MICROSOFT KEYNOTE</h1>
                    <h2>15 mins</h2>
                  </div>
                  <div>
                    <h1>THE MODERN THREAT LANDSCAPE</h1>
                    <h2>15 mins <br /> A presentation on the threats and advantages of AI, and the steps you can take to protect your business.</h2>
                  </div>
                  <div>
                    <h1>AI-Assisted Defence</h1>
                    <h2>15 mins<br />A demonstration of Microsoft's new AI Security Copilot.</h2>
                  </div>
                  <div>
                    <h1>Bridging the Cyber Security Skills Gap</h1>
                    <h2>30 mins<br/>Microsoft and LAB³ answer your questions and provide guidance on meeting modern cybersecurity challenges.</h2>
                  </div>
                  <div>
                    <h1>Close and Networking</h1>
                    <h2>10 mins<br/>Microsoft and LAB³ answer your questions and provide guidance on meeting modern cybersecurity challenges.</h2>
                  </div>
                </div>
            </div>
        </div>
    )
}