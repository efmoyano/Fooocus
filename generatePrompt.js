function generatePrompt() {
  // Base section
  const base = [
    "(8k, RAW photo, best quality)",
    "(realistic, photo-realistic:1.37)",
    "ultra-detailed",
    "(22.3) year old (woman:1.1)",
  ];

  // Mouth
  const mouth = ["natural mouth size", "realistic mouth"];

  // Face section
  const face = [
    "beautiful detailed lips",
    "physically-based rendering",
    //"beautiful smile",
    "angry",
    "furious",
    "livid",
    //"embarrassed",
    //"ashamed",
    //"mortified",
  ];

  const eyes = [
    "beautiful detailed blue eyes",
    "extremely detailed eyes and face",
    "beautiful detailed eyes",
    "perfect eyes",
    "((blue_eyes))",
  ];

  // Body section
  const body = ["detailed abs", "full body", "full-body shot", "see-through"];

  // Face Direction section
  const faceDirection = ["looking at viewer"];

  // Skin section
  const skin = [
    "detailed skin",
    "realistic skin tone",
    "skin indentation",
    "lifelike skin texture",
    "skin pores",
    "textured skin",
    "realistic skin",
    "freckled cheekbones",
  ];

  // Hands
  const hands = ["perfect hands"];

  // Hair section
  const hair = [
    "natural hair lighting",
    "realistic hair texture",
    "fine hair detail",
    "smooth but textured hairstyle",
    "soft hair texture",
    "((purple_hair))",
    "messy hair",
    "long ponytail haircut",
  ];

  // Scene
  const livingRoom =
    "a living room, bright modern Scandinavian style house, large windows, magazine photoshoot, studio lighting";
  const scene = [livingRoom];

  // Concatenate sections into a single prompt
  const prompt = [
    ...base,
    ...face,
    ...eyes,
    ...mouth,
    ...hands,
    ...body,
    ...faceDirection,
    ...skin,
    ...hair,
    ...scene,
  ].join(", ");

  return prompt;
}

const dynamicPrompt = generatePrompt();
console.log(dynamicPrompt);
