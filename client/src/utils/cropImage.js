// utils/cropImage.js
export default function getCroppedImg(imageSrc, cropAreaPixels) {
    return new Promise((resolve) => {
        const image = new Image();
        image.src = imageSrc;
        image.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = cropAreaPixels.width;
            canvas.height = cropAreaPixels.height;
            const ctx = canvas.getContext("2d");

            ctx.drawImage(
                image,
                cropAreaPixels.x,
                cropAreaPixels.y,
                cropAreaPixels.width,
                cropAreaPixels.height,
                0,
                0,
                cropAreaPixels.width,
                cropAreaPixels.height
            );

            canvas.toBlob((blob) => {
                resolve(blob);
            }, "image/jpeg");
        };
    });
}
