import { useEffect } from "react";
import { Button } from "@headlessui/react";
import "./ButtonTap.scss";
import "@/styles/mods.scss";

interface ButtonTapProps {
  onClick?: () => void;
}

export function ButtonTap({ onClick }: ButtonTapProps) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.target instanceof HTMLButtonElement) {
        pop(e as PopEvent);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <Button
      className={"tap-btn bg-brand-high bg-center bg-no-repeat rounded-full"}
      onClick={onClick}
      data-type="logo" // пример значения
    ></Button>
  );
}

interface PopEvent extends MouseEvent {
  target: HTMLButtonElement & {
    dataset: {
      type?: string;
    };
  };
}

function pop(e: PopEvent): void {
  const amount = 15;

  const { clientX, clientY, target } = e;
  if (clientX === 0 && clientY === 0) {
    const bbox = target.getBoundingClientRect();
    const x = bbox.left + bbox.width * 2;
    const y = bbox.top + bbox.height * 2;
    for (let i = 0; i < 30; i++) {
      createParticle(x, y, target.dataset.type);
    }
  } else {
    for (let i = 0; i < amount; i++) {
      createParticle(clientX, clientY, target.dataset.type);
    }
  }
}

function createParticle(x: number, y: number, type?: string): void {
  const particle = document.createElement("particle");
  document.body.appendChild(particle);

  const width = Math.floor(Math.random() * 130 + 8);
  const height = Math.floor(Math.random() * 130 + 8);
  const destinationX = (Math.random() - 0.5) * 600;
  const destinationY = (Math.random() - 0.5) * 600;
  const rotation = Math.random() * 320;
  const delay = Math.random() * 100;

  switch (type) {
    case "logo":
      particle.style.backgroundImage = "url(src/assets/images/brain.png)";
      break;
  }

  particle.style.width = `${width}px`;
  particle.style.height = `${height}px`;

  const animation = particle.animate(
    [
      {
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
        opacity: 1,
      },
      {
        transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
        opacity: 1,
      },
      {
        transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
        opacity: 0,
      },
    ],
    {
      duration: Math.random() * 100 + 3500,
      easing: "cubic-bezier(0, .9, .57, 1)",
      delay: delay,
    },
  );

  animation.onfinish = () => removeParticle(particle);
}

function removeParticle(particle: HTMLElement): void {
  if (particle instanceof HTMLElement) {
    particle.remove();
  }
}
