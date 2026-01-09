interface Props {
  title?: string;
  artist?: string;
}

export default function NowPlayingBar({ title, artist }: Props) {
  if (!title) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        padding: "10px 16px",
        textAlign: "center",
        fontSize: "1.2rem",
        color: "white",
        background: "rgba(0, 0, 0, 0.35)",
        backdropFilter: "blur(6px)",
        zIndex: 9999,
      }}
    >
      <strong>{title}</strong>
      {artist && <> — {artist}</>}
    </div>
  );
}
