import React from 'react'
import "./footer.css"

export const Footer = () => {
    return (
        <div className='footer-object'>
            <svg width="210" height="210" viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path d="M148.569 157.607C128.739 172.023 106.523 179.176 86.6477 179.106C66.7722 179.035 49.2763 171.747 38.7921 157.327C28.3079 142.906 26.7706 124.015 32.8334 105.087C38.8961 86.159 52.5516 67.2312 72.3811 52.8144C92.2106 38.3977 114.427 31.2452 134.302 31.3155C154.178 31.3857 171.674 38.6741 182.158 53.0945C192.642 67.515 194.179 86.4058 188.116 105.334C182.054 124.262 168.398 143.19 148.569 157.607Z" stroke="black" />


                <circle cx="0" cy="0" r="10" fill="black">
                    <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        calcMode="paced"
                        path="M148.569 157.607C128.739 172.023 106.523 179.176 86.6477 179.106C66.7722 179.035 49.2763 171.747 38.7921 157.327C28.3079 142.906 26.7706 124.015 32.8334 105.087C38.8961 86.159 52.5516 67.2312 72.3811 52.8144C92.2106 38.3977 114.427 31.2452 134.302 31.3155C154.178 31.3857 171.674 38.6741 182.158 53.0945C192.642 67.515 194.179 86.4058 188.116 105.334C182.054 124.262 168.398 143.19 148.569 157.607Z"
                    />
                </circle>

                <rect x="-6" y="-6" width="18" height="18" fill="black">
                    <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        calcMode="paced"
                        path="M72.3811 52.8144C92.2106 38.3977 114.427 31.2452 134.302 31.3155C154.178 31.3857 171.674 38.6741 182.158 53.0945C192.642 67.515 194.179 86.4058 188.116 105.334C182.054 124.262 168.398 143.19 148.569 157.607C128.739 172.023 106.523 179.176 86.6477 179.106C66.7722 179.035 49.2763 171.747 38.7921 157.327C28.3079 142.906 26.7706 124.015 32.8334 105.087C38.8961 86.159 52.5516 67.2312 72.3811 52.8144Z"
                    />
                </rect>


                <polygon points="0,-10 12,10 -12,10" fill="black">
                    <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        calcMode="paced"
                        path="M38.7921 157.327C28.3079 142.906 26.7706 124.015 32.8334 105.087C38.8961 86.159 52.5516 67.2312 72.3811 52.8144C92.2106 38.3977 114.427 31.2452 134.302 31.3155C154.178 31.3857 171.674 38.6741 182.158 53.0945C192.642 67.515 194.179 86.4058 188.116 105.334C182.054 124.262 168.398 143.19 148.569 157.607C128.739 172.023 106.523 179.176 86.6477 179.106C66.7722 179.035 49.2763 171.747 38.7921 157.327Z"
                    />
                </  polygon>

                <path d="M131.988 135.18C120.527 143.512 107.693 147.641 96.2224 147.6C84.7515 147.56 74.6822 143.355 68.6544 135.064C62.6266 126.773 61.7317 115.897 65.2308 104.973C68.7298 94.0492 76.6153 83.1141 88.0763 74.7816C99.5373 66.449 112.371 62.3203 123.842 62.3608C135.313 62.4013 145.382 66.6066 151.41 74.8975C157.438 83.1884 158.332 94.0638 154.833 104.988C151.334 115.912 143.449 126.847 131.988 135.18Z" stroke="black" />
                <circle cx="0" cy="0" r="8" fill="black">
                    <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        path="M154.833 104.988C158.332 94.0638 157.438 83.1884 151.41 74.8975C145.382 66.6066 135.313 62.4013 123.842 62.3608C112.371 62.3203 99.5373 66.449 88.0763 74.7816C76.6153 83.1141 68.7298 94.0492 65.2308 104.973C61.7317 115.897 62.6266 126.773 68.6544 135.064C74.6822 143.355 84.7515 147.56 96.2224 147.6C107.693 147.641 120.527 143.512 131.988 135.18Z"
                    />
                </circle>
            </svg>

            <div className='perfil-footer'>
                <i class="fa-solid fa-circle-check"></i>
                <div className='icon-perfil'>
                    <i class="fa-solid fa-user"></i>
                </div>
                <div className='contentlines'>
                    <div class="line line1"></div>
                    <div class="line line2"></div>
                    <div class="line line3"></div>
                    <div class="line line4"></div>
                    <div class="line line5"></div>
                    <div class="line line6"></div>
                </div>
            </div>
        </div>
    )
}

