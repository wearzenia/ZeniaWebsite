// NAVBAR LOGO
const navbarLogo =
  document.getElementById("navbar-logo");

if (navbarLogo) {
  navbarLogo.src =
    ZENIA.navbarLogo;
}


// PHILOSOPHY LOGO
const philosophyLogo =
  document.getElementById(
    "philosophy-logo"
  );

if (philosophyLogo) {
  philosophyLogo.src =
    ZENIA.philosophyLogo;
}


// HERO IMAGES
const heroMap = {
  "hero-nighties":
    ZENIA.hero.nighties,

  "hero-kaftans":
    ZENIA.hero.kaftans,

  "hero-coords":
    ZENIA.hero.coords,

  "hero-nightsuits":
    ZENIA.hero.nightsuits
};

for (const id in heroMap) {

  const img =
    document.getElementById(id);

  if (img) {
    img.src = heroMap[id];
  }

}

// AUTO LOAD COLLECTION IMAGES (VITE)

const collectionImages = {

  nighties: Object.values(
    import.meta.glob(
      "/Assets/nighties/*.{png,jpg,jpeg,webp}",
      {
        eager: true,
        import: "default"
      }
    )
  ),

  kaftans: Object.values(
    import.meta.glob(
      "/Assets/kaftans/*.{png,jpg,jpeg,webp}",
      {
        eager: true,
        import: "default"
      }
    )
  ),

  coords: Object.values(
    import.meta.glob(
      "/Assets/coords/*.{png,jpg,jpeg,webp}",
      {
        eager: true,
        import: "default"
      }
    )
  ),

  nightsuits: Object.values(
    import.meta.glob(
      "/Assets/nightsuits/*.{png,jpg,jpeg,webp}",
      {
        eager: true,
        import: "default"
      }
    )
  ),

  midi: Object.values(
    import.meta.glob(
      "/Assets/midi/*.{png,jpg,jpeg,webp}",
      {
        eager: true,
        import: "default"
      }
    )
  ),

  feedingnighty: Object.values(
    import.meta.glob(
      "/Assets/feeding-nighty/*.{png,jpg,jpeg,webp}",
      {
        eager: true,
        import: "default"
      }
    )
  ),

  shortkaftan: Object.values(
    import.meta.glob(
      "/Assets/short-kaftan/*.{png,jpg,jpeg,webp}",
      {
        eager: true,
        import: "default"
      }
    )
  ),

  fancy: Object.values(
    import.meta.glob(
      "/Assets/fancy/*.{png,jpg,jpeg,webp}",
      {
        eager: true,
        import: "default"
      }
    )
  )

};



const collections = collectionImages;

// Organize images by folder name
for (const path in collectionImages) {

  const parts = path.split("/");
  const folder = parts[2];

  if (!collections[folder]) {
    collections[folder] = [];
  }

  collections[folder].push(
    collectionImages[path]
  );
}

// Create slideshow images dynamically
document
  .querySelectorAll(".product-thumb")
  .forEach(card => {

    const category =
      card.dataset.category;

    const images =
      collections[category];

    if (!images || !images.length) return;

    const slideshow =
      card.querySelector(
        ".card-slideshow"
      );

    // Remove old slides if any
    slideshow
      .querySelectorAll(".card-slide")
      .forEach(slide => slide.remove());

    // Add images dynamically
    images.forEach((src, index) => {

      const img =
        document.createElement("img");

      img.className =
        index === 0
          ? "card-slide active"
          : "card-slide";

      img.src = src;

      slideshow.prepend(img);

    });

  });