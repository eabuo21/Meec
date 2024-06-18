import React from "react";

const Cs2 = () => {
  return (
    <div className="image-holder-cs2 w-full md:w-full">
      <img
        src="https://st2.depositphotos.com/2810065/10037/i/450/depositphotos_100378414-stock-photo-portrait-of-a-smiling-customer.jpg"
        srcSet="
          https://st2.depositphotos.com/2810065/10037/i/450/depositphotos_100378414-stock-photo-portrait-of-a-smiling-customer.jpg,
         https://st2.depositphotos.com/2810065/10037/i/450/depositphotos_100378414-stock-photo-portrait-of-a-smiling-customer.jpg 300w,
         https://st2.depositphotos.com/2810065/10037/i/450/depositphotos_100378414-stock-photo-portrait-of-a-smiling-customer.jpg 150w,
                https://st2.depositphotos.com/2810065/10037/i/450/depositphotos_100378414-stock-photo-portrait-of-a-smiling-customer.jpg 595w
        "
        sizes="(max-width: 600px) 100vw, 400px"
        alt="csr-image"
        className="w-full h-full shadow-current shadow-md"
      />
    </div>
  );
};

export default Cs2;
