// slug and public folder name should match

//Terminal code to optimize images (reduce to 1600px wide and convert jpg to webp - saves ~80% file size):
//mkdir optimized
//mogrify -path optimized -resize 1600x -format webp *.jpg

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
      '/hudson-valley/photo1.webp',
      '/hudson-valley/photo2.webp',
      '/hudson-valley/photo3.webp',
      '/hudson-valley/photo4.webp',
      '/hudson-valley/photo5.webp',
      '/hudson-valley/photo6.webp',
    ]
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
      '/upstate-barn/photo1.webp',
      '/upstate-barn/photo2.webp',
      '/upstate-barn/photo3.webp',
      '/upstate-barn/photo4.webp',
    ]
  },
  {
    slug: "upstate-new-york",
    title: "Upstate New York",
    description: "",
    media: [
      '/upstate-new-york/photo1.webp',
      '/upstate-new-york/photo2.webp',
      '/upstate-new-york/photo3.webp',
      '/upstate-new-york/photo4.webp',
      '/upstate-new-york/photo5.webp',
      '/upstate-new-york/photo6.webp'
    ]
  },
  {
    slug: "5th-avenue",
    title: "5th Avenue",
    description: "",
    media: [
      '/5th-avenue/photo1.webp',
      '/5th-avenue/photo2.webp',
      '/5th-avenue/photo3.webp',
      '/5th-avenue/photo4.webp',
      '/5th-avenue/photo5.webp',
      '/5th-avenue/photo6.webp'
    ]
  },
  {
    slug: "west-village",
    title: "West Village",
    description: "",
    media: [
      '/west-village/photo1.webp',
      '/west-village/photo2.webp',
      '/west-village/photo3.webp',
      '/west-village/photo4.webp',
      '/west-village/photo5.webp',
      '/west-village/photo6.webp'
    ]
  },
  {
    slug: "ues",
    title: "Upper East Side",
    description: "",
  },
  // {
  //   slug: "uws-townhouse",
  //   title: "Upper West Side Townhouse",
  //   description: "...",
  // },
  // {
  //   slug: "uws-apartment",
  //   title: "Upper West Side Apartment",
  //   description: "...",
  // },
  // {
  //   slug: "vermont",
  //   title: "Vermont",
  //   description: "...",
  // },
];
