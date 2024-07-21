import { Slider } from "@/components/ui/slider";

export default function SimpleSlider() {
  return (
    <div>
      <Slider
        defaultValue={[10]}
        max={100}
        step={1}
        className="w-1 h-1" // Simplified styling
      />
    </div>
  );
}
