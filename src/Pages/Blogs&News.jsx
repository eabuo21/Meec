import React, { useEffect } from "react";
import Bhero from "../Components/Blogs/Bhero";
import News from "../Components/Blogs/News/News";
import Insight from "../Components/Blogs/Compinsights/insights";
import Sub from "../Components/Blogs/Compinsights/insights2";
import Subscribe from "../Components/Blogs/Compinsights/Subscribe";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-container w-full h-[fixed] flex flex-col  gap-16 relative bg-dance_blue p-2 ">
      <Bhero className="" />
      <News className="   pt-9 " />
      <Insight className=" pt-9" />
      <Sub className="pt-2"/>
      <Subscribe className=" pt-2 "/>
    </div>
  );
};

export default Blogs;
