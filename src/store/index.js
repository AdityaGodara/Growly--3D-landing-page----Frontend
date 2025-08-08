import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: "#41dcf7ff",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "./growly.png",
    fullDecal: "./growly.png",
});

export default state;