"use client"

import Image from "next/image"
import React from "react"
import YouTube from "react-youtube"
import { IBM_Plex_Mono, Montserrat } from "next/font/google"
// import "../../../public/logos/logo.ts"

const monst = Montserrat({ subsets: ['latin'], weight: ["400", "500", "700"] })
const ibm_mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ["400", "500", "700"] })

interface Logos {
  "nextJS": string,
  "openai": string,
  "python": string,
  "typescript": string,
  "fastapi": string,
  "mysql": string,
  "sqlalchemy": string,
  "meta": string,
}

const logos: Logos = {
  "nextJS": `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
  <path fill="#212121" d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"></path>
  </svg>`,
  "openai": `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48"
  style="fill:#FFFFFF;">
  <path d="M38.844,17.559l-7.523-4.343c-0.493-0.284-1.1-0.285-1.594-0.003l-10.245,5.855l0.021-4.018l7.913-4.569	c3.445-1.989,7.938-1.371,10.44,1.722c0.594,0.734,1.04,1.539,1.341,2.382c0.211,0.592,0.772,0.984,1.4,0.984	c1.037,0,1.772-1.03,1.421-2.006c-0.416-1.158-1.033-2.265-1.853-3.275c-2.488-3.065-6.393-4.357-10.151-3.807	c-1.987-2.124-4.699-3.373-7.63-3.473c-4.733-0.161-8.814,2.839-10.525,7.018c-2.842,0.654-5.289,2.378-6.847,4.873	c-3.318,5.313-1.284,12.41,4.142,15.543l7.523,4.343c0.493,0.284,1.1,0.285,1.594,0.003l10.245-5.855l-0.021,4.018l-7.902,4.563	c-3.448,1.991-7.945,1.378-10.451-1.715c-0.591-0.73-1.035-1.53-1.336-2.368c-0.212-0.591-0.772-0.982-1.4-0.982h0	c-1.039,0-1.774,1.033-1.421,2.01c0.326,0.901,0.774,1.771,1.344,2.589c2.43,3.487,6.613,5.039,10.645,4.465	c1.987,2.129,4.7,3.381,7.634,3.483c4.736,0.163,8.82-2.838,10.531-7.02c2.841-0.654,5.288-2.378,6.844-4.872	C46.303,27.788,44.269,20.691,38.844,17.559z M34,33.723c0,4.324-3.313,8.077-7.633,8.269c-1.837,0.082-3.585-0.463-5.024-1.496	c0.274-0.13,0.546-0.266,0.812-0.42l7.521-4.342c0.493-0.285,0.799-0.81,0.802-1.38l0.054-9.883c0.003-0.55-0.441-0.999-0.992-1	c-0.549-0.002-0.995,0.441-0.998,0.99l-0.011,2.172L18.498,32.37l-7.918-4.571c-3.745-2.163-5.339-6.908-3.345-10.745	c0.848-1.633,2.196-2.875,3.812-3.605C11.022,13.753,11,14.058,11,14.367v8.684c0,0.569,0.302,1.095,0.794,1.382l8.73,5.055	c0.475,0.275,1.082,0.113,1.358-0.361c0.277-0.476,0.114-1.085-0.362-1.361L14,23.42v-9.143c0-4.325,3.313-8.077,7.634-8.269	c1.835-0.081,3.582,0.462,5.02,1.494c-0.264,0.127-0.526,0.259-0.782,0.407l-7.548,4.357c-0.494,0.285-0.799,0.81-0.802,1.38	l-0.054,9.797c-0.003,0.55,0.441,0.999,0.992,1c0.549,0.002,0.995-0.441,0.998-0.99l0.011-2.087l4.552-2.603L34,24.58V33.723z M40.765,30.946c-0.848,1.633-2.195,2.875-3.812,3.604C36.978,34.248,37,33.944,37,33.636v-8.687c0-0.569-0.302-1.095-0.794-1.382	l-10.191-5.943l3.487-1.994l7.918,4.571C41.165,22.364,42.759,27.109,40.765,30.946z"></path>
  </svg>`,
  "python": `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
  <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
  </svg>`,
  "typescript": `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
  <linearGradient id="atmafua87GAY-Q3DVUuwga_nCj4PvnCO0tZ_gr1" x1="6" x2="42" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"></stop><stop offset="1" stop-color="#16528c"></stop></linearGradient><path fill="url(#atmafua87GAY-Q3DVUuwga_nCj4PvnCO0tZ_gr1)" d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"></path><path d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z" opacity=".05"></path><path d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z" opacity=".05"></path><path d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z" opacity=".05"></path><path fill="#fff" d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"></path><polygon fill="#fff" points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"></polygon>
  </svg>`,
  "fastapi": `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor" height="30" width="30"><title>FastAPI</title><path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z" id="mainIconPathAttribute" fill="#03989e"></path></svg>`,
  "mysql": `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50"
  style="fill:#FFFFFF;">
  <path d="M 31.167969 8 C 30.699219 7.988281 30.289063 8.167969 30.078125 8.6875 C 29.71875 9.558594 30.613281 10.410156 30.933594 10.855469 C 31.15625 11.164063 31.445313 11.511719 31.605469 11.859375 C 31.710938 12.089844 31.726563 12.320313 31.816406 12.5625 C 32.039063 13.160156 32.394531 13.839844 32.679688 14.394531 C 32.824219 14.675781 32.984375 14.96875 33.167969 15.21875 C 33.28125 15.371094 33.472656 15.441406 33.503906 15.675781 C 33.316406 15.941406 33.304688 16.351563 33.199219 16.6875 C 32.722656 18.191406 32.902344 20.0625 33.59375 21.171875 C 33.808594 21.515625 34.3125 22.246094 35 21.96875 C 35.601563 21.722656 35.46875 20.960938 35.640625 20.285156 C 35.679688 20.136719 35.65625 20.023438 35.734375 19.921875 L 35.734375 19.953125 C 35.914063 20.320313 36.097656 20.6875 36.28125 21.050781 C 36.691406 21.707031 37.414063 22.390625 38.023438 22.855469 C 38.339844 23.09375 38.589844 23.507813 39 23.648438 L 39 23.617188 L 38.96875 23.617188 C 38.890625 23.492188 38.765625 23.441406 38.664063 23.34375 C 38.425781 23.109375 38.160156 22.816406 37.964844 22.546875 C 37.40625 21.792969 36.914063 20.964844 36.46875 20.105469 C 36.253906 19.695313 36.066406 19.242188 35.886719 18.824219 C 35.816406 18.660156 35.816406 18.417969 35.671875 18.332031 C 35.472656 18.640625 35.183594 18.886719 35.03125 19.25 C 34.789063 19.828125 34.753906 20.535156 34.664063 21.265625 C 34.609375 21.285156 34.632813 21.269531 34.605469 21.296875 C 34.179688 21.191406 34.027344 20.753906 33.871094 20.378906 C 33.472656 19.429688 33.394531 17.898438 33.75 16.808594 C 33.839844 16.523438 34.25 15.632813 34.085938 15.371094 C 34.007813 15.109375 33.742188 14.960938 33.597656 14.761719 C 33.414063 14.515625 33.234375 14.191406 33.109375 13.90625 C 32.78125 13.164063 32.472656 12.304688 32.125 11.554688 C 31.960938 11.195313 31.683594 10.835938 31.453125 10.515625 C 31.199219 10.164063 30.917969 9.90625 30.71875 9.476563 C 30.652344 9.328125 30.554688 9.085938 30.660156 8.929688 C 30.691406 8.824219 30.738281 8.78125 30.84375 8.746094 C 31.019531 8.609375 31.511719 8.789063 31.699219 8.867188 C 32.1875 9.070313 32.597656 9.265625 33.011719 9.539063 C 33.210938 9.671875 33.410156 9.925781 33.652344 10 L 33.925781 10 C 34.359375 10.097656 34.839844 10.027344 35.238281 10.152344 C 35.949219 10.367188 36.585938 10.703125 37.160156 11.066406 C 38.921875 12.175781 40.363281 13.757813 41.34375 15.644531 C 41.503906 15.949219 41.574219 16.242188 41.714844 16.5625 C 41.992188 17.210938 42.347656 17.882813 42.628906 18.515625 C 42.90625 19.152344 43.179688 19.789063 43.574219 20.316406 C 43.78125 20.59375 44.585938 20.746094 44.949219 20.898438 C 45.203125 21.007813 45.625 21.121094 45.863281 21.265625 C 46.328125 21.542969 46.773438 21.875 47.207031 22.183594 C 47.425781 22.335938 48.089844 22.667969 48.125 22.945313 C 47.050781 22.917969 46.230469 23.015625 45.53125 23.3125 C 45.332031 23.398438 45.011719 23.398438 44.980469 23.648438 C 45.085938 23.761719 45.105469 23.933594 45.191406 24.074219 C 45.359375 24.34375 45.640625 24.707031 45.894531 24.898438 C 46.171875 25.105469 46.453125 25.328125 46.75 25.511719 C 47.273438 25.828125 47.859375 26.011719 48.367188 26.332031 C 48.664063 26.523438 48.964844 26.761719 49.253906 26.972656 C 49.398438 27.082031 49.492188 27.246094 49.679688 27.3125 L 49.679688 27.28125 C 49.582031 27.15625 49.558594 26.984375 49.46875 26.855469 L 49.066406 26.453125 C 48.679688 25.941406 48.1875 25.488281 47.664063 25.113281 C 47.246094 24.8125 46.3125 24.40625 46.140625 23.921875 L 46.109375 23.890625 C 46.402344 23.859375 46.75 23.75 47.023438 23.675781 C 47.484375 23.554688 47.890625 23.585938 48.363281 23.464844 C 48.578125 23.402344 48.792969 23.339844 49.007813 23.28125 L 49.007813 23.15625 C 48.769531 22.914063 48.597656 22.585938 48.335938 22.363281 C 47.652344 21.78125 46.90625 21.199219 46.136719 20.714844 C 45.710938 20.445313 45.183594 20.269531 44.734375 20.042969 C 44.582031 19.964844 44.316406 19.925781 44.214844 19.796875 C 43.976563 19.496094 43.847656 19.113281 43.664063 18.761719 C 43.28125 18.023438 42.90625 17.21875 42.566406 16.441406 C 42.335938 15.914063 42.183594 15.390625 41.894531 14.914063 C 40.507813 12.636719 39.015625 11.257813 36.703125 9.90625 C 36.210938 9.617188 35.621094 9.507813 34.996094 9.359375 C 34.65625 9.335938 34.324219 9.316406 33.984375 9.296875 C 33.78125 9.210938 33.566406 8.960938 33.375 8.835938 C 32.894531 8.535156 31.949219 8.011719 31.167969 8 Z M 34.476563 11.3125 C 34.253906 11.308594 34.09375 11.339844 33.925781 11.375 L 33.925781 11.40625 L 33.957031 11.40625 C 34.0625 11.625 34.253906 11.765625 34.386719 11.953125 C 34.488281 12.167969 34.585938 12.382813 34.6875 12.597656 L 34.71875 12.566406 C 34.90625 12.433594 34.996094 12.21875 34.996094 11.894531 C 34.917969 11.816406 34.90625 11.714844 34.84375 11.621094 C 34.753906 11.492188 34.585938 11.421875 34.476563 11.3125 Z M 1.867188 23.996094 C 1.566406 24.007813 1.238281 24.066406 0.882813 24.179688 C 0.289063 24.359375 -0.00390625 24.714844 -0.00390625 25.4375 L -0.00390625 33 L 2 33 L 2 25.621094 L 4.777344 31.929688 C 5.121094 32.714844 5.589844 32.996094 6.507813 32.996094 C 7.429688 32.996094 7.878906 32.714844 8.222656 31.929688 L 11 25.78125 L 11 33 L 13 33 L 13 25.4375 C 13 24.714844 12.710938 24.359375 12.113281 24.179688 C 10.691406 23.730469 9.734375 24.117188 9.304688 25.089844 L 6.453125 31.503906 L 3.695313 25.089844 C 3.382813 24.359375 2.757813 23.960938 1.867188 23.996094 Z M 26.246094 24 C 25.457031 24 23 24.09375 23 26 L 23 27.234375 C 23 28.109375 23.769531 28.824219 25.4375 29 C 25.625 29.011719 25.8125 29.027344 26 29.027344 C 26 29.027344 27.945313 28.988281 28 29 C 29.125 29 29 29.875 29 30 L 29 31 C 29 31.136719 28.96875 32 27.988281 32 L 23 32 L 23 33 L 28.007813 33 C 28.664063 33 29.300781 32.863281 29.808594 32.625 C 30.652344 32.238281 31 31.714844 31 31.027344 L 31 29.597656 C 31 28.0625 29.09375 28 28 28 L 26 28 C 25.214844 28 25.09375 27.523438 25 27 L 25 26 C 25.09375 25.601563 25.269531 25.0625 25.964844 25 L 31 25 L 31 24 Z M 33.980469 24 C 32.503906 24.203125 31.984375 24.9375 31.984375 26 L 31.984375 31 C 31.984375 31.972656 32.527344 32.558594 33.644531 32.863281 C 34.019531 32.96875 34.359375 33.011719 34.679688 33.011719 L 36.90625 33 L 38.214844 33 L 39.328125 34 L 41.578125 34 L 40.03125 32.605469 C 40.757813 32.304688 40.984375 31.84375 40.984375 30.980469 L 40.984375 26 C 40.984375 24.9375 40.292969 24.203125 38.816406 24 Z M 42 24 L 42 30.957031 C 42 32.164063 42.683594 32.84375 44.492188 32.980469 C 44.660156 32.988281 44.832031 33 45 33 L 50 33 L 50 32 L 45.378906 32 C 44.347656 32 44 31.566406 44 30.949219 L 44 24 Z M 35.171875 25 L 37.746094 25 C 38.425781 25 38.882813 25.546875 38.984375 26 C 38.984375 26 39 30.65625 39 31 C 39 31.34375 38.808594 31.5 38.808594 31.5 L 38.265625 31 L 36 31 L 37.113281 32 L 35.171875 32 C 34.476563 32 34.085938 31.484375 33.984375 31 L 33.984375 26.101563 C 33.984375 25.570313 34.390625 25 35.171875 25 Z M 14 27 C 14.039063 27.039063 14 31.261719 14 31.34375 C 14.015625 32.21875 15.125 32.984375 16.863281 33 L 20 33 L 20 33.066406 C 20 33.253906 20.136719 33.878906 19 34 C 18.988281 34 14.011719 34 14 34 L 14 35 L 19.214844 35 C 20.097656 34.972656 22.011719 34.773438 22 33.242188 C 22 33.214844 22.007813 27 22 27 L 20 27 L 20 32 C 19.96875 32 17.523438 32.007813 17.03125 32 C 16.066406 31.984375 15.984375 31.433594 16 31.222656 L 16 27 Z"></path>
  </svg>`,
  "sqlalchemy": `<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 128 128"><path fill="#333" d="M15.676 69.912c-.671-.107-2.39-.537-3.813-.926L9.27 68.26l1.33-2.444 1.329-2.444-1.074-1.33c-1.518-1.88-3.478-6.002-3.491-7.33-.014-3.103 4.014-7.601 8.956-10.018 3.397-1.665 6.096-1.705 9.48-.12l2.551 1.194.739-1.06c.402-.578.738-1.343.738-1.679s.336-.631.739-.631.738.107.738.228c0 .296-2.967 7.788-3.155 7.976-.081.08-.887-.295-1.8-.832-2.578-1.518-5.814-2.525-8.325-2.592-5.841-.148-7.869 5.56-3.746 10.554l1.45 1.76 3.961-3.21c4.445-3.585 4.955-3.666 8.42-1.275 3.893 2.685 3.96 6.767.2 11.037-3.33 3.8-6.753 4.848-12.635 3.867zm9.964-4.095c1.933-1.517 1.799-4.324-.296-6.553-2.632-2.793-3.45-2.672-8.083 1.195-4.606 3.84-4.633 3.693.873 5.452 3.638 1.181 5.921 1.141 7.506-.094zM63.05 80.614c-1.317-.483-4.862-1.947-7.896-3.263-8.191-3.572-9.346-3.639-11.79-.671-.564.685-1.181 1.114-1.356.94-.524-.524 1.034-3.035 2.914-4.686 1.53-1.343 2.04-1.531 3.733-1.343 1.074.12 4.646 1.37 7.935 2.766 7.426 3.155 9.601 3.827 12.435 3.827 3.45 0 5.223-2.417 4.135-5.626-.268-.806-.188-1.075.35-1.075 1.006 0 1.517 3.76.792 5.922-.31.926-1.209 2.242-2.001 2.9-1.182.994-1.934 1.209-4.15 1.195-1.49-.013-3.786-.402-5.102-.886zm-19.135-11.48c-3.048-1.424-5.801-4.136-7.386-7.305-2.537-5.076-1.759-8.325 3.049-12.716 4.041-3.693 7.345-5.13 11.79-5.13 3.208 0 3.893.175 5.974 1.45 4.928 3.049 6.15 8.863 3.183 15.2-3.478 7.44-10.823 11.186-16.61 8.5zm10.205-3.532c2.282-1.128 3.854-6.338 3.209-10.662-.806-5.33-8.016-8.97-13.307-6.713-5.438 2.323-5.519 8.513-.174 14.085 3.732 3.908 6.942 4.928 10.272 3.29zM64.473 70.114c0-.229.845-.631 1.893-.887l1.893-.47.403-6.82c.443-7.547.12-14.973-.698-15.966-.296-.35-1.195-.78-2.014-.967-3.33-.739-1.115-1.249 5.344-1.249 6.459 0 8.513.47 5.438 1.249-2.645.658-2.659.698-2.659 11.467 0 5.975.215 10.474.524 11.051.43.806 1.074.98 3.545.98 5.102 0 6.861-1.208 8.245-5.68.416-1.342 1.49-1.1 1.114.256-.175.63-.456 2.55-.631 4.296l-.322 3.156H75.51c-6.07 0-11.037-.188-11.037-.416z"/><path fill="#ca2727" d="M89.542 69.791c0-.402.39-.805 1.034-1.114.86-.403 1.423-1.249 3.464-5.237 3.236-6.31 8.339-17.147 8.822-18.772.376-1.235.457-1.302 1.853-1.463.806-.094 1.477-.148 1.49-.121.014.027 1.129 2.47 2.485 5.438 1.343 2.967 4.042 8.607 6.002 12.528 3.277 6.593 3.64 7.184 4.74 7.72.672.323 1.195.82 1.195 1.115 0 .47-.577.524-5.545.524-4.982 0-5.546-.054-5.546-.537 0-.322.43-.671 1.114-.9.632-.201 1.115-.577 1.115-.859 0-.269-.658-2.041-1.464-3.934l-1.463-3.451H97.746l-1.06 2.336c-1.988 4.378-2.028 5.412-.175 5.908.927.255 1.182.457 1.074.873-.12.484-.604.55-4.095.55-3.747.028-3.948 0-3.948-.604zm18.181-10.863c.188-.335-3.988-9.453-4.377-9.547-.282-.08-4.606 8.836-4.606 9.507 0 .336 8.782.376 8.983.04z"/></svg>`,
  "meta": `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
  <path fill="#0081fb" d="M47,29.36l-2.193,1.663L42.62,29.5c0-0.16,0-0.33-0.01-0.5c0-0.16,0-0.33-0.01-0.5	c-0.14-3.94-1.14-8.16-3.14-11.25c-1.54-2.37-3.51-3.5-5.71-3.5c-2.31,0-4.19,1.38-6.27,4.38c-0.06,0.09-0.13,0.18-0.19,0.28	c-0.04,0.05-0.07,0.1-0.11,0.16c-0.1,0.15-0.2,0.3-0.3,0.46c-0.9,1.4-1.84,3.03-2.86,4.83c-0.09,0.17-0.19,0.34-0.28,0.51	c-0.03,0.04-0.06,0.09-0.08,0.13l-0.21,0.37l-1.24,2.19c-2.91,5.15-3.65,6.33-5.1,8.26C14.56,38.71,12.38,40,9.51,40	c-3.4,0-5.56-1.47-6.89-3.69C1.53,34.51,1,32.14,1,29.44l4.97,0.17c0,1.76,0.38,3.1,0.89,3.92C7.52,34.59,8.49,35,9.5,35	c1.29,0,2.49-0.27,4.77-3.43c1.83-2.53,3.99-6.07,5.44-8.3l1.37-2.09l0.29-0.46l0.3-0.45l0.5-0.77c0.76-1.16,1.58-2.39,2.46-3.57	c0.1-0.14,0.2-0.28,0.31-0.42c0.1-0.14,0.21-0.28,0.31-0.41c0.9-1.15,1.85-2.22,2.87-3.1c1.85-1.61,3.84-2.5,5.85-2.5	c3.37,0,6.58,1.95,9.04,5.61c2.51,3.74,3.82,8.4,3.97,13.25c0.01,0.16,0.01,0.33,0.01,0.5C47,29.03,47,29.19,47,29.36z"></path><linearGradient id="wSMw7pqi7WIWHewz2_TZXa_PvvcWRWxRKSR_gr1" x1="42.304" x2="13.533" y1="24.75" y2="24.75" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0081fb"></stop><stop offset=".995" stop-color="#0064e1"></stop></linearGradient><path fill="url(#wSMw7pqi7WIWHewz2_TZXa_PvvcWRWxRKSR_gr1)" d="M4.918,15.456	C7.195,11.951,10.483,9.5,14.253,9.5c2.184,0,4.354,0.645,6.621,2.493c2.479,2.02,5.122,5.346,8.419,10.828l1.182,1.967	c2.854,4.746,4.477,7.187,5.428,8.339C37.125,34.606,37.888,35,39,35c2.82,0,3.617-2.54,3.617-5.501L47,29.362	c0,3.095-0.611,5.369-1.651,7.165C44.345,38.264,42.387,40,39.093,40c-2.048,0-3.862-0.444-5.868-2.333	c-1.542-1.45-3.345-4.026-4.732-6.341l-4.126-6.879c-2.07-3.452-3.969-6.027-5.068-7.192c-1.182-1.254-2.642-2.754-5.067-2.754	c-1.963,0-3.689,1.362-5.084,3.465L4.918,15.456z"></path><linearGradient id="wSMw7pqi7WIWHewz2_TZXb_PvvcWRWxRKSR_gr2" x1="7.635" x2="7.635" y1="32.87" y2="13.012" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0081fb"></stop><stop offset=".995" stop-color="#0064e1"></stop></linearGradient><path fill="url(#wSMw7pqi7WIWHewz2_TZXb_PvvcWRWxRKSR_gr2)" d="M14.25,14.5	c-1.959,0-3.683,1.362-5.075,3.465C7.206,20.937,6,25.363,6,29.614c0,1.753-0.003,3.072,0.5,3.886l-3.84,2.813	C1.574,34.507,1,32.2,1,29.5c0-4.91,1.355-10.091,3.918-14.044C7.192,11.951,10.507,9.5,14.27,9.5L14.25,14.5z"></path><path d="M21.67,20.27l-0.3,0.45l-0.29,0.46c0.71,1.03,1.52,2.27,2.37,3.69l0.21-0.37c0.02-0.04,0.05-0.09,0.08-0.13 c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27z M24.94,15.51c-0.11,0.14-0.21,0.28-0.31,0.42 c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c0.04-0.06,0.07-0.11,0.11-0.16c0.06-0.1,0.13-0.19,0.19-0.28 c-0.76-1.12-1.5-2.13-2.23-3.03C25.15,15.23,25.04,15.37,24.94,15.51z" opacity=".05"></path><path d="M21.67,20.27l-0.3,0.45c0.71,1.02,1.51,2.24,2.37,3.65c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27 z M24.63,15.93c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c-0.77-1.14-1.52-2.16-2.24-3.06 C24.83,15.65,24.73,15.79,24.63,15.93z" opacity=".07"></path>
  </svg>`
}

