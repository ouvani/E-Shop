export const heroImages = [
  {
    name: "slide-1" ,
    src: "src/lib/assets/images/hero-slider/dark-library.jpg",
    title: "Dark academia vibes",
    subtitle: "Curate moody shelves and study nook decor.",
    link: "/aesthetics/dark-academia"
  }, {
    name: "slide-2",
    src: "src/lib/assets/images/hero-slider/pink-room.jpg",
    title: "Coquette charm",
    subtitle: "Soft accents for elegant, playful interiors.", 
    link: "/aesthetics/coquette"
  } , {
    name: "slide-3",
    src: "src/lib/assets/images/hero-slider/white-walls.jpg",
		title: "Minimalist calm",
		subtitle: "Clean lines and decluttered style for every room.",
    link: "/aesthetics/minimalist"
  } , {
    name: "slide-4",
    src: "src/lib/assets/images/hero-slider/office-desk.jpg",
    title: "Corporate America cool",
    subtitle: "Sharp decor that means business.",
    link: "/aesthetics/corporate-america"
  }
];

export type HeroImage = typeof heroImages[number];