/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-left': 'slide-left 2s ease-in-out infinite alternate',
        'slide-right': 'slide-right 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      fontFamily: {
        'Titillium' : "Titillium Web",
        'Josefin' : "Josefin Sans",
        'Ranga' : "Ranga",
      },
      width: {
        '5%':'5%',
        '7%':'7%',
        '10%':'10%',
        '15%':'15%',
        '20%':'20%',
        '25%':'25%',
        '30%':'30%',
        '35%':'35%',
        '40%':'40%',
        '45%': '45%',
        '50%':'50%',
        '60%':'60%',
        '70%':'70%',
        '75%':'75%',
        '80%':'80%',
        '75%':'75%',
        '90%':'90%',
        '100%':'100%',
        '100': '415px',
        '115': '450px',
        '120': '500px',
        '125': '550px',
        '130': '600px',
        '135': '650px',
        '140': '700px',
        '145': '750px',
        '150': '800px',
        '155': '850px',
        '160': '900px',
        '165': '950px',
        '170': '1000px',
      },
      height: {
        '10%':'10%',
        '15%':'15%',
        '20%':'20%',
        '25%':'25%',
        '30%':'30%',
        '35%':'35%',
        '40%':'40%',
        '45%':'45%',
        '50%':'50%',
        '60%':'60%',
        '70%':'70%',
        '75%':'75%',
        '80%':'80%',
        '75%':'75%',
        '90%':'90%',
        '100%':'100%',
        '100': '415px',
        '115': '450px',
        '120': '500px',
        '125': '550px',
        '130': '600px',
        '135': '650px',
        '140': '700px',
        '145': '750px',
        '150': '800px',
        '155': '850px',
        '160': '900px',
        '165': '950px',
        '170': '1000px',
      },
      fontSize: {
        's': '10px',
        'xs': '7px',
        'xxs': '5px',
        'xxxs': '4px'
      },
      animation: {
          leftScroll: "leftScroll 25s linear infinite",
          rightScroll: "rightScroll 25s linear infinite",
          blob: 'blob 12s ease-in-out infinite',
          revolve: 'revolve 10s linear infinite',
          revolve2: 'revolve2 10s linear infinite',
      },
      keyframes: {
          leftScroll: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          }
        },
        rightScroll:  {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          }
        },
        blob: {
          '0%, 100%': { borderRadius: '50px' },
          '25%': { borderRadius: '130px' },
          '50%': { borderRadius: '160px' },
          '75%': { borderRadius: '140px' },
        },
        revolve: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(100%, 0)" },
          "50%": { transform: "translate(100%, 100%)" },
          "75%": { transform: "translate(0, 100%)" },
          "100%": { transform: "translate(0, 0)" },
        },
        revolve2: {
          "0%": { transform: "translate(100%, 100%)" },
          "25%": { transform: "translate(0, 100%)" },
          "50%": { transform: "translate(0, 0)" },
          "75%": { transform: "translate(100%, 0)" },
          "100%": { transform: "translate(100%, 100%)" },
        },
      },
    },
  },
  plugins: [
    daisyui,
  ],
}