interface Names {
  "TheGuides": string,
  "marketing-discord-bot": string,
  "similarity-api": string,
  "gpt-restaurant-bot": string,
}

const projectaDescription = {
  "TheGuides": [`• Developed personalized AI chatbot with a vision on helping students and professionals with studying and asking questions.`,
    `• Utilized OpenAI's API to develop the chatbot, enabling it to receive user input and provide responses.`,
    `• Developed front-end components on NextJS with Typescript, implementing Tailwind CSS for styling.`,
    `• Implemented Langchain to chain prompts and utilized recently introduced Function Calling feature of GPT.`,
    `• Used FastAPI to build a lightweight and fast server that runs the model, leveraging SQLAlchemy to develop database. Hosted on cloud using TiDB Serverless.`,
    `• Incorporated FAISS along with OpenAI Vector Embeddings for text file vectorization.`]
}


const devProjects = () => {
  // Youtube
  const videoID = { "theGuides": "https://youtu.be/ytT3h9xZPpU" };
  const opts = {
    height: '200px',
    width: "400px",
  }

  return (
    <>
      {/* <div className={`${ibm_mono.className} container mx-auto p-4 h-full bg-[url("../../public/testing.jpg")]`}> */}
      <div className={`${ibm_mono.className} container mx-auto mt-2 p-4 h-full`}>

        {/* main box */}
        <div className="mx-14 my-5  text-white h-[100%]">

          {/* Box 1 */}
          <div className="w-full mx-auto flex justify-between items-center">
            <div className={`${ibm_mono.className}`}>
              <h1 className="lg:text-5xl text-3xl">
                TheGuides
              </h1>
              <p className="text-[0.9em] font-light">Learning powered by AI</p>

              {/* Logos */}
              <div className="container flex gap-2 items-center">
                Technologies:
                <div title="TypeScript" dangerouslySetInnerHTML={{ __html: logos.typescript }} />
                <div title="Python" dangerouslySetInnerHTML={{ __html: logos.python }} />
                <div title="NextJS" className="bg-white rounded-full" dangerouslySetInnerHTML={{ __html: logos.nextJS }} />
                <div title="OpenAI" dangerouslySetInnerHTML={{ __html: logos.openai }} />
                <div title="FastAPI" className="bg-white rounded-full cursor-text" dangerouslySetInnerHTML={{ __html: logos.fastapi }} />
                <div title="MySQL" dangerouslySetInnerHTML={{ __html: logos.mysql }} />
                <div title="SQLAlchemy" className="bg-white rounded-md" dangerouslySetInnerHTML={{ __html: logos.sqlalchemy }} />
                <div title="FAISS (Meta)" dangerouslySetInnerHTML={{ __html: logos.meta }} />
              </div>
              {/* Buttons */}
              <div className="flex pt-2 gap-4">
                Links:
              <a href="https://devpost.com/software/theguides-ai" target="_blank" className="relative inline-flex items-center justify-start px-3 py-1 overflow-hidden transition-all bg-[#5ECDE6] rounded hover:bg-white group">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#143E55] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Devpost</span>
              </a>
              <a href="https://theguidesai.vercel.app/" target="_blank" className="relative inline-flex items-center justify-start px-3 py-1 overflow-hidden transition-all bg-[#ffffff]  hover:border rounded hover:bg-white group">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#000000] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Website</span>
              </a>
            </div>
            </div>

            <div className="shadow-xl border border-red-800 shadow-black" style={{ borderRadius: "10px", overflow: "hidden" }}>
              <YouTube opts={opts} videoId={videoID.theGuides} />
            </div>
          </div>


          {/* Box 2 */}
          <div className={`container mt-12 ${monst.className}`}>
            <h2 className="text-[500] underline">
              Description:
            </h2>
            <ul>
              {projectaDescription.TheGuides.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default devProjects;