import { Fira_Sans } from "next/font/google";
import { Prompt } from "next/font/google";

const prompt = Prompt({ subsets: ["latin"], weight: "400" });
const firaSans = Fira_Sans({ subsets: ["latin"], weight: "500" });
const firaSansLight = Fira_Sans({ subsets: ["latin"], weight: "300" });
const firaSansBold = Fira_Sans({ subsets: ["latin"], weight: "900" });

export { prompt, firaSans, firaSansLight, firaSansBold };
