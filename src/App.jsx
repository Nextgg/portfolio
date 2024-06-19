import "./App.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TimeLineDaisyUI from "./components/ui/timelinemodern";
function App() {
  return (
    <div className="bg-stone-900 w-full h-screen">
      <div className="flex flex-col justify-center ">
        <h1 className=" text-white mx-auto pt-12 text-2xl font-semibold tracking-tight ">
          Vladislav
        </h1>
        <h4 className=" text-neutral-400 mx-auto pt-2 text-m font-semibold tracking-tight">
          developer
        </h4>
      </div>
      {/* 
      <div id="blockinfo">
        
      </div> */}

      <div className="pt-24 flex justify-center">
        <p className=" text-white max-w-44 float-right mr-40 font-semibold">
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king's pillow, in his
          soup, even in the royal toilet. The king was furious, but he couldn't
          seem to stop Jokester.
        </p>
        <Avatar className="size-24  justify-center">
          <AvatarImage src="https://avatars.githubusercontent.com/u/25897342?v=4" />
          <AvatarFallback>vlad</AvatarFallback>
        </Avatar>
        <p className=" text-white max-w-40 float-right ml-40 font-semibold " >
          <span className="text-cyan-300 text-shadow-lg">
            &lt;education&gt;
              <span className="text-white">Belgorod state university (BSU)</span>
            &lt;/education&gt;
          </span>
          <span className="text-yellow-300 text-shadow-lg">
            &lt;experience&gt;
              <span className="text-white"><br/>1+ year<br/></span>
            &lt;/experience&gt;
          </span>
        </p>
      </div>

      {/* <div class="flex flex-1 justify-center">
        <div class="inline-block h-[100px] min-h-[1em] w-0.5 self-stretch bg-neutral-100"></div>
      </div> */}
    </div>
  );
}

export default App;
