# Nhận xét bài làm

## Tổng quan
### Tổ chức thư mục
Để file hơi lộn xộn. Có nhiều cách sắp xếp file. Em tham khảo cách sau:
```css
.
├── home.html
├── shop.html
├── contact.html
├── cart.html
├── blog.html
├── css/
│   ├── style.css /*CSS dùng chung giữa các trang*/
│   ├── home.css
│   ├── shop.css
│   ├── contact.css
│   ├── cart.css
│   └── blog.css
├── js/
│   ├── index.js /*JS dùng chung */
│   ├── home.js
│   ├── shop.js
│   ├── contact.js
│   ├── cart.js
│   └── blog.js
├── asset/
│   ├── universal/ /*các file (hình ảnh, logo,...) dùng chung */
│   ├── home/
│   │   └── image1.png /*file ví dụ*/
│   ├── shop/
│   ├── contact/
│   ├── cart/
│   └── blog/
└── component/ /*những thành phần dùng chung*/
    ├── header.html /*header đầu trang*/
    ├── footer.html
    └── nav.html
```

## HTML
Những section nên có tên rõ ràng thay vì `sec-x`. Tuy nhiên, cái icon người có dấu chấm than tên là `person alert` nha. Có nhiều icon vẫn để hình.

## CSS
`<button>` nên thêm vào `cursor: pointer` và thay đổi hiệu ứng khi hover. CSS nên thêm responsive để được điểm cao hơn.

## JS
Các đoạn code nào dùng chung thì để ra 1 file riêng, không cần copy paste lại.