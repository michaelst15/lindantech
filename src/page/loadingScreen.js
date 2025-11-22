import React from "react";
import Lottie from "lottie-react";
import animationData from "../animasi/loading.json"; // Sesuaikan dengan lokasi file

export function LoadingScreen() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
            <Lottie animationData={animationData} loop={true} style={{ width: 200, height: 200 }} />
        </div>
    );
}
