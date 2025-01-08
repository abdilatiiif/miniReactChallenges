const colors = {
  javascript: "#dc2626",
  html: "#78716c",
  css: "#2F4E00FF",
  react: "#2563eb",
  nextjs: "#1e293b",
  tailwindcss: "#6d28d9",
};

export default function ProfileCard() {
  return (
    <div className="container w-1/3 border-2 mx-auto text-center text-2xl p-4 mt-5 bg-[#84cc16] rounded-xl">
      <div className="flex justify-center align-center">
        <img
          src="https://miro.medium.com/v2/resize:fit:736/1*YqfVlyCe06DfcPsR3kpYrw.jpeg"
          alt="luffy"
          className="w-80"
        />
      </div>
      <p className="p-4 text-left text-gray-700">
        Velkommen, til meg! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eaque eum itaque voluptates. Quidem unde consectetur, inventore
        porro temporibus quia? Quidem vitae suscipit iste tempora natus nostrum
        earum ut quae temporibus?
      </p>
      <h3 className="mb-5 font-bold">Programing language:</h3>
      <ul className="grid grid-cols-3 gap-5">
        <Skill />
      </ul>
    </div>
  );
}

function Skill() {
  const skills = Object.entries(colors);

  console.log(skills);

  const skill = skills.map((skill) => {
    console.log(skill);

    console.log(skill[1]);

    return (
      <li
        key={skill}
        className="p-4 text-white rounded-2xl"
        style={{ backgroundColor: skill[1] }}
      >
        {skill[0]}
      </li>
    );
  });

  return skill;
}
