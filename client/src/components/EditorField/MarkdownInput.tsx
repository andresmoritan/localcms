import React from 'react';

import { FieldId } from '../../constants/types';

interface Props {
  htmlId: FieldId;
  value: string;
  onFieldUpdated: (value: string) => void;
}

const MarkdownInput = ({
  htmlId,
  value,
  onFieldUpdated,
}: Props): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onFieldUpdated(event.target.value);
  };

  return (
    <textarea
      className="w-full border-solid border-2 border-gray-200 p-2"
      rows={12}
      id={htmlId}
      value={value}
      onChange={handleChange}
    />
  );
};

export default MarkdownInput;
