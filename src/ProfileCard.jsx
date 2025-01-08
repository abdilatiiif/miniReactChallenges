const colors = {
  javascript: "#dc2626",
  html: "#78716c",
  css: "#84cc16",
  react: "#2563eb",
  nextjs: "#1e293b",
  Tailwindcss: "#6d28d9",
};

export default function ProfileCard() {
  return (
    <div className="container w-1/3 border-2 mx-auto text-center text-2xl p-4 mt-5 bg-[#84cc16] rounded-xl">
      <div className="flex align-center justify-center">
        <img
          src="https://miro.medium.com/v2/resize:fit:736/1*YqfVlyCe06DfcPsR3kpYrw.jpeg"
          alt="luffy"
          className="w-80"
        />
      </div>
      <p className="text-left p-4 text-gray-700">
        Velkommen, til meg! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eaque eum itaque voluptates. Quidem unde consectetur, inventore
        porro temporibus quia? Quidem vitae suscipit iste tempora natus nostrum
        earum ut quae temporibus?
      </p>
      <h3 className="font-bold mb-5">Programing language:</h3>
      <ul className="grid grid-cols-3 gap-5">
        <Skill />
        <li className="bg-red-400 p-4 rounded-2xl text-white">Html</li>
        <li className="bg-red-400 p-4 rounded-2xl text-white">Css</li>
        <li className="bg-red-400 p-4 rounded-2xl text-white">ReactJS</li>
        <li className="bg-red-400 p-4 rounded-2xl text-white">NextJS</li>
        <li className="bg-red-400 p-4 rounded-2xl text-white">TailwindCSS</li>
      </ul>
    </div>
  );
}

function Skill() {
  console.log(colors);

  return <li className="bg-red-400 p-4 rounded-2xl text-white">Javascript</li>;
}
