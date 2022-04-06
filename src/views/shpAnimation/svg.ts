export function makeVilliageByColor(text, color) {
    if (color === 'orange') {
        return makeVilliage(text, '#FFAF37')
    } else if (color === 'blue') {
        return makeVilliage(text, '#1AA2E7')
    }
}
var uniqueNumber = ((
    function(){
        var value = 0;
        return function(){
            return ++value;
        };
    }
)());
export function makeVilliage(text, color) {
    let id = uniqueNumber()
    let str = `
            <path opacity="0.5" d="M113.879 95.9069C113.976 96.1603 114.042 96.4175 114.076 96.678L112.588 96.8694C112.597 96.9383 112.602 97.0071 112.602 97.0762C112.602 97.1452 112.597 97.214 112.588 97.2829L114.076 97.4743C114.042 97.7348 113.976 97.9921 113.879 98.2454L112.479 97.7072C112.425 97.8478 112.35 97.9969 112.251 98.1538L113.519 98.955C113.383 99.1711 113.223 99.3837 113.042 99.5926L111.909 98.6086C111.783 98.754 111.638 98.9027 111.472 99.0536L112.481 100.163C112.292 100.335 112.088 100.504 111.868 100.67L110.964 99.4737C110.789 99.6054 110.601 99.737 110.399 99.868L111.214 101.127C110.997 101.268 110.768 101.406 110.529 101.541L109.791 100.235C109.589 100.35 109.377 100.462 109.154 100.574L109.826 101.915C109.594 102.031 109.354 102.145 109.106 102.256L108.493 100.887C108.273 100.985 108.046 101.082 107.811 101.177L108.372 102.568C108.13 102.666 107.881 102.761 107.627 102.854L107.113 101.445C106.882 101.529 106.645 101.611 106.402 101.692L106.873 103.116C106.625 103.198 106.371 103.278 106.112 103.356L105.68 101.92C105.441 101.992 105.197 102.062 104.949 102.13L105.345 103.577C105.092 103.646 104.834 103.713 104.573 103.778L104.211 102.323C103.966 102.383 103.718 102.442 103.465 102.499L103.796 103.963C103.539 104.021 103.279 104.077 103.015 104.13L102.715 102.661C102.466 102.712 102.214 102.761 101.959 102.808L102.231 104.283C101.972 104.33 101.711 104.376 101.446 104.42L101.202 102.94C100.951 102.981 100.697 103.021 100.44 103.058L100.658 104.543C100.398 104.581 100.134 104.617 99.8682 104.652L99.6754 103.164C99.4217 103.197 99.1657 103.228 98.9073 103.257L99.0755 104.748C98.8127 104.777 98.5477 104.805 98.2807 104.831L98.1364 103.338C97.8814 103.363 97.6244 103.385 97.3655 103.406L97.4865 104.902C97.2233 104.923 96.9582 104.942 96.6915 104.96L96.5933 103.463C96.3369 103.48 96.0787 103.495 95.819 103.508L95.8949 105.006C95.6304 105.019 95.3643 105.031 95.0968 105.041L95.043 103.542C94.7857 103.551 94.527 103.558 94.2669 103.564L94.299 105.063C94.0346 105.069 93.769 105.073 93.5021 105.075L93.4914 103.575C93.3617 103.576 93.2318 103.576 93.1016 103.576C92.9713 103.576 92.8414 103.576 92.7118 103.575L92.7011 105.075C92.4342 105.073 92.1685 105.069 91.9041 105.063L91.9362 103.564C91.6762 103.558 91.4174 103.551 91.1602 103.542L91.1063 105.041C90.8388 105.031 90.5728 105.019 90.3083 105.006L90.3841 103.508C90.1244 103.495 89.8663 103.48 89.6098 103.463L89.5116 104.96C89.2449 104.942 88.9799 104.923 88.7167 104.902L88.8377 103.406C88.5787 103.385 88.3217 103.363 88.0667 103.338L87.9224 104.831C87.6554 104.805 87.3904 104.777 87.1276 104.748L87.2958 103.257C87.0375 103.228 86.7814 103.197 86.5277 103.164L86.3349 104.652C86.0691 104.617 85.8056 104.581 85.5447 104.543L85.7628 103.058C85.5063 103.021 85.2524 102.981 85.0014 102.94L84.757 104.42C84.4925 104.376 84.2309 104.33 83.9722 104.283L84.2439 102.808C83.9889 102.761 83.737 102.712 83.4886 102.661L83.1882 104.13C82.9245 104.077 82.6641 104.021 82.4072 103.963L82.7377 102.499C82.4854 102.442 82.237 102.383 81.9926 102.323L81.6303 103.778C81.3687 103.713 81.1112 103.646 80.858 103.577L81.2541 102.13C81.0057 102.062 80.7621 101.992 80.5233 101.92L80.0909 103.356C79.8322 103.278 79.5785 103.198 79.3299 103.116L79.8015 101.692C79.5585 101.611 79.3215 101.529 79.0905 101.445L78.5762 102.854C78.3217 102.761 78.0733 102.666 77.8313 102.568L78.3924 101.177C78.1575 101.082 77.9301 100.985 77.7105 100.887L77.0973 102.256C76.8492 102.145 76.609 102.031 76.377 101.915L77.0487 100.574C76.8265 100.462 76.6143 100.35 76.4122 100.235L75.674 101.541C75.435 101.406 75.2065 101.268 74.9889 101.127L75.8042 99.868C75.602 99.737 75.4138 99.6054 75.2396 99.4737L74.3347 100.67C74.1155 100.504 73.911 100.335 73.7218 100.163L74.7314 99.0536C74.5656 98.9027 74.4201 98.754 74.2937 98.6086L73.1615 99.5926C72.98 99.3837 72.8204 99.1711 72.6839 98.955L73.952 98.1538C73.8529 97.9969 73.7784 97.8478 73.7244 97.7072L72.3243 98.2454C72.2269 97.9921 72.1606 97.7348 72.1271 97.4743L73.6149 97.2829C73.606 97.214 73.6016 97.1452 73.6016 97.0762C73.6016 97.0071 73.606 96.9383 73.6149 96.8694L72.1271 96.678C72.1606 96.4175 72.2269 96.1603 72.3243 95.9069L73.7244 96.4452C73.7784 96.3045 73.8529 96.1555 73.952 95.9986L72.6839 95.1974C72.8204 94.9813 72.98 94.7686 73.1615 94.5598L74.2937 95.5438C74.4201 95.3983 74.5656 95.2497 74.7314 95.0988L73.7218 93.9894C73.911 93.8172 74.1155 93.6481 74.3347 93.4823L75.2396 94.6787C75.4138 94.5469 75.602 94.4153 75.8042 94.2844L74.9889 93.0253C75.2065 92.8844 75.435 92.7464 75.674 92.6112L76.4122 93.917C76.6143 93.8028 76.8265 93.6899 77.0487 93.5786L76.377 92.2374C76.609 92.1212 76.8492 92.0074 77.0972 91.8963L77.7105 93.2653C77.9301 93.1669 78.1575 93.0702 78.3924 92.9755L77.8313 91.5844C78.0733 91.4867 78.3217 91.3914 78.5762 91.2986L79.0905 92.7076C79.3215 92.6233 79.5585 92.5409 79.8015 92.4604L79.3299 91.0365C79.5785 90.9542 79.8322 90.874 80.0909 90.7961L80.5233 92.2325C80.7621 92.1606 81.0057 92.0906 81.2541 92.0226L80.858 90.5758C81.1112 90.5065 81.3687 90.4392 81.6303 90.3741L81.9926 91.8297C82.237 91.7689 82.4854 91.7099 82.7377 91.6529L82.4072 90.1898C82.6641 90.1318 82.9245 90.0758 83.1882 90.0219L83.4886 91.4915C83.737 91.4407 83.9889 91.3918 84.2439 91.3448L83.9722 89.8696C84.2309 89.822 84.4925 89.7763 84.757 89.7327L85.0014 91.2126C85.2524 91.1712 85.5063 91.1315 85.7628 91.0938L85.5447 89.6098C85.8056 89.5714 86.0691 89.535 86.3349 89.5006L86.5277 90.9881C86.7814 90.9552 87.0375 90.9242 87.2958 90.8951L87.1276 89.4045C87.3904 89.3749 87.6554 89.3471 87.9224 89.3213L88.0667 90.8144C88.3217 90.7897 88.5787 90.7669 88.8377 90.7459L88.7167 89.2508C88.9799 89.2295 89.2449 89.2101 89.5116 89.1926L89.6098 90.6894C89.8663 90.6726 90.1244 90.6576 90.3841 90.6444L90.3083 89.1463C90.5728 89.1329 90.8388 89.1214 91.1063 89.1118L91.1602 90.6108C91.4174 90.6016 91.6762 90.5942 91.9362 90.5886L91.9041 89.089C92.1685 89.0833 92.4342 89.0795 92.7011 89.0776L92.7118 90.5776C92.8414 90.5766 92.9713 90.5762 93.1016 90.5762C93.2318 90.5762 93.3617 90.5766 93.4914 90.5776L93.5021 89.0776C93.769 89.0795 94.0346 89.0833 94.299 89.089L94.2669 90.5886C94.527 90.5942 94.7857 90.6016 95.043 90.6108L95.0968 89.1118C95.3643 89.1214 95.6304 89.1329 95.8949 89.1463L95.819 90.6444C96.0787 90.6576 96.3369 90.6726 96.5933 90.6894L96.6915 89.1926C96.9582 89.2101 97.2233 89.2295 97.4865 89.2508L97.3655 90.7459C97.6244 90.7669 97.8814 90.7897 98.1364 90.8144L98.2807 89.3213C98.5477 89.3471 98.8127 89.3749 99.0755 89.4045L98.9073 90.8951C99.1657 90.9242 99.4217 90.9552 99.6754 90.9881L99.8682 89.5006C100.134 89.535 100.398 89.5714 100.658 89.6098L100.44 91.0938C100.697 91.1315 100.951 91.1712 101.202 91.2126L101.446 89.7326C101.711 89.7763 101.972 89.822 102.231 89.8696L101.959 91.3448C102.214 91.3918 102.466 91.4407 102.715 91.4915L103.015 90.0219C103.279 90.0758 103.539 90.1318 103.796 90.1898L103.465 91.6529C103.718 91.7099 103.966 91.7689 104.211 91.8297L104.573 90.3741C104.834 90.4392 105.092 90.5065 105.345 90.5758L104.949 92.0226C105.197 92.0906 105.441 92.1606 105.68 92.2325L106.112 90.7961C106.371 90.874 106.625 90.9542 106.873 91.0365L106.402 92.4604C106.645 92.5409 106.882 92.6233 107.113 92.7076L107.627 91.2986C107.881 91.3914 108.13 91.4867 108.372 91.5844L107.811 92.9755C108.046 93.0702 108.273 93.1669 108.493 93.2653L109.106 91.8963C109.354 92.0074 109.594 92.1212 109.826 92.2374L109.154 93.5786C109.377 93.6899 109.589 93.8028 109.791 93.917L110.529 92.6112C110.768 92.7464 110.997 92.8844 111.214 93.0253L110.399 94.2844C110.601 94.4153 110.789 94.5469 110.964 94.6787L111.868 93.4823C112.088 93.6481 112.292 93.8172 112.481 93.9894L111.472 95.0988C111.638 95.2497 111.783 95.3983 111.909 95.5438L113.042 94.5598C113.223 94.7686 113.383 94.9813 113.519 95.1974L112.251 95.9986C112.35 96.1555 112.425 96.3045 112.479 96.4452L113.879 95.9069Z" stroke="#E3EDFF" stroke-width="3" stroke-linejoin="round" stroke-dasharray="0.8 0.8"/>
            <path opacity="0.9" d="M102.618 98.4324C101.937 99.071 100.789 99.6288 99.2978 100.045C97.807 100.461 96.0317 100.718 94.1665 100.79C92.3012 100.862 90.4181 100.744 88.7233 100.451C87.0286 100.157 85.5877 99.6987 84.5585 99.1258C83.5293 98.5528 82.9516 97.8874 82.8886 97.2025C82.8256 96.5175 83.2798 95.8394 84.2014 95.2425C85.1231 94.6456 86.4765 94.1529 88.1135 93.8185C89.7505 93.484 91.6079 93.3207 93.4821 93.3464L93.099 97.0771L102.618 98.4324Z" fill="${color}"/>
            <path d="M5.56089 17.5729C4.85589 14.1624 7.45803 10.9636 10.9407 10.9596L179.577 10.7647C183.005 10.7608 185.601 13.8587 184.998 17.2326L175.404 70.8972C174.934 73.5265 172.643 75.4379 169.972 75.4292L21.8821 74.9459C19.2804 74.9374 17.0406 73.1071 16.5139 70.5593L5.56089 17.5729Z" fill="url(#paint0_linear_3384_1920_${id})" fill-opacity="0.4" stroke="url(#paint1_linear_3384_1920_${id})"/>
            <path d="M13.7879 21.9424C13.2946 19.7515 14.963 17.6696 17.2088 17.6737L172.608 17.9568C174.782 17.9607 176.426 19.9237 176.049 22.064L168.202 66.6087C167.906 68.2903 166.439 69.5128 164.732 69.5014L27.0644 68.5819C25.4364 68.571 24.0308 67.439 23.6732 65.8507L13.7879 21.9424Z" fill="url(#paint2_linear_3384_1920_${id})" fill-opacity="0.6" stroke="url(#paint3_linear_3384_1920_${id})"/>
            <g filter="url(#filter0_d_3384_1920)">
            <text x="60" y="50" fill="white" style="font-size:25px;">${text}</text>
            </g>
            <defs>
            <filter id="filter0_d_3384_1920" x="31.4219" y="25.1562" width="123.293" height="36.4102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3384_1920"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3384_1920" result="shape"/>
            </filter>
            <<linearGradient id="paint0_linear_3384_1920_${id}" x1="95.4995" y1="4.80303" x2="96.6351" y2="79.0734"
                            gradientUnits="userSpaceOnUse">
                <stop stop-color="${color}" stop-opacity="0"/>
                <stop offset="1" stop-color="${color}"/>
            </linearGradient>
            <linearGradient id="paint1_linear_3384_1920_${id}" x1="95.0344" y1="12.5859" x2="94.6128" y2="75.6046"
                            gradientUnits="userSpaceOnUse">
                <stop stop-color="white" stop-opacity="0"/>
                <stop offset="1" stop-color="${color}"/>
            </linearGradient>
            <linearGradient id="paint2_linear_3384_1920_${id}" x1="18.9327" y1="44.5703" x2="172.32" y2="45.9877"
                            gradientUnits="userSpaceOnUse">
                <stop stop-color="${color}" stop-opacity="0.34"/>
                <stop offset="0.484375" stop-color="${color}"/>
                <stop offset="1" stop-color="${color}" stop-opacity="0.34"/>
            </linearGradient>
            <linearGradient id="paint3_linear_3384_1920_${id}" x1="94.8001" y1="17.0325" x2="93.313" y2="70.3957"
                            gradientUnits="userSpaceOnUse">
                <stop stop-color="white" stop-opacity="0"/>
                <stop offset="0.494279" stop-color="white"/>
                <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            </defs>
    `;
    return str;
}


