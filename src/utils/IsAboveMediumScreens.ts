import useMediaQuery from "@/hooks/useMediaQuery";

export const isAboveMediumSceens = () => {
  return useMediaQuery("(min-width: 1060px)");
};


