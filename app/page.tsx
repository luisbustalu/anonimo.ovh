import {NavigationBar} from "./components/NavigationBar";
import {HeroSection} from "./components/HeroSection";
import {AboutSection} from "./components/AboutSection";
import {SkillsSection} from "./components/SkillsSection";
import {Footer} from "./components/Footer";

export default function Home() {
    return (
        <div
            className="grid grid-rows-[auto_1fr_auto] min-h-screen gap-16 font-[family-name:var(--font-geist-sans)] justify-items-center"
            id="home"
        >
            <NavigationBar/>
            <main className="flex flex-col gap-8 mt-28 items-center sm:items-start sm:w-2/3 w-5/6">
                <HeroSection/>
                <AboutSection/>
                <SkillsSection/>
            </main>
            <footer className="flex gap-6 flex-wrap items-center justify-center sm:w-2/3 w-5/6">
                <Footer/>
            </footer>
        </div>
    );
}