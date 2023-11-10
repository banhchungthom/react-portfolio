import styles from "../style";
import DownloadCV from "./DownloadCV";

const Hero = () => {
  return (
    <section>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-blue-600/100 rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Chào mừng đến với trang web của tôi</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[40px] text-white ss:leading-[100.8px] leading-[75px]">
            Xin chào, tôi là <br className="sm:block hidden" />{" "}
            <span className="text-blue-600/100">NGUYỄN QUANG DƯƠNG</span>
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[60px] text-[40px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Business Analyst.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Với kinh nghiệm trong việc phân tích thông tin và tối ưu hóa quy trình làm việc 
        trong môi trường doanh nghiệp, khả năng đưa ra giải pháp hiệu quả, 
        tôi tự tin rằng mình có thể đóng góp đáng kể vào sự phát triển của tổ chức của bạn.
        </p>
        <div className="my-8">
          <DownloadCV />
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}> 
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  )
}

export default Hero