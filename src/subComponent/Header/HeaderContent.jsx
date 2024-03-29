import { PlayCircle } from "react-bootstrap-icons";

function HeaderContent() {
  return (
    <div className="grid grid-cols-2 w-full h-[90vh] py-5">
      <div className="max-w-md flex flex-col justify-end">
        <p className="text-[#293FCC] text-[14px] font-semibold bg-[rgba(255,255,255,0.8)] w-fit px-5 py-2 rounded-[10px] ">
          Welcome QuickSpace
        </p>
        <h1 className="text-[44px] font-semibold my-4 leading-[70px] text-[#090f4e] ">
          Satisfied Customer Is the Best Business Strategy
        </h1>
        <p className="text-gray-400 text-[16px] mb-10 leading-[32px] ">
          Backed with vast experience and fully up to date skills <br /> set, at
          Enuke Software offer the best in class <br /> E-Prescription solution
        </p>
        <div className="flex items-center ">
          <a
            href="#"
            className=" text-lg font-semibold bg-[rgb(41,63,204)] hover:bg-opacity-70 px-11 py-4 text-white  rounded-[6px] "
          >
            Try Free
          </a>
          <a href="#" className="mx-7 flex items-center space-x-2">
            <PlayCircle className="size-6 fill-[rgb(41,63,204)]" />
            <span className="text-[#090f4e]">View Demo</span>
          </a>
        </div>
      </div>

      <div className="flex justify-start items-end py-12 px-9  w-full border border-red-500">
        <div className="rectangle relative">
          <div>
            <div className="absolute bottom-0 left-6">
              <img src="/image/3D image.svg" alt="background3D" />
            </div>
          </div>

          <div>
            <div className="absolute bg-mark z-10 top-[-45px] left-[-80px]">
              <img
                src="/image/Mask Copy 3.svg"
                alt="maskCopy3"
                className="size-12"
              />
            </div>
            <div className="absolute top-[-18px] left-[-55px] bg-[#FFFFFF] w-fit p-3 flex flex-col justify-center rounded-sm">
              <p className="text-[#090F4E] font-semibold text-xs leading-6">
                Great Designer
              </p>
              <div className="flex space-x-1">
                <img src="/image/Frame.svg" alt="star" />
                <img src="/image/Frame.svg" alt="star" />
                <img src="/image/Frame.svg" alt="star" />
                <img src="/image/Frame.svg" alt="star" />
                <img src="/image/Frame.svg" alt="star" />
              </div>
            </div>
          </div>

          <div>
            <div className="absolute  bottom-[-42px] left-[-110px]">
              <div className="flex justify-center items-center bg-[#ffff] p-3 rounded-2xl w-[245px]">
                <img
                  src="/image/notification-2.svg"
                  alt="notification"
                  className="bg-notification size-12 p-2 mr-5"
                />
                <div>
                  <p className="text-[#858A8F] text-[13px] leading-[22px]">
                    Notification
                  </p>
                  <p className="text-[14px] leading-[20px] font-semibold">
                    Send a message to Ilya Zinchenko
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="absolute bottom-16 right-[-150px]">
              <div className="flex justify-between items-center bg-[#ffff] p-4   rounded-2xl w-[245px]">
                <div className="relative">
                  <div className="bg-mark border-4 border-white ring-2 ring-blue-700 rounded-full">
                    <img
                      src="/image/bg copy 2.svg"
                      alt="maskCopy2"
                      className="m-auto"
                    />
                  </div>
                  <div className="mark-online absolute top-[-1px] right-[-4px]"></div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex flex-col">
                    <p className="text-[#535783] font-semibold text-sm">
                      Gavin Henry
                    </p>
                    <p className="text-[#8589AE] font-semibold text-[13px] [font-family:sans-serif]">
                      1m ago
                    </p>
                  </div>
                </div>
                <div className="text-notification size-9 flex justify-center items-center">
                  <p className="text-[13px] text-white  [font-family:sans-serif]">
                    1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
