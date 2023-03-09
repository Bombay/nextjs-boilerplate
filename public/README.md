# Assets
https://nextjs.org/learn/basics/assets-metadata-css/assets

## 이미지 사용
```html
// 파일 위치 public/images/bono.jpg
<img src="/images/bono.jpg" alt="Logo" />
```
```jsx
// next/image 사용 시 (자동 최적화)
import Image from 'next/image';

const YourComponent = () => (
  <Image
    src="/images/bono.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);
```
