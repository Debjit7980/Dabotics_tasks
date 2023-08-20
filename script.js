const wrapper=document.querySelector(".wrapper"),
qrcode=document.querySelector(".form input"),
genBtn=document.querySelector(".form button"),
qrImg=document.querySelector(".qr-code img");

genBtn.addEventListener("click",()=>{
    let qrVal=qrcode.value;
    if(!qrVal) 
    {
        
        return;
    }
    genBtn.innerText="Generating QR Code..."
    qrImg.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrVal} `;
    qrImg.addEventListener("load",()=>{
        genBtn.innerText="Generate QR Code"
        wrapper.classList.add("active");
    });
    
});