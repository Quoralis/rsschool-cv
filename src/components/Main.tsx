import { Contacts } from '../sections/Contacts';
import { Stack } from '../sections/Stack';
import { SoftSkills } from '../sections/SoftSkills';
import { Education } from '../sections/Education';
import { English } from '../sections/English';
import { About } from '../sections/About';
import { Experience } from '../sections/Experience';
import { CodeExample } from '../sections/CodeEx';
import { Projects } from '../sections/Projetcs';

export function Main() {
  return (
    <main className="flex gap-8 items-start text-sm ">
      <aside className="bg-stone-400 md:col-span-1 space-y-3 p-4 rounded-xl shadow ">
        <Contacts />
        <Stack />
        <SoftSkills />
        <Education />
        <English />
      </aside>
      <div className="flex-[2.5] flex-col gap-6 p-4 bg-stone-300 rounded-2xl">
        <About />
        <Experience />
        <Projects />
        <CodeExample />
      </div>
    </main>
  );
}
