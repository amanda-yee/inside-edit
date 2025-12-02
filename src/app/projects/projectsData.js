// slug and public folder name should match


// ***** Image Optimization / Resizing *****
// Terminal code to optimize images (reduce to 1600px wide and convert jpg to webp - saves ~80% file size):
// mkdir optimized
//mogrify -path optimized -resize 1600x -format webp *.jpg

// Code to get image dimensions. Explicitly state the media size for now (tech debt):
// magick identify -format "%f: %wx%h\n" *.webp

export const projectsData = [
  {
    slug: "hudson-valley",
    title: "Hudson Valley",
    subheading: "Historic home",
    description: "This project was all about balance: honoring the soul of a historic home while creating a serene, layered retreat for modern family life. The bones were beautiful - rich with original millwork, hand-laid floors, and timeworn charm - but the interiors needed to breathe. \n\n \
    We opened up key spaces to let in the light and the views, then softened and brightened the palette to reflect the landscape beyond the windows. Throughout the home, we blended textured neutrals, soft upholstery, and warm woods with unexpected, whimsical touches - a hand-painted wall here, a sculptural sconce there - to keep things feeling playful but polished. \n\n \
    Every room was approached with a livable elegance in mind. Think: refined details, but nothing too precious. Durable fabrics, thoughtful storage, and family-friendly flow make this home as functional as it is beautiful.\n\n \
    We preserved and reimagined many of the home’s original architectural details - from the stately stair banister to the intricate moldings - giving them new life in a space that now feels open, comfortable, and deeply personal.\n\n \
    It’s a home with history - and now, a fresh chapter of warmth, light, and livability.",
    media: [
      {src: '/hudson-valley/photo1.webp', width: 1600, height: 2400},
      {src: '/hudson-valley/photo2.webp', width: 1600, height: 2000},
      {src: '/hudson-valley/photo3.webp', width: 1600, height: 2400},
      {src: '/hudson-valley/photo4.webp', width: 1600, height: 2000},
      {src: '/hudson-valley/photo5.webp', width: 1600, height: 2399},
      {src: '/hudson-valley/photo6.webp', width: 1600, height: 2400},
      
      {src: '/hudson-valley/extra1.webp', width: 1600, height: 2399},
      {src: '/hudson-valley/extra2.webp', width: 1600, height: 2400},
      {src: '/hudson-valley/extra3.webp', width: 1600, height: 2400},
      {src: '/hudson-valley/extra4.webp', width: 1600, height: 2000},
      {src: '/hudson-valley/extra5.webp', width: 1600, height: 2400},
      {src: '/hudson-valley/extra6.webp', width: 1600, height: 2400},
      {src: '/hudson-valley/extra7.webp', width: 1600, height: 2400},
      {src: '/hudson-valley/extra8.webp', width: 1600, height: 2000},
      {src: '/hudson-valley/extra9.webp', width: 1600, height: 2000},
      {src: '/hudson-valley/extra10.webp', width: 1600, height: 2000},
      {src: '/hudson-valley/extra11.webp', width: 1600, height: 2400},
      {src: '/hudson-valley/extra12.webp', width: 1600, height: 2400},
      {src: '/hudson-valley/extra13.webp', width: 1600, height: 2000},
      
    ],
    thumbnailCount: 6 // specify how many thumbnails to show in grid (rest are hidden but still accessible in carousel)
  },
  {
    slug: "upstate-barn",
    title: "Upstate Barn",
    // subheading: "",
    description: "What was once a hardworking 19th-century barn is now a breathtaking multipurpose space - equal parts heritage and high design. \n\n \
    We began by honoring the barn’s original structure, preserving its soaring timber trusses and hand-hewn beams. These elements became the backbone of the design, anchoring the space with a sense of history and quiet strength. Rather than compete with the past, we worked with it - amplifying the volume and character of the building while adding modern layers of comfort and functionality. \n\n \
    A sleek, light-filled apartment now lives on the upper level, complete with a full kitchen, open-concept living area, and panoramic views thanks to expansive new glazing. Modern steel-framed windows and oversized doors were added to flood the interiors with natural light and to blur the lines between indoors and out - making the most of the barn’s original siting and stunning surroundings\n\n \
    Downstairs, a custom bar and entertaining space invite gatherings year-round, with materials that echo the barn’s past but speak to today’s lifestyle. We preserved the original horse stables - widely considered one of the best surviving examples of 1800s equestrian architecture in the region - keeping their craftsmanship intact and letting their details shine.\n\n \
    This is more than a renovation. It’s a respectful reinvention: a living space that celebrates history, elevates utility, and invites life to unfold inside walls that have already stood for centuries.",
    media: [
      {src: '/upstate-barn/photo1.webp', width: 1600, height: 2400},
      {src: '/upstate-barn/photo2.webp', width: 1600, height: 1067},
      {src: '/upstate-barn/photo3.webp', width: 1600, height: 2400},
      {src: '/upstate-barn/photo4.webp', width: 1600, height: 1067},
    ],
    thumbnailCount: 4
  },
  {
    slug: "upstate-new-york",
    title: "Upstate New York",
    description: "",
    media: [
      {src: '/upstate-new-york/photo1.webp', width: 1600, height: 2240},
      {src: '/upstate-new-york/photo2.webp', width: 1600, height: 2399},
      {src: '/upstate-new-york/photo3.webp', width: 1600, height: 2378},
      {src: '/upstate-new-york/photo4.webp', width: 1600, height: 2240},
      {src: '/upstate-new-york/photo5.webp', width: 1600, height: 2400},
      {src: '/upstate-new-york/photo6.webp', width: 1600, height: 2000},

      {src: '/upstate-new-york/9P_WEB 1.webp', width: 1600, height: 2000},
      {src: '/upstate-new-york/9P_WEB 2.webp', width: 1600, height: 2240},
      {src: '/upstate-new-york/9P_WEB 4.webp', width: 1600, height: 2400},
      {src: '/upstate-new-york/9P_WEB 5.webp', width: 1600, height: 2400},
      {src: '/upstate-new-york/9P_WEB 7.webp', width: 1600, height: 2399},
      {src: '/upstate-new-york/9P_WEB 11.webp', width: 1600, height: 2240},
      {src: '/upstate-new-york/9P_WEB 13.webp', width: 1600, height: 2000},
    ],
    thumbnailCount: 6
  },
  {
    slug: "5th-avenue",
    title: "5th Avenue",
    description: "",
    media: [
      {src: '/5th-avenue/photo1.webp', width: 1600, height: 2000},
      {src: '/5th-avenue/photo2.webp', width: 1600, height: 1096},
      {src: '/5th-avenue/photo3.webp', width: 1600, height: 2000},
      {src: '/5th-avenue/photo4.webp', width: 1600, height: 2363},
      {src: '/5th-avenue/photo5.webp', width: 1600, height: 1105},
      {src: '/5th-avenue/photo6.webp', width: 1600, height: 2000},
    ],
    thumbnailCount: 6
  },
  {
    slug: "west-village",
    title: "West Village",
    description: "",
    media: [
      {src: '/west-village/photo1.webp', width: 1600, height: 2223},
      {src: '/west-village/photo2.webp', width: 1600, height: 2017},
      {src: '/west-village/photo3.webp', width: 1600, height: 2400},
      {src: '/west-village/photo4.webp', width: 1600, height: 2400},
      {src: '/west-village/photo5.webp', width: 1600, height: 2400},
      {src: '/west-village/photo6.webp', width: 1600, height: 2400},

      {src: '/west-village/2Cor_WEB 1.webp', width: 1600, height: 2400},
      {src: '/west-village/2Cor_WEB 4.webp', width: 1600, height: 2400},
    ],
    thumbnailCount: 6
  },
  {
    slug: "ues",
    title: "Upper East Side",
    description: "",
    media: [
      {src: '/ues/photo1.webp', width: 1600, height: 2400},
      {src: '/ues/photo2.webp', width: 1600, height: 1067},
      {src: '/ues/photo3.webp', width: 1600, height: 2000},
      {src: '/ues/photo4.webp', width: 1600, height: 2000},
      {src: '/ues/photo5.webp', width: 1600, height: 1067},
      {src: '/ues/photo6.webp', width: 1600, height: 2400},
      {src: '/ues/photo7.webp', width: 1600, height: 2000},
      {src: '/ues/photo8.webp', width: 1600, height: 1067},
      {src: '/ues/photo9.webp', width: 1600, height: 1067},
      {src: '/ues/photo10.webp', width: 1600, height: 2400},
      {src: '/ues/photo11.webp', width: 1600, height: 2400},
      {src: '/ues/photo12.webp', width: 1600, height: 1067},
      {src: '/ues/photo13.webp', width: 1600, height: 2240},
      {src: '/ues/photo14.webp', width: 1600, height: 2400},
      {src: '/ues/photo15.webp', width: 1600, height: 1867},

      {src: '/ues/Parkave_WEB 3.webp', width: 1600, height: 2399},
      {src: '/ues/Parkave_WEB 4.webp', width: 1600, height: 2000},
      {src: '/ues/Parkave_WEB 6.webp', width: 1600, height: 2400},
      {src: '/ues/Parkave_WEB 7.webp', width: 1600, height: 2000},
      {src: '/ues/Parkave_WEB 10.webp', width: 1600, height: 2400},
      {src: '/ues/Parkave_WEB 11.webp', width: 1600, height: 2399},
      {src: '/ues/Parkave_WEB 13.webp', width: 1600, height: 2000},
      {src: '/ues/Parkave_WEB 15.webp', width: 1600, height: 2400},
      {src: '/ues/Parkave_WEB 16.webp', width: 1600, height: 2000},
      {src: '/ues/Parkave_WEB 27.webp', width: 1600, height: 2399},
      {src: '/ues/Parkave_WEB 28.webp', width: 1600, height: 1067},
      {src: '/ues/Parkave_WEB 29.webp', width: 1600, height: 1600},
      {src: '/ues/Parkave_WEB 31.webp', width: 1600, height: 2399},
      {src: '/ues/Parkave_WEB 32.webp', width: 1600, height: 2400},
      {src: '/ues/Parkave_WEB 33.webp', width: 1600, height: 1067},
      {src: '/ues/Parkave_WEB 36.webp', width: 1600, height: 2400}, 
      {src: '/ues/Parkave_WEB 42.webp', width: 1600, height: 2400},
      {src: '/ues/Parkave_WEB 43.webp', width: 1600, height: 1067},
      {src: '/ues/Parkave_WEB 45.webp', width: 1600, height: 2240},
      {src: '/ues/Parkave_WEB 46.webp', width: 1600, height: 2400},
      {src: '/ues/Parkave_WEB 48.webp', width: 1600, height: 2400},
      {src: '/ues/Parkave_WEB 49.webp', width: 1600, height: 2000},
      {src: '/ues/Parkave_WEB 54.webp', width: 1600, height: 1067},
      {src: '/ues/Parkave_WEB 55.webp', width: 1600, height: 1067},
      {src: '/ues/Parkave_WEB 56.webp', width: 1600, height: 2400},
      {src: '/ues/Parkave_WEB.webp', width: 1600, height: 2400},

    ],
    thumbnailCount: 15
  },
  // {
  //   slug: "uws-townhouse",
  //   title: "Upper West Side Townhouse",
  //   description: "...",
  // },
  {
    slug: "uws-apartment",
    title: "Upper West Side Apartment",
    description: "",
    media: [
      {src: '/uws-apartment/270WE_WEB.webp', width: 1600, height: 2240},
      {src: '/uws-apartment/270WE_WEB 1.webp', width: 1600, height: 2000},
      {src: '/uws-apartment/270WE_WEB 2.webp', width: 1600, height: 2400},
      {src: '/uws-apartment/270WE_WEB 3.webp', width: 1600, height: 2400},
      {src: '/uws-apartment/270WE_WEB 4.webp', width: 1600, height: 2400},
      {src: '/uws-apartment/270WE_WEB 5.webp', width: 1600, height: 2400},
      {src: '/uws-apartment/270WE_WEB 6.webp', width: 1600, height: 2400},
      {src: '/uws-apartment/270WE_WEB 7.webp', width: 1600, height: 2240},
      {src: '/uws-apartment/270WE_WEB 8.webp', width: 1600, height: 2240},
      {src: '/uws-apartment/270WE_WEB 9.webp', width: 1600, height: 2240},
      {src: '/uws-apartment/270WE_WEB 10.webp', width: 1600, height: 2240},
      {src: '/uws-apartment/270WE_WEB 11.webp', width: 1600, height: 2400},
      {src: '/uws-apartment/270WE_WEB 12.webp', width: 1600, height: 2240},
      {src: '/uws-apartment/270WE_WEB 13.webp', width: 1600, height: 2400},
      {src: '/uws-apartment/270WE_WEB 14.webp', width: 1600, height: 2400},
      {src: '/uws-apartment/270WE_WEB 15.webp', width: 1600, height: 2400},
      {src: '/uws-apartment/270WE_WEB 16.webp', width: 1600, height: 1600},
      {src: '/uws-apartment/270WE_WEB 17.webp', width: 1600, height: 2400},
      {src: '/uws-apartment/270WE_WEB 18.webp', width: 1600, height: 1971},
    ],
    thumbnailCount: 12
  },
  // {
  //   slug: "vermont",
  //   title: "Vermont",
  //   description: "...",
  // },
];
