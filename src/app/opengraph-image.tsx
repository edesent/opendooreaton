import { ImageResponse } from "next/og";
import { church, verse } from "@/lib/site";

export const alt = `${church.name}, ${church.city}, Ohio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Link previews: the open door from their sign, with the name beside it. */
export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#131c3d", color: "white", padding: 70, alignItems: "center", gap: 70 }}>
        <div style={{ display: "flex", position: "relative", width: 300, height: 440, background: "linear-gradient(#5d8fc2, #a9cbe8 60%, #f3f8fc)", border: "18px solid #f8f7f2" }}>
          <div style={{ position: "absolute", left: -18, top: -18, width: 120, height: 476, background: "#0c1230", transform: "skewY(-12deg)", transformOrigin: "left top" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 30, letterSpacing: 6, color: "#a9cbe8", textTransform: "uppercase" }}>Church of God · Eaton, Ohio</div>
          <div style={{ fontSize: 112, lineHeight: 1, marginTop: 24, fontWeight: 700 }}>Open Door</div>
          <div style={{ fontSize: 40, marginTop: 30, color: "#f1dfae" }}>The door is open.</div>
          <div style={{ fontSize: 26, marginTop: 40, color: "rgba(255,255,255,.7)" }}>{`“${verse.text}” ${verse.ref}`}</div>
        </div>
      </div>
    ),
    size,
  );
}
