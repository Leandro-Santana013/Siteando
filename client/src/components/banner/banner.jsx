import React from 'react'
import "./banner.css"

export const Banner = () => {
    return (
        <div className="container-banner">

            <h1
                className="text-container"
                style={{
                    position: "absolute",
                    top: "30%",
                    left: "50%",
                    transform: "translate(-20%, -30%)",
                    fontFamily: "Arial, sans-serif",
                    lineHeight: "1.2",
                    fontSize: "55px",
                    textAlign: "left",
                    zIndex: "1", // Coloca o texto abaixo da bolinha
                }}
            >
                <span className="text">Productive</span>
                <br />
                <span className="text" >Free and easy</span>
                <br />
                <span className="text" style={{ fontWeight: "bold" }}>New.</span>
            </h1>
            <p className='text-block'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis natus laudantium commodi sequi fugiat cum laboriosam quasi, nisi, aliquam repellat dicta modi deserunt dignissimos quod totam voluptatem sed aut. Animi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis natus laudantium commodi sequi fugiat cum laboriosam quasi, nisi, aliquam repellat dicta modi deserunt dignissimos quod totam voluptatem sed aut. Animi.</p>
            <svg width="100%" height="700" viewBox="0 0 700 700" className="svg-container" style={{
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: "2", // Coloca o SVG acima do texto
                pointerEvents: "none", // Impede interação com o SVG
            }}>
                {/* Caminho do círculo */}
                <circle
                    cx="190"
                    cy="290"
                    r="250"
                    fill="none"
                    stroke="black"
                    strokeWidth="1"

                />
                {/* Bolinha seguindo o círculo */}

                <circle cx="0"
                    cy="0"
                    r="30"
                    fill="black"
                    style={{
                        mixBlendMode: "difference", // Cria o efeito de inversão de cores
                    }}>
                    <animateMotion
                        dur="5s"
                        repeatCount="indefinite"
                        path="M 190,40 A 250,250 0 1,1 189,40 Z" />
                </circle>

                <path
                    d="M5.24873 496.077C2.24713 493.345 0.706944 489.058 0.610964 483.291C0.514998 477.524 1.86611 470.34 4.57737 461.909C9.99896 445.052 20.8213 423.325 36.1559 398.21C66.8206 347.988 115.474 284.302 174.85 219.064C234.226 153.827 293.063 99.41 340.186 64.166C363.751 46.542 384.365 33.728 400.639 26.748C408.778 23.2573 415.804 21.2378 421.554 20.792C427.305 20.3462 431.718 21.4772 434.719 24.209C437.721 26.941 439.261 31.2279 439.357 36.9951C439.453 42.762 438.102 49.946 435.39 58.377C429.969 75.234 419.147 96.961 403.812 122.076C373.147 172.298 324.494 235.984 265.118 301.222C205.742 366.459 146.905 420.876 99.7819 456.12C76.2172 473.744 55.6029 486.558 39.3286 493.538C31.19 497.029 24.1642 499.048 18.4136 499.494C12.6629 499.94 8.25032 498.809 5.24873 496.077Z"
                    fill="none"
                    stroke="black"
                />


                <circle cx="0" cy="130" r="20" fill="black">
                    <animateMotion
                        dur="8s"
                        repeatCount="indefinite"
                        path="M5.24873 366.077C2.24713 363.345 0.706944 359.058 0.610964 353.291C0.514998 347.524 1.86611 340.34 4.57737 331.909C9.99896 315.052 20.8213 293.325 36.1559 268.21C66.8206 217.988 115.474 154.302 174.85 89.064C234.226 23.827 293.063 -30.5899 340.186 -65.8337C363.751 -83.458 384.365 -96.272 400.639 -103.252C408.778 -106.743 415.804 -108.7622 421.554 -109.208C427.305 -109.6538 431.718 -108.5228 434.719 -105.791C437.721 -103.059 439.261 -98.7721 439.357 -93.0049C439.453 -87.2379 438.102 -80.0536 435.39 -71.6232C429.969 -54.7656 419.147 -33.0394 403.812 -7.924C373.147 42.298 324.494 105.984 265.118 171.222C205.742 236.459 146.905 290.876 99.7819 326.12C76.2172 343.744 55.6029 356.558 39.3286 363.538C31.19 367.029 24.1642 369.048 18.4136 369.494C12.6629 369.94 8.25032 368.809 5.24873 366.077Z"
                    />
                </circle>


                <path
                    d="M315.567 668.181C334.088 652.641 346.56 633.486 351.769 615.102C356.978 596.714 354.913 579.152 344.459 566.693C334.005 554.235 317.068 549.151 298.055 551.089C279.045 553.026 258.017 561.982 239.496 577.523C220.975 593.063 208.503 612.217 203.295 630.602C198.085 648.99 200.151 666.552 210.604 679.011C221.058 691.469 237.995 696.553 257.008 694.615C276.018 692.678 297.047 683.722 315.567 668.181Z"
                    fill="none"
                    stroke="black"
                />

                <path
                    d="M248.664 654.972C255.235 661.46 264.856 663.678 275.157 661.95C285.456 660.222 296.394 654.549 305.506 645.32C314.618 636.092 320.15 625.083 321.747 614.762C323.344 604.441 321.003 594.849 314.432 588.361C307.861 581.873 298.241 579.655 287.94 581.383C277.641 583.111 266.703 588.784 257.591 598.013C248.479 607.242 242.947 618.25 241.35 628.571C239.753 638.893 242.094 648.485 248.664 654.972Z"
                    stroke="black"
                    fill="none"
                />

                <circle cx="0" cy="0" r="10" fill="black" >
                    <animateMotion
                        dur="8s"
                        repeatCount="indefinite"
                        path="M248.664 654.972C255.235 661.46 264.856 663.678 275.157 661.95C285.456 660.222 296.394 654.549 305.506 645.32C314.618 636.092 320.15 625.083 321.747 614.762C323.344 604.441 321.003 594.849 314.432 588.361C307.861 581.873 298.241 579.655 287.94 581.383C277.641 583.111 266.703 588.784 257.591 598.013C248.479 607.242 242.947 618.25 241.35 628.571C239.753 638.893 242.094 648.485 248.664 654.972Z"

                    />
                </circle>

                <path
                    d="M713.165 100.867C719.787 93.2113 719.993 81.1174 714.745 67.6128C709.506 54.1317 698.873 39.38 684.072 26.5784C669.271 13.7768 653.141 5.38144 639.045 2.14011C624.925 -1.10689 612.988 0.840172 606.366 8.49607C599.744 16.152 599.538 28.2459 604.786 41.7505C610.025 55.2316 620.658 69.9832 635.459 82.7849C650.26 95.5865 666.39 103.982 680.486 107.223C694.606 110.47 706.544 108.523 713.165 100.867Z"
                    stroke="black"
                    fill="none"

                />

            </svg>
            <p className='conteiner-news'>New.</p>
            <div className='circle-banner' />

            <div className='circle-banner1' />
        </div>
    )
}
