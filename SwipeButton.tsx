import './SwipeButton.css';
import { useState } from 'react';

interface SwipeButtonProps {
  labelOn?: string;
  labelOff?: string;
  onChange?: (checked: boolean) => void;
}

export default function SwipeButton({
  labelOn = 'Ligado',
  labelOff = 'Desligado',
  onChange,
}: SwipeButtonProps) {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    onChange?.(isChecked);
  };

  return (
    <label className="swipe-toggle">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className="slider">
        <span className="label-on">{labelOn}</span>
        <span className="label-off">{labelOff}</span>
        <span className={`ball ${checked ? 'right' : 'left'}`}>
          {checked ? '☽' : '☀'}
        </span>
      </span>
    </label>
  );
}
