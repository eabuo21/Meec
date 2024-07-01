import React, { useEffect } from "react";
import Bhero from "../Components/Blogs/Bhero";
import News from "../Components/Blogs/News/News";
import Insight from "../Components/Blogs/Compinsights/insights";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-container w-full h-[fixed] flex flex-col  gap-16 relative bg-dance_blue p-2 ">
      <Bhero className="" />
      <News className="   pt-9 " />
      <Insight className=" pt-9" />
    </div>
  );
};

export default Blogs;
