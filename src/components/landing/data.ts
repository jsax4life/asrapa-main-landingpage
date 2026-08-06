import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";
import album4 from "@/assets/album-4.jpg";
import album5 from "@/assets/album-5.jpg";
import album6 from "@/assets/album-6.jpg";

export type Track = {
  title: string;
  artist: string;
  duration: string;
  cover: string;
  tag: string;
};

export const tracks: Track[] = [
  { title: "Midnight Lagos", artist: "Tayo Cole", duration: "3:42", cover: album1, tag: "Afrobeats" },
  { title: "Frequency", artist: "Nova Kay", duration: "4:05", cover: album2, tag: "Electronic" },
  { title: "Golden Hour", artist: "Amara Sey", duration: "3:18", cover: album3, tag: "R&B Soul" },
  { title: "Drum Language", artist: "Kofi Mensah", duration: "5:01", cover: album4, tag: "Afro Fusion" },
  { title: "Skyline Amapiano", artist: "DJ Sbu Nine", duration: "6:24", cover: album5, tag: "Amapiano" },
  { title: "Grace Notes", artist: "The Ember Choir", duration: "4:47", cover: album6, tag: "Gospel" },
];

export const genres = [
  "Afrobeats",
  "Amapiano",
  "Hip-Hop",
  "Gospel",
  "R&B",
  "Highlife",
  "Alté",
  "Electronic",
];