export function getCurrentPlaceLabel(x: number, y: number, scale: number, name: string, enName: string) {
    return `<g :transform="\`translate(${x} ${y}) scale(${scale})\`">
    <g opacity="0.5" filter="url(#filter0_d)">
      <path
        d="M291.199 353.522C291.199 349.171 288.082 344.928 282.286 341.39C276.489 337.852 268.304 335.195 258.878 333.792C249.451 332.39 239.256 332.311 229.723 333.568C220.189 334.825 211.795 337.355 205.718 340.802C199.64 344.249 196.184 348.441 195.834 352.789C195.484 357.138 198.258 361.426 203.766 365.051C209.274 368.676 217.241 371.457 226.548 373.004C235.856 374.55 246.038 374.785 255.667 373.675L254.551 371.827C245.806 372.835 236.557 372.622 228.103 371.217C219.649 369.812 212.413 367.286 207.41 363.994C202.407 360.701 199.888 356.807 200.206 352.857C200.524 348.907 203.663 345.099 209.183 341.969C214.703 338.838 222.327 336.54 230.987 335.398C239.646 334.257 248.905 334.328 257.467 335.602C266.029 336.876 273.464 339.289 278.729 342.503C283.994 345.717 286.824 349.57 286.824 353.522H291.199Z"
        fill="#C2EBFF"
      />
    </g>
    <g opacity="0.8" filter="url(#filter1_d)">
      <path
        d="M215.16 343.429C210.413 346.004 207.6 349.163 207.106 352.471C206.612 355.778 208.462 359.072 212.402 361.898C216.342 364.724 222.179 366.944 229.107 368.252C236.036 369.56 243.717 369.892 251.092 369.203C258.468 368.513 265.176 366.835 270.293 364.4C275.41 361.966 278.685 358.894 279.666 355.607C280.647 352.321 279.287 348.981 275.772 346.049C272.258 343.116 266.762 340.734 260.041 339.231L258.663 340.422C264.823 341.8 269.861 343.983 273.083 346.672C276.304 349.36 277.551 352.421 276.652 355.433C275.752 358.446 272.751 361.262 268.06 363.494C263.37 365.725 257.221 367.263 250.46 367.896C243.699 368.528 236.658 368.224 230.307 367.024C223.956 365.825 218.606 363.791 214.994 361.2C211.383 358.609 209.686 355.59 210.139 352.558C210.592 349.527 213.171 346.631 217.522 344.27L215.16 343.429Z"
        fill="#C2EBFF"
      />
    </g>
    <g filter="url(#filter2_d)">
      <path
        d="M266.349 353.522C266.349 358.835 256.121 363.142 243.503 363.142C230.885 363.142 220.656 358.835 220.656 353.522C220.656 348.209 230.885 343.902 243.503 343.902C256.121 343.902 266.349 348.209 266.349 353.522ZM235.549 353.522C235.549 355.371 239.11 356.871 243.503 356.871C247.895 356.871 251.456 355.371 251.456 353.522C251.456 351.672 247.895 350.173 243.503 350.173C239.11 350.173 235.549 351.672 235.549 353.522Z"
        fill="#C2EBFF"
      />
    </g>
    <g filter="url(#filter3_d)">
      <rect x="239.895" y="60.1211" width="8.01633" height="294.199" fill="url(#paint0_linear)" />
    </g>
    <circle opacity="0.3" cx="243.903" cy="48.098" r="48.098" fill="#16ECFF">
      <animate
        attributeName="r"
        attributeType="XML"
        from="0"
        to="48.098"
        begin="0s"
        dur="6s"
        fill="remove"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        attributeType="XML"
        from="0.3"
        to="0"
        begin="0s"
        dur="6s"
        fill="remove"
        repeatCount="indefinite"
      />
    </circle>
    <circle opacity="0.3" cx="243.903" cy="48.098" r="32.0653" fill="#16ECFF">
      <animate
        attributeName="r"
        attributeType="XML"
        from="0"
        to="48.098"
        begin="3s"
        dur="6s"
        fill="remove"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        attributeType="XML"
        from="0.3"
        to="0"
        begin="3s"
        dur="2s"
        fill="remove"
        repeatCount="indefinite"
      />
    </circle>
    <path
      d="M258.331 48.0974C258.331 56.0665 251.871 62.5268 243.902 62.5268C235.933 62.5268 229.473 56.0665 229.473 48.0974C229.473 40.1282 235.933 33.668 243.902 33.668C251.871 33.668 258.331 40.1282 258.331 48.0974ZM238.13 48.0974C238.13 51.285 240.714 53.8691 243.902 53.8691C247.09 53.8691 249.674 51.285 249.674 48.0974C249.674 44.9097 247.09 42.3256 243.902 42.3256C240.714 42.3256 238.13 44.9097 238.13 48.0974Z"
      fill="#16ECFF"
    />
    <text
      class="village-icon-name"
      text-anchor="end"
      x="179.816"
      y="50.5664"
      fill="#fff"
      font-size="37"
    >${name}</text>
    <rect
      x="172.816"
      y="79.5664"
      width="12.2748"
      height="4.60307"
      transform="rotate(-90 172.816 79.5664)"
      fill="#16ECFF"
    />
    <text
      class="village-icon-name-en"
      text-anchor="end"
      x="162.816"
      y="79.5664"
      fill="#fff"
      opacity="0.6"
      font-size="18"
    >${enName}</text>
    <defs>
      <filter
        id="filter0_d"
        x="189.667"
        y="328.077"
        width="107.669"
        height="53.9598"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1.53436" />
        <feGaussianBlur stdDeviation="3.06871" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.333333 0 0 0 0 1 0 0 0 0.4 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <filter
        id="filter1_d"
        x="200.89"
        y="334.627"
        width="85.2235"
        height="42.5971"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1.53436" />
        <feGaussianBlur stdDeviation="3.06871" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.333333 0 0 0 0 1 0 0 0 0.4 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <filter
        id="filter2_d"
        x="214.519"
        y="339.299"
        width="57.9679"
        height="31.514"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1.53436" />
        <feGaussianBlur stdDeviation="3.06871" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.333333 0 0 0 0 1 0 0 0 0.4 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <filter
        id="filter3_d"
        x="233.757"
        y="57.0524"
        width="20.2912"
        height="306.474"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="3.06871" />
        <feGaussianBlur stdDeviation="3.06871" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="243.903"
        y1="60.1211"
        x2="243.903"
        y2="354.32"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#16ECFF" />
        <stop offset="1" stop-color="#006E78" stop-opacity="0" />
      </linearGradient>
    </defs>
  </g>`
}
