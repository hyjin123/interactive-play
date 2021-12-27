import "./FrontPage.css";
import ReactAnime from "react-animejs";
import anime from "animejs";
import { useEffect } from "react";
const { Anime, stagger } = ReactAnime;

function FrontPage() {
  useEffect(() => {
    anime({
      targets: "#awesome path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      fill:"#000000",
      duration: 700,
      delay: function (el, i) {
        return i * 500;
      },
      direction: "normal",
      loop: false,
      autoplay: true,
    });
  }, []);

  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="500.000000pt"
      height="500.000000pt"
      viewBox="0 0 300.000000 300.000000"
      preserveAspectRatio="xMidYMid meet"
      id="awesome"
    >
      <metadata>
        Created by potrace 1.10, written by Peter Selinger 2001-2011
      </metadata>
      <g
        transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
        fill="#000000"
      >
        <path fill="none" stroke="black" stroke-width="10"
          d="M1798 2170 c-38 -3 -62 -11 -70 -23 -14 -18 -1 -17 -343 -16 -38 0
-88 -3 -110 -6 -43 -5 -75 -34 -75 -66 0 -33 -60 -333 -71 -355 -6 -12 -8 -35
-4 -52 l6 -30 -72 -7 c-40 -4 -86 -11 -103 -16 -16 -5 -31 -7 -33 -6 -6 7 82
490 92 507 2 4 28 10 56 13 51 6 67 12 58 22 -9 9 -111 -12 -124 -26 -8 -8
-16 -25 -18 -39 -19 -102 -31 -164 -43 -220 -28 -124 -42 -244 -31 -258 8 -10
25 -11 66 -6 31 4 79 8 106 8 50 2 50 2 58 41 4 22 25 134 46 248 21 114 41
210 44 213 2 3 48 10 102 16 77 8 103 7 121 -3 19 -10 49 -10 142 -2 64 5 118
10 119 9 1 -1 -4 -23 -11 -51 -12 -45 -16 -50 -44 -53 -30 -3 -30 -4 -46 -90
-8 -48 -23 -137 -32 -198 l-18 -112 -60 -10 c-34 -5 -62 -9 -64 -7 -1 1 5 35
13 76 9 41 26 134 39 207 l23 132 -33 0 c-33 0 -34 1 -35 43 -2 29 -3 34 -6
15 -4 -29 -16 -33 -85 -28 -24 1 -27 -3 -38 -57 -7 -31 -14 -63 -17 -70 -4 -9
8 -11 46 -6 55 6 60 1 45 -54 -5 -20 -13 -23 -54 -23 l-48 0 -7 -47 c-3 -27
-9 -59 -12 -72 -5 -19 -3 -22 13 -18 11 3 35 9 55 12 l36 7 -6 -43 -6 -43 -95
-13 c-104 -14 -159 -31 -105 -32 17 0 68 6 114 13 93 15 111 28 111 81 0 42
-15 54 -61 48 l-38 -6 12 44 c12 41 16 44 52 49 82 10 87 115 6 115 -23 0 -26
3 -23 34 1 19 7 40 12 46 12 15 65 12 108 -6 32 -13 33 -15 27 -59 -3 -25 -15
-90 -26 -145 -10 -55 -20 -125 -22 -155 l-2 -55 58 1 c73 1 93 18 102 87 3 29
13 90 21 137 9 47 18 101 20 120 3 19 14 44 26 55 l20 20 -5 -37 c-4 -27 -1
-40 12 -52 10 -9 20 -14 22 -12 2 2 28 6 57 10 42 5 52 4 52 -8 0 -14 33 -49
109 -114 23 -20 32 -34 28 -45 -8 -21 -45 -21 -71 -2 -23 17 -36 19 -36 5 0
-14 55 -40 83 -40 14 0 30 7 37 15 21 26 2 63 -56 106 -30 23 -62 55 -70 71
-35 68 24 157 130 197 64 24 81 25 123 11 33 -12 53 -45 53 -90 0 -26 -5 -31
-41 -40 -22 -6 -47 -14 -56 -17 -13 -5 -15 -2 -11 15 3 12 0 29 -6 38 -12 16
-14 15 -39 -1 -33 -21 -35 -58 -6 -83 76 -61 90 -77 100 -115 45 -164 -174
-301 -284 -179 -18 20 -18 22 7 69 14 26 26 52 26 57 0 18 -21 -11 -45 -60
-23 -48 -23 -48 -4 -75 53 -75 186 -73 263 4 96 97 83 206 -37 305 -28 23 -33
57 -9 57 6 0 11 -2 10 -5 -1 -3 4 -15 10 -27 11 -19 16 -20 49 -12 61 16 81
29 87 61 7 38 -16 93 -46 109 -53 29 -168 6 -227 -45 l-24 -21 7 25 c33 123
11 98 -34 -38 l-35 -107 -55 -6 c-30 -3 -56 -5 -58 -4 -1 1 10 52 25 113 l28
112 50 0 c48 0 87 13 69 22 -5 2 -35 1 -66 -2z"
        />
        <path fill="none" stroke="black" stroke-width="10"
          d="M1136 2104 c-10 -25 -73 -312 -81 -368 -7 -44 -6 -49 9 -43 10 4 26
7 37 7 10 0 19 5 19 10 0 6 -6 10 -12 9 -39 -5 -43 21 -16 109 5 18 11 43 13
55 12 80 28 154 39 188 13 37 5 67 -8 33z"
        />
        <path fill="none" stroke="black" stroke-width="10"
          d="M1035 1561 c-78 -14 -80 -16 -109 -173 -15 -79 -31 -161 -36 -183
-30 -136 -33 -153 -25 -182 5 -21 10 -24 33 -18 15 4 41 9 57 12 42 7 48 15
65 94 15 69 16 71 53 84 21 7 47 21 58 31 28 25 33 12 21 -53 -24 -128 -17
-177 27 -167 57 12 152 16 164 6 15 -13 116 2 133 20 7 7 17 29 21 48 14 53
38 46 35 -11 -4 -61 10 -72 77 -59 29 5 56 12 61 15 13 8 27 181 32 415 l3
115 -98 -2 c-53 -1 -106 -7 -117 -13 -10 -6 -22 -26 -26 -45 -3 -19 -10 -38
-15 -41 -5 -3 -9 -15 -9 -26 0 -12 -19 -81 -42 -155 -41 -131 -43 -133 -71
-133 -27 0 -29 2 -22 28 4 15 11 50 15 77 5 28 20 103 35 168 15 65 24 125 21
133 -4 9 -20 14 -50 14 -58 0 -97 -15 -103 -40 -5 -20 -23 -28 -23 -11 0 17
-54 49 -90 54 -19 3 -53 2 -75 -2z m137 -50 c77 -87 -8 -293 -125 -303 -30 -3
-30 -3 -47 -99 l-12 -67 -56 -11 c-30 -6 -57 -10 -58 -8 -2 2 17 106 42 232
25 127 48 239 50 251 5 26 67 44 134 39 35 -2 50 -10 72 -34z m193 22 c-11
-29 -85 -366 -85 -390 0 -20 5 -23 35 -23 31 0 35 -3 36 -27 0 -25 1 -26 9 -8
5 11 37 115 71 231 l62 211 76 7 c42 3 87 9 100 13 24 6 24 6 18 -53 -4 -32
-10 -148 -13 -256 -8 -220 0 -201 -87 -213 -46 -6 -48 -5 -43 17 3 13 8 40 11
61 6 37 6 37 -29 37 -33 0 -34 -2 -46 -50 -13 -53 -15 -54 -94 -65 -33 -5 -46
-3 -41 4 8 14 -64 15 -135 1 -29 -6 -55 -8 -57 -6 -7 7 80 493 90 502 2 2 95
19 121 23 4 0 5 -7 1 -16z"
        />  
        <path fill="none" stroke="black" stroke-width="10"
          d="M1060 1433 c-1 -16 -7 -56 -14 -91 -15 -71 -6 -78 32 -22 32 47 29
140 -4 140 -9 0 -14 -11 -14 -27z"
        />
        <path fill="none" stroke="black" stroke-width="10"
          d="M1565 1438 c-3 -13 -14 -61 -24 -108 -11 -47 -23 -93 -26 -102 -6
-14 -2 -18 19 -18 14 0 26 1 27 3 8 43 22 240 17 243 -4 3 -10 -5 -13 -18z"
        />
        <path fill="none" stroke="black" stroke-width="10" d="M1496 1367 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 -10 9 -11 8 -5 -6z" />
        <path fill="none" stroke="black" stroke-width="10"
          d="M2155 1562 c-60 -4 -80 -20 -94 -76 -58 -234 -73 -312 -57 -295 2 2
24 80 48 174 l43 170 54 8 c84 12 88 24 6 19z"
        />
        <path fill="none" stroke="black" stroke-width="10"
          d="M1815 1550 c-3 -5 -14 -10 -24 -10 -10 0 -30 -9 -45 -21 -29 -23 -28
-8 -10 -251 3 -51 2 -100 -4 -120 -6 -18 -14 -53 -17 -78 -11 -68 10 -37 29
46 15 62 16 90 7 224 -6 85 -8 157 -4 160 5 4 32 16 62 28 l54 22 -5 -110 c-2
-61 -1 -107 2 -103 4 5 22 52 40 106 25 73 37 97 47 92 33 -12 93 -17 93 -7 0
11 -104 27 -119 18 -5 -4 -12 -20 -16 -36 -11 -51 -31 -49 -25 3 3 36 -48 65
-65 37z"
        />
        <path fill="none" stroke="black" stroke-width="10"
          d="M2197 1489 c-15 -35 -44 -116 -65 -179 l-39 -115 -44 -10 -44 -9 39
-4 c24 -2 44 2 52 10 8 8 32 65 54 128 22 63 50 138 61 167 31 77 17 88 -14
12z"
        />
        <path fill="none" stroke="black" stroke-width="10"
          d="M1962 1347 c-43 -89 -87 -195 -97 -235 -18 -67 -21 -72 -46 -72 -40
0 -89 -11 -89 -21 0 -4 24 -6 53 -3 65 7 89 31 106 108 7 32 37 106 66 165 29
58 63 129 75 156 12 28 24 53 27 58 2 4 0 7 -6 7 -6 0 -46 -73 -89 -163z"
        />
        <path fill="none" stroke="black" stroke-width="10"
          d="M1975 1149 c-28 -16 -55 -51 -55 -72 0 -27 28 -75 51 -88 56 -29 142
27 137 90 -5 55 -85 97 -133 70z m95 -27 c48 -39 8 -122 -60 -122 -31 0 -70
39 -70 70 0 10 9 29 21 44 25 31 75 35 109 8z"
        />
      </g>
    </svg>
  );
}

export default FrontPage;
