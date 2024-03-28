import {
  ButtonStates,
  ButtonVariants,
} from "@/@types/components/atoms/button.types";
import { Icons } from "@/@types/components/atoms/icons.type";
import Button from "@/components/atoms/button";
import Icon from "@/components/atoms/icons";

export default function Home() {
  return (
    <main className="flex w-full h-[100svh] items-center justify-center">
      <Button className="rounded-[4px] bg-black">Yeah Bitch</Button>
    </main>
  );
}
