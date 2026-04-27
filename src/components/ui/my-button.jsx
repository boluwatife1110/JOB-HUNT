import { cn } from "@/lib/utils";

export default function Button({ text,  fill }) {
  return (
    <button
      className={cn(
        `border text-lg font-semibold py-2 px-4 rounded-2xl text-center cursor-pointer `,
       fill && "text-white bg-black",
     

       
      )}
      
    >
      {text}
     
    </button>
  );
}
