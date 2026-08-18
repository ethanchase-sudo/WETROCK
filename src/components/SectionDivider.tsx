interface SectionDividerProps {
  label?: string;
  coordinate?: string;
}

export function SectionDivider({ label, coordinate }: SectionDividerProps) {
  return (
    <div className="container-wide py-6 border-y border-bone-300/10 my-4">
      <div className="flex items-center justify-between">
        {label && (
          <p className="label-mono text-bone-500">{label}</p>
        )}
        {coordinate && (
          <p className="label-mono text-bone-600">{coordinate}</p>
        )}
      </div>
      <div className="tick-marks h-2 mt-3" />
    </div>
  );
}
