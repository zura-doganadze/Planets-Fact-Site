type Planet = {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string | undefined;
    internal: string | undefined;
    geology: string | undefined;
  };
};

type Selected = {
  content: string;
  source: string;
  planet: string | undefined;
  internal: string | undefined;
  geology: string | undefined;
};
