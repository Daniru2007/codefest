import { useState } from "react";
import classNames from "classnames";

import "../style/library.css";

function SVGBlob() {
  return (
    <div className="svg-blob">
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="100%"
        id="blobSvg"
      >
        <g transform="translate(144.48741149902344, 6.053840637207031)">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "rgb(0, 194, 255)" }}
              ></stop>
              <stop
                offset="100%"
                style={{ stopColor: "rgb(255, 0, 184)" }}
              ></stop>
            </linearGradient>
          </defs>
          <path className="blob" fill="url(#gradient)">
            <animate
              attributeName="d"
              dur={"25000ms"}
              repeatCount={"indefinite"}
              values="
              M440,310.5Q416,371,367.5,416.5Q319,462,252.5,455.5Q186,449,130.5,413Q75,377,39.5,313.5Q4,250,45.5,190.5Q87,131,137,93.5Q187,56,250.5,54.5Q314,53,375.5,83.5Q437,114,450.5,182Q464,250,440,310.5Z;
              M468,321Q446,392,384.5,434Q323,476,253,466Q183,456,130.5,415.5Q78,375,43.5,312.5Q9,250,37,182.5Q65,115,125.5,83.5Q186,52,250.5,50.5Q315,49,380.5,78Q446,107,468,178.5Q490,250,468,321Z;
              M442.5,309Q413,368,364.5,411Q316,454,246.5,464.5Q177,475,120,430.5Q63,386,52.5,318Q42,250,53.5,183Q65,116,121,71.5Q177,27,251.5,21.5Q326,16,369,74Q412,132,442,191Q472,250,442.5,309Z;
              M447.21542,320.52659Q444.43616,391.05319,382.83776,429.8617Q321.23936,468.67021,250.16755,467.64362Q179.09574,466.61702,114.76064,431.02394Q50.42553,395.43085,35.21011,322.71542Q19.99468,250,50.88032,188.7633Q81.76595,127.52659,129.90691,77.2633Q178.04787,27,251.5,24.11968Q324.95213,21.23936,375.81117,71.38032Q426.67021,121.52128,438.33245,185.76064Q449.99468,250,447.21542,320.52659Z;
              M465.11445,319.49682Q441.99364,388.99364,380.99364,427.49046Q319.99364,465.98728,246.98093,474.54451Q173.96821,483.10173,116.50954,436.03179Q59.05086,388.96185,46.56676,319.48093Q34.08266,250,58.54769,189.00318Q83.01272,128.00636,134.02861,89.0763Q185.04451,50.14624,255.52543,33.05722Q326.00636,15.96821,378.51907,66.97139Q431.03179,117.97457,459.63352,183.98728Q488.23525,250,465.11445,319.49682Z;
              M448.5,314Q426,378,375.5,429Q325,480,251,477Q177,474,112.5,435.5Q48,397,32.5,323.5Q17,250,41.5,183Q66,116,120.5,68Q175,20,246.5,30Q318,40,384.5,72Q451,104,461,177Q471,250,448.5,314Z;
              M442.37373,309.4053Q413.74747,368.8106,367.33164,418.78956Q320.91582,468.76851,252.02104,462.19486Q183.12627,455.6212,127.81567,417.1212Q72.50507,378.6212,55.98402,314.3106Q39.46298,250,49.15783,180.95791Q58.85269,111.91582,115.9053,62.38426Q172.95791,12.85269,244.96843,28.46843Q316.97896,44.08418,378.37373,78.12627Q439.76851,112.16836,455.38426,181.08418Q471,250,442.37373,309.4053Z;
              M464.61783,321.33046Q445.89082,392.66093,380.3592,421.57184Q314.82758,450.48275,246.34195,461.98563Q177.85632,473.48851,126.98563,425.21552Q76.11494,376.94253,58.07184,313.47126Q40.02874,250,62.37357,190.25862Q84.7184,130.51725,132.97415,84.10346Q181.22989,37.68967,253.22989,28.5Q325.22989,19.31033,385.70115,63.5977Q446.17242,107.88506,464.75862,178.94253Q483.34483,250,464.61783,321.33046Z;
              M452,318.5Q439,387,378.5,423.5Q318,460,245.5,472.5Q173,485,116,437Q59,389,44,319.5Q29,250,52.5,187Q76,124,126.5,75Q177,26,245.5,40Q314,54,380,81Q446,108,455.5,179Q465,250,452,318.5Z;
              M439.90672,314.29364Q427.43251,378.58728,375.34523,426.65477Q323.25795,474.72226,253.38692,464.08728Q183.5159,453.45231,116,424.90672Q48.4841,396.36113,48.73215,323.18056Q48.98021,250,51.97421,179.11308Q54.9682,108.22615,117.56149,71.31944Q180.15477,34.41272,250.23215,33.69046Q320.30954,32.9682,376.84523,74.69046Q433.38092,116.41272,442.88092,183.20636Q452.38092,250,439.90672,314.29364Z;
              M440,310.5Q416,371,367.5,416.5Q319,462,252.5,455.5Q186,449,130.5,413Q75,377,39.5,313.5Q4,250,45.5,190.5Q87,131,137,93.5Q187,56,250.5,54.5Q314,53,375.5,83.5Q437,114,450.5,182Q464,250,440,310.5Z;
              "
            ></animate>
          </path>
        </g>
      </svg>

      <svg
        className="glow"
        viewBox="0 0 800 500"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="100%"
        id="svgGlow"
      >
        <g transform="translate(144.48741149902344, 6.053840637207031)">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "rgb(0, 194, 255)" }}
              ></stop>
              <stop
                offset="100%"
                style={{ stopColor: "rgb(255, 0, 184)" }}
              ></stop>
            </linearGradient>
          </defs>
          <path className="blob" fill="url(#gradient)">
            <animate
              attributeName="d"
              dur={"25000ms"}
              repeatCount={"indefinite"}
              values="
              M440,310.5Q416,371,367.5,416.5Q319,462,252.5,455.5Q186,449,130.5,413Q75,377,39.5,313.5Q4,250,45.5,190.5Q87,131,137,93.5Q187,56,250.5,54.5Q314,53,375.5,83.5Q437,114,450.5,182Q464,250,440,310.5Z;
              M468,321Q446,392,384.5,434Q323,476,253,466Q183,456,130.5,415.5Q78,375,43.5,312.5Q9,250,37,182.5Q65,115,125.5,83.5Q186,52,250.5,50.5Q315,49,380.5,78Q446,107,468,178.5Q490,250,468,321Z;
              M442.5,309Q413,368,364.5,411Q316,454,246.5,464.5Q177,475,120,430.5Q63,386,52.5,318Q42,250,53.5,183Q65,116,121,71.5Q177,27,251.5,21.5Q326,16,369,74Q412,132,442,191Q472,250,442.5,309Z;
              M447.21542,320.52659Q444.43616,391.05319,382.83776,429.8617Q321.23936,468.67021,250.16755,467.64362Q179.09574,466.61702,114.76064,431.02394Q50.42553,395.43085,35.21011,322.71542Q19.99468,250,50.88032,188.7633Q81.76595,127.52659,129.90691,77.2633Q178.04787,27,251.5,24.11968Q324.95213,21.23936,375.81117,71.38032Q426.67021,121.52128,438.33245,185.76064Q449.99468,250,447.21542,320.52659Z;
              M465.11445,319.49682Q441.99364,388.99364,380.99364,427.49046Q319.99364,465.98728,246.98093,474.54451Q173.96821,483.10173,116.50954,436.03179Q59.05086,388.96185,46.56676,319.48093Q34.08266,250,58.54769,189.00318Q83.01272,128.00636,134.02861,89.0763Q185.04451,50.14624,255.52543,33.05722Q326.00636,15.96821,378.51907,66.97139Q431.03179,117.97457,459.63352,183.98728Q488.23525,250,465.11445,319.49682Z;
              M448.5,314Q426,378,375.5,429Q325,480,251,477Q177,474,112.5,435.5Q48,397,32.5,323.5Q17,250,41.5,183Q66,116,120.5,68Q175,20,246.5,30Q318,40,384.5,72Q451,104,461,177Q471,250,448.5,314Z;
              M442.37373,309.4053Q413.74747,368.8106,367.33164,418.78956Q320.91582,468.76851,252.02104,462.19486Q183.12627,455.6212,127.81567,417.1212Q72.50507,378.6212,55.98402,314.3106Q39.46298,250,49.15783,180.95791Q58.85269,111.91582,115.9053,62.38426Q172.95791,12.85269,244.96843,28.46843Q316.97896,44.08418,378.37373,78.12627Q439.76851,112.16836,455.38426,181.08418Q471,250,442.37373,309.4053Z;
              M464.61783,321.33046Q445.89082,392.66093,380.3592,421.57184Q314.82758,450.48275,246.34195,461.98563Q177.85632,473.48851,126.98563,425.21552Q76.11494,376.94253,58.07184,313.47126Q40.02874,250,62.37357,190.25862Q84.7184,130.51725,132.97415,84.10346Q181.22989,37.68967,253.22989,28.5Q325.22989,19.31033,385.70115,63.5977Q446.17242,107.88506,464.75862,178.94253Q483.34483,250,464.61783,321.33046Z;
              M452,318.5Q439,387,378.5,423.5Q318,460,245.5,472.5Q173,485,116,437Q59,389,44,319.5Q29,250,52.5,187Q76,124,126.5,75Q177,26,245.5,40Q314,54,380,81Q446,108,455.5,179Q465,250,452,318.5Z;
              M439.90672,314.29364Q427.43251,378.58728,375.34523,426.65477Q323.25795,474.72226,253.38692,464.08728Q183.5159,453.45231,116,424.90672Q48.4841,396.36113,48.73215,323.18056Q48.98021,250,51.97421,179.11308Q54.9682,108.22615,117.56149,71.31944Q180.15477,34.41272,250.23215,33.69046Q320.30954,32.9682,376.84523,74.69046Q433.38092,116.41272,442.88092,183.20636Q452.38092,250,439.90672,314.29364Z;
              M440,310.5Q416,371,367.5,416.5Q319,462,252.5,455.5Q186,449,130.5,413Q75,377,39.5,313.5Q4,250,45.5,190.5Q87,131,137,93.5Q187,56,250.5,54.5Q314,53,375.5,83.5Q437,114,450.5,182Q464,250,440,310.5Z;
              "
            ></animate>
          </path>
        </g>
      </svg>
    </div>
  );
}

export default SVGBlob